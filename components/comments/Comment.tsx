import { Comment } from '@/lib/db/models/comments';
import { agoFromNow } from '@/lib/helpers';
import { useSession } from 'next-auth/react';
import Image from 'next/image';

type CommentListProps = {
  comments?: Comment[];
  // eslint-disable-next-line no-unused-vars
  onDelete: (comment: Comment) => Promise<void>;
};

export default function CommentList({ comments, onDelete }: CommentListProps) {
  const { data: session } = useSession();
  return (
    <div className='space-y-6 mt-10'>
      {comments &&
        comments.map((comment) => {
          /* const isAuthor = user && user.sub === comment.user.sub;
           */
          const isAdmin =
            session?.user && session?.user?.email === process.env.NEXT_PUBLIC_SITE_ADMIN_EMAIL;

          return (
            <div key={comment.createdAt} className='flex space-x-4'>
              <div className='flex-shrink-0'>
                <Image
                  className='rounded-full'
                  src={comment.image}
                  alt={comment.name}
                  width={36}
                  height={36}
                />
              </div>

              <div className='flex-grow'>
                <div className='flex space-x-2'>
                  <b>{comment.name}</b>
                  <time className='text-gray-400'>{agoFromNow(comment.createdAt)}</time>
                  {isAdmin && (
                    <button
                      className='text-gray-400 hover:text-red-500'
                      onClick={() => onDelete(comment)}
                      aria-label='Close'
                    >
                      x
                    </button>
                  )}
                </div>

                <div>{comment.message}</div>
              </div>
            </div>
          );
        })}
    </div>
  );
}
