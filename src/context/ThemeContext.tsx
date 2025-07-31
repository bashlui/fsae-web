'use client';

import React, { useEffect } from 'react';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Always apply dark theme to document
    const root = document.documentElement;
    root.classList.add('dark');
  }, []);

  return <>{children}</>;
}
