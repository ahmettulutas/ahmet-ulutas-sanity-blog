'use client';
import { Container } from '@/components/containers/Container';
import Link from 'next/link';

// eslint-disable-next-line no-unused-vars
const Error = ({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) => {
  return (
    <Container>
      <div className='h-screen w-full grid place-items-center'>
        <div className='flex flex-col gap-4 max-w-40'>
          <h1 className='text-2xl md:text-4xl text-center'>
            Looks like some things are not correct.
          </h1>
          {error?.message && <p>{error?.message}</p>}
          <h2 className='text-xl md:text-2xl text-center'>Apologies :/</h2>
          <Link href='/' className='btn-primary m-auto'>
            Go Back
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Error;
