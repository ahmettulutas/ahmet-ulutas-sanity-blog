'use client';
import { useState } from 'react';

type CopiedValue = string | null;
// eslint-disable-next-line no-unused-vars
type CopyFn = (text: string) => Promise<boolean>; // Return success

export function useCopyToClipboard(): { isCopied: boolean; copiedText: CopiedValue; copy: CopyFn } {
  const [copiedText, setCopiedText] = useState<CopiedValue>(null);
  const [isCopied, setIsCopied] = useState(false);

  const copy: CopyFn = async (text) => {
    if (!navigator?.clipboard) return false;
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      setCopiedText(text);
      setTimeout(() => setIsCopied(false), 2000);
      return true;
    } catch (error) {
      setCopiedText(null);
      return false;
    }
  };

  return { isCopied, copiedText, copy };
}
