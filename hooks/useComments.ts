import React, { useState } from 'react';
import useSWR from 'swr';
import { Comment } from '@/lib/db/models/comments';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function useComments() {
  const [message, setMessage] = useState<string>('');

  const { data: comments, mutate } = useSWR<Comment[]>('/api/comments', fetcher, {
    fallbackData: [],
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({ message }),
      });
      setMessage('');
      await mutate();
    } catch (err: any) {
      throw new Error(JSON.stringify(err)); // todo
    }
  };

  const handleDelete = async (comment: Comment) => {
    try {
      await fetch('/api/comments', {
        method: 'DELETE',
        body: JSON.stringify({ comment }),
      });
      await mutate();
    } catch (err) {
      throw new Error(JSON.stringify(err)); // todo
    }
  };

  return { message, setMessage, comments, handleSubmit, handleDelete };
}
