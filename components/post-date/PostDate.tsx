import { format, parseISO } from 'date-fns';

export default function PostDate({ dateString }: { dateString?: string }) {
  if (!dateString) return null;

  const date = parseISO(dateString);
  return (
    <time
      className='capitalize text-gray dark:text-light/50 font-semibold text-sm sm:text-base'
      dateTime={dateString}
    >
      {format(date, 'LLLL	d, yyyy')}
    </time>
  );
}
