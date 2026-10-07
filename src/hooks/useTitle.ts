import { useEffect } from 'react';

export function useTitle(title?: string) {
  useEffect(() => {
    document.title = title ? `${title} — SICIM` : 'SICIM — Singapore Consortium Investment Management';
  }, [title]);
}
