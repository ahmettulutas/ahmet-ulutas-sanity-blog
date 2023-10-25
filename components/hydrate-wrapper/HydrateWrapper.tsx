'use client';
import React from 'react';

const HydrateWrapper = ({ children }: { children: React.ReactNode }) => {
  const [hydrated, setHydrated] = React.useState(false);

  React.useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) return null; // Returns null on first render, so the client and server match to prevent hydration error caused by ui updates.
  return <>{children}</>;
};

export default HydrateWrapper;
