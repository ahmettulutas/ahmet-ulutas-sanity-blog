'use client';
import { isAuthenticated } from '@/lib/constants';
import { signIn, signOut, useSession } from 'next-auth/react';
import React from 'react';

const SignInButton = () => {
  const { status } = useSession();
  return (
    <>
      <button
        onClick={() => signIn('google')}
        className='border-2 p-2 border-black rounded-md m-2 bg-black text-white'
      >
        SIGNIN
      </button>
      {status === isAuthenticated ? (
        <button
          onClick={() => signOut()}
          className='border-2 p-2 border-black rounded-md m-2 bg-black text-white'
        >
          SIGNOUT
        </button>
      ) : null}
    </>
  );
};

export default SignInButton;
