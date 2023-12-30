import connectToMongo from '@/lib/db/connection';
import { NextResponse } from 'next/server';
import Comment from '@/lib/db/models/comments';
import { getServerSession } from 'next-auth/next';

import { authOptions } from '../auth/[...nextauth]/options';

export async function POST(req: Request) {
  const body = await req.json();
  const { message, relatedSlugs } = body;
  if (!message || !relatedSlugs)
    return NextResponse.json(
      { message: 'Missing message and/or relatedSlugs parameters!' },
      { status: 400 }
    );
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ message: 'Unauthorized!' }, { status: 401 });
  const { user } = session;
  try {
    const newComment = new Comment({
      message,
      name: user?.name,
      image: user?.image,
      relatedSlugs: relatedSlugs,
      email: user?.email,
    });
    await connectToMongo();
    await newComment.save();
    return NextResponse.json({ message: 'Comment has been posted.' }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ message: err }, { status: 500 });
  }
}

export const GET = async (req: Request) => {
  const url = new URL(req.url);
  const currentSlug = url.searchParams.get('currentSlug');
  try {
    await connectToMongo();
    const comments = await Comment.collection
      .find({ relatedSlugs: { $in: [currentSlug] } }) // $in brings all documents that has current slug inside its realtedSlugs array
      .toArray();
    return NextResponse.json({ data: comments, error: null }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ data: null, error }, { status: 500 });
  }
};

export const DELETE = async (req: Request) => {
  const body = await req.json();
  const { comment } = body;
  if (!comment) return NextResponse.json({ message: 'Missing comment!' }, { status: 400 });
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ message: 'Unauthorized!' }, { status: 401 });
  const { user } = session;
  const authorizedToDelete =
    user?.email === comment.email || user?.email === process.env.NEXT_PUBLIC_SITE_ADMIN_EMAIL;
  if (!authorizedToDelete) return NextResponse.json({ message: 'Unauthorized!' }, { status: 401 });
  try {
    await connectToMongo();
    await Comment.findByIdAndDelete(comment._id);
    return NextResponse.json({ message: 'Comment has been deleted.' }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
};
