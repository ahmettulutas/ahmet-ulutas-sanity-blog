'use client';
import useComments from '@/hooks/useComments';
import { signIn, signOut, useSession } from 'next-auth/react';
import React from 'react';
import { useTranslation } from '@/i18n/client';

import CommentList from './CommentsList';
import { GmailIcon } from '../icons/Icons';

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
  const { message, setMessage, comments, handleSubmit, handleDelete, isLoading, error } =
    useComments({
      relatedSlugs,
      currentSlug,
    });
  const { t } = useTranslation(currentLocale, 'translation');
  return (
    <section className='max-w-xl'>
      <h4 className='text-lg md:text-2xl font-bold my-6'>{t('comments')}</h4>
      <CommentList
        onDelete={handleDelete}
        comments={comments?.data}
        isLoading={isLoading}
        error={error}
      />
      <form onSubmit={handleSubmit} className='grid gap-2 mt-4'>
        <textarea
          required
          aria-label='comment'
          className='border border-black dark:border-white disabled:cursor-not-allowed focus-within:border-2 focus:border-2 resize-y px-4 py-2 rounded-2xl bg-transparent placeholder-600'
          disabled={!isAuthenticated}
          placeholder={isAuthenticated ? t('thoughtsAboutPost') : t('signInToShareThoughts')}
          value={message}
          onChange={({ target }) => setMessage(target.value)}
          cols={50}
          rows={2}
        />
        <section className='flex'>
          {isAuthenticated ? (
            <>
              <button
                disabled={!isAuthenticated}
                aria-label='submit-comment'
                className='btn-primary px-2 py-0 disabled:cursor-not-allowed'
              >
                {t('submitComment')}
              </button>
              <button onClick={() => signOut()} className='btn-primary px-2 py-0'>
                {t('signOut')}
              </button>
            </>
          ) : (
            <button
              onClick={() => signIn('google')}
              className='btn-primary px-2 py-1 flex items-center gap-2'
            >
              <GmailIcon className='hover:scale-125 transition-all ease duration-200 w-4 h-4' />
              {t('signIn')}
            </button>
          )}
        </section>
      </form>
    </section>
  );
};

export default CommentsContainer;
