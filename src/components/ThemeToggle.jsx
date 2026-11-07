import React from 'react';
import { Sun, Moon } from 'lucide-react';

export function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="group relative inline-flex items-center justify-center w-8 h-8 rounded-full border border-zinc-200/90 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:border-zinc-300 dark:hover:border-zinc-700 shadow-sm outline-none focus-visible:ring-1 focus-visible:ring-zinc-400 dark:focus-visible:ring-zinc-600 transition-[background-color,border-color,color,transform] duration-300 ease-out active:scale-95 cursor-pointer"
    >
      {isDark ? (
        <Sun className="w-3.5 h-3.5 text-amber-200/80 transition-transform duration-300 ease-out group-hover:rotate-45 group-hover:text-amber-200" />
      ) : (
        <Moon className="w-3.5 h-3.5 text-zinc-600 transition-transform duration-300 ease-out group-hover:-rotate-12 group-hover:text-zinc-900" />
      )}
    </button>
  );
}
