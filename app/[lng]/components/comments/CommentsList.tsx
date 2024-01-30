'use client';
import { Comment } from '@/lib/db/models/comments';
import { agoFromNow } from '@/lib/helpers';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useTranslation } from '@/i18n/client';

import CommentsSkeleton from '../loading-skeletons/CommentsSkeleton';
import noContent from '../../public/images/no-content.svg';

type CommentListProps = {
  comments?: Comment[];
  // eslint-disable-next-line no-unused-vars
  onDelete: (comment: Comment) => Promise<void>;
  isLoading: boolean;
  error: any;
};

export default function CommentList({ comments, onDelete, isLoading, error }: CommentListProps) {
  const params = useParams();
  const { t } = useTranslation(params.lng as string, 'translation');
  const { data: session } = useSession();
  if (isLoading) return <CommentsSkeleton />;
  if (!comments?.length || error)
    return (
      <div className='grid place-items-center'>
        <Image src={noContent} alt='no-content' width={150} height={100} />
        <p className='text-gray-600 dark:text-dark-text/50'>{t('noComments')}</p>
      </div>
    );
  return (
    <div className='space-y-6 mt-4 max-h-40 overflow-auto'>
      {(comments || []).map((comment) => {
        const isAuthor = session?.user?.name === comment.name;
        const isAdmin = session?.user?.email === process.env.NEXT_PUBLIC_SITE_ADMIN_EMAIL;
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
                {(isAdmin || isAuthor) && (
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
