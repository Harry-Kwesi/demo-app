import { createContext, useContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { audiences } from '../data/site';
import type { AudienceKey } from '../data/site';

const STORAGE_KEY = 'sicim-audience';

const AudienceContext = createContext<{ audience: AudienceKey; setAudience: (a: AudienceKey) => void }>({
  audience: 'individual',
  setAudience: () => {},
});

function readStored(): AudienceKey {
  try {
    const v = window.localStorage.getItem(STORAGE_KEY);
    if (audiences.some((a) => a.key === v)) return v as AudienceKey;
  } catch {
    /* storage unavailable */
  }
  return 'individual';
}

/** Remembers which audience the visitor picked in the utility bar. */
export function AudienceProvider({ children }: { children: ReactNode }) {
  const [audience, setAudience] = useState<AudienceKey>(readStored);
  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, audience);
    } catch {
      /* storage unavailable */
    }
  }, [audience]);
  return <AudienceContext.Provider value={{ audience, setAudience }}>{children}</AudienceContext.Provider>;
}

export function useAudience() {
  return useContext(AudienceContext);
}
