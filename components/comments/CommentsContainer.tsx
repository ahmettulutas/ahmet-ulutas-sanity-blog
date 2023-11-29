'use client';
import useComments from '@/hooks/useComments';
import { signIn, signOut, useSession } from 'next-auth/react';
import React from 'react';

import CommentList from './Comment';

const CommentsContainer = () => {
  const { status } = useSession();
  const isAuthenticated = status === 'authenticated';
  const { message, setMessage, comments, handleSubmit, handleDelete } = useComments();
  return (
    <>
      <form onSubmit={handleSubmit} className='grid gap-2'>
        <textarea
          aria-label='comment'
          className=' focus-within:border-2 focus:border-2 resize-y p-4 rounded-md disabled:bg-gray-200 dark:bg-gray-700'
          disabled={!isAuthenticated}
          placeholder={
            isAuthenticated
              ? 'What are your thought about this post?'
              : 'Please sign in to share your thoughts'
          }
          value={message}
          onChange={({ target }) => setMessage(target.value)}
          cols={50}
          rows={2}
        />
        <section className='flex gap-2'>
          <button aria-label='submit-comment' className='btn-primary'>
            Submit
          </button>

          {isAuthenticated ? (
            <button onClick={() => signOut()} className='btn-primary'>
              Sign Out
            </button>
          ) : (
            <button onClick={() => signIn('google')} className='btn-primary'>
              Sign In
            </button>
          )}
        </section>
      </form>

      <CommentList onDelete={handleDelete} comments={comments} />
    </>
  );
};

export default CommentsContainer;
