'use client';

import { useTheme } from '../providers/ThemeProvider';
import { Moon, Sun } from 'lucide-react';

export default function ThemeToggleContent() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-6 right-6 z-50 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
      style={{
        backgroundColor: theme === 'dark' ? '#1a1a1a' : '#f0f0f0',
        color: theme === 'dark' ? '#fbbf24' : '#f59e0b',
        border: theme === 'dark' ? '2px solid #2a2a2a' : '2px solid #e5e5e5',
      }}
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      aria-label={`Toggle ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <Moon size={24} strokeWidth={2} />
      ) : (
        <Sun size={24} strokeWidth={2} />
      )}
    </button>
  );
}
