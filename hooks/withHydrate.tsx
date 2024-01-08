import React, { useEffect, useState } from 'react';

type WithHydrateProps = {
  loader: React.JSX.Element;
};

export const withHydrateWrapper =
  <P extends object>(WrappedComponent: React.ComponentType<P>): React.FC<P & WithHydrateProps> =>
  ({ loader, ...props }) => {
    const [hydrated, setHydrated] = useState<boolean>(false);

    useEffect(() => {
      setHydrated(true);
    }, []);
    if (!hydrated) return <>{loader}</>;
    return <WrappedComponent {...(props as P)} />;
  };
