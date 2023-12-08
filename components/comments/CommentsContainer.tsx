'use client';
import useComments from '@/hooks/useComments';
import { signIn, signOut, useSession } from 'next-auth/react';
import React from 'react';
import { useTranslation } from '@/i18n/client';

import CommentList from './CommentsList';
import CommentsSkeleton from '../loading-skeletons/CommentsList';

type CommentsContainerProps = {
  relatedSlugs: Array<string>;
  currentSlug: string;
  currentLocale: string;
};
const CommentsContainer = ({
  relatedSlugs,
  currentSlug,
  currentLocale,
}: CommentsContainerProps) => {
  const { status } = useSession();
  const isAuthenticated = status === 'authenticated';
  const { message, setMessage, comments, handleSubmit, handleDelete, isLoading } = useComments({
    relatedSlugs,
    currentSlug,
  });
  const { t } = useTranslation(currentLocale, 'translation');
  return (
    <section className='max-w-xl'>
      <p className='text-3xl font-bold my-6'>{t('comments')}</p>
      <form onSubmit={handleSubmit} className='grid gap-2 '>
        <textarea
          aria-label='comment'
          className='border-2 disabled:border-none disabled:cursor-not-allowed focus-within:border-2 focus:border-2 resize-y p-4 rounded-md disabled:bg-gray-200 dark:bg-gray-700'
          disabled={!isAuthenticated}
          placeholder={
            isAuthenticated
              ? 'What are your thoughts about this post?'
              : 'Please sign in to share your thoughts'
          }
          value={message}
          onChange={({ target }) => setMessage(target.value)}
          cols={50}
          rows={2}
        />
        <section className='flex gap-2'>
          <button aria-label='submit-comment' className='btn-primary px-2 py-1'>
            {t('submitComment')}
          </button>

          {isAuthenticated ? (
            <button onClick={() => signOut()} className='btn-primary px-2 py-1'>
              {t('signOut')}
            </button>
          ) : (
            <button onClick={() => signIn('google')} className='btn-primary px-2 py-1'>
              {t('signIn')}
            </button>
          )}
        </section>
      </form>

      {isLoading ? (
        <CommentsSkeleton />
      ) : (
        <CommentList onDelete={handleDelete} comments={comments} />
      )}
    </section>
  );
};

export default CommentsContainer;
