import React from 'react';
import { Sun, Moon } from 'lucide-react';

export function ThemeToggle({ theme, onToggle, className = '' }) {
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={`group inline-flex items-center justify-center w-9 h-9 rounded-full border theme-surface-interactive shadow-sm outline-none transition-[background-color,border-color,transform] duration-300 ease-out active:scale-95 cursor-pointer ${className}`}
    >
      {isDark ? (
        <Sun className="w-4 h-4 text-amber-400 transition-transform duration-300 ease-out group-hover:rotate-45 group-hover:text-amber-300" />
      ) : (
        <Moon className="w-4 h-4 text-zinc-700 transition-transform duration-300 ease-out group-hover:-rotate-12 group-hover:text-zinc-950" />
      )}
    </button>
  );
}
