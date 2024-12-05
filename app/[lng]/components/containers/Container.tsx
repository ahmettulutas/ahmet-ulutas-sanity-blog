import { HTMLProps } from 'react';
import { cn } from '@/lib/helpers';

export const Container = ({ className, ...props }: HTMLProps<HTMLDivElement>) => {
  return <div className={cn('mx-auto max-w-[1400px] px-4', className)} {...props} />;
};
