'use client';
import React from 'react';

const HydrateWrapper = ({
  children,
  loader,
}: {
  children: React.ReactNode;
  loader: React.ReactNode;
}) => {
  const [hydrated, setHydrated] = React.useState(false);

  React.useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) return <>{loader}</>; // Returns loader on first render, so the client and server match to prevent hydration error caused by ui updates.
  return <div>{children}</div>;
};

export default HydrateWrapper;
