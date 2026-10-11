import { useEffect, useState } from 'react';
import { sifNavFallback } from '../data/site';

type Nav = typeof sifNavFallback;

/**
 * Reads the latest SIF bid/offer prices from /data/sif-nav.json (edit that
 * file to publish a new dealing date). Falls back to the bundled values.
 */
export function useSifNav(): Nav {
  const [nav, setNav] = useState<Nav>(sifNavFallback);
  useEffect(() => {
    let cancelled = false;
    fetch('/data/sif-nav.json', { cache: 'no-cache' })
      .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
      .then((data: Partial<Nav>) => {
        if (!cancelled && data.dealingDate && data.bid && data.offer) {
          setNav({ dealingDate: data.dealingDate, bid: data.bid, offer: data.offer });
        }
      })
      .catch(() => {
        /* keep fallback */
      });
    return () => {
      cancelled = true;
    };
  }, []);
  return nav;
}
