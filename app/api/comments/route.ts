import connectToMongo from '@/lib/db/connection';
import { NextResponse } from 'next/server';
import Comment from '@/lib/db/models/comments';
import { getServerSession } from 'next-auth/next';

import { authOptions } from '../auth/[...nextauth]/options';

export async function POST(req: Request) {
  const body = await req.json();
  const { message } = body;
  if (!message) return NextResponse.json({ message: 'Missing message!' }, { status: 400 });
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ message: 'Unauthorized!' }, { status: 401 });
  const { user } = session;

  try {
    const newComment = new Comment({
      message,
      name: user?.name,
      image: user?.image,
    });
    await connectToMongo();
    await newComment.save();
    return NextResponse.json({ message: 'Comment has been posted.' }, { status: 201 });
  } catch (err: any) {
    return NextResponse.json({ message: err }, { status: 500 });
  }
}

export const GET = async () => {
  try {
    await connectToMongo();
    const comments = await Comment.collection.find({}).toArray();
    return NextResponse.json(comments, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
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
