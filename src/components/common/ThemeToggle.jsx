import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export function ThemeToggle({ className }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`p-2.5 rounded-xl border border-zinc-800 bg-zinc-900/80 text-zinc-400 hover:text-zinc-100 hover:border-zinc-700 transition-all dark:bg-zinc-900/80 dark:border-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-100 light:bg-white light:border-zinc-200 light:text-zinc-600 light:hover:text-zinc-900 ${className || ''}`}
      title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} mode`}
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun className="w-4 h-4 text-amber-400" />
      ) : (
        <Moon className="w-4 h-4 text-violet-600" />
      )}
    </button>
  );
}
