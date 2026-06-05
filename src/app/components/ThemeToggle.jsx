'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import ThemeToggleContent from './ThemeToggleContent';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return <ThemeToggleContent />;
}
