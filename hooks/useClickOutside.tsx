import React, { MutableRefObject } from 'react';

// eslint-disable-next-line no-unused-vars
type ClickOutsideHandler = (event: MouseEvent) => void;

export const useClickOutside = (
  ref: MutableRefObject<HTMLElement | null>,
  // eslint-disable-next-line no-unused-vars
  setIsOpen: (isOpen: boolean) => void
) => {
  React.useEffect(() => {
    const handleClickOutside: ClickOutsideHandler = (event) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, setIsOpen]);
};
