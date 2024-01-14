import { format, parseISO } from 'date-fns';

export default function PostDate({ dateString }: { dateString?: string }) {
  if (!dateString) return null;

  const date = parseISO(dateString);
  return (
    <time
      className='capitalize text-gray-600 dark:text-dark-text/50 text-sm font-semibold'
      dateTime={dateString}
    >
      {format(date, 'LLLL	d, yyyy')}
    </time>
  );
}
