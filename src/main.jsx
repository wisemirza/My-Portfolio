import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Routes remount their pages, so let us decide scroll position (App scrolls to top on navigation).
if ('scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual';
}

const FONT_TIMEOUT_MS = 1200;

/**
 * Wait for the fonts used above the fold before the first render. Otherwise Inter swaps in
 * half way through the entrance animation, text reflows, and the motion visibly jumps.
 * The timeout guarantees a slow or blocked font request can never hold the page hostage.
 */
const fontsReady = () => {
  if (!document.fonts || !document.fonts.load) return Promise.resolve();
  const loads = Promise.all([
    document.fonts.load('400 1em Inter'),
    document.fonts.load('500 1em Inter'),
    document.fonts.load('700 1em Inter'),
    document.fonts.load('400 1em "JetBrains Mono"')
  ]).catch(() => undefined);
  const timeout = new Promise(resolve => setTimeout(resolve, FONT_TIMEOUT_MS));
  return Promise.race([loads, timeout]);
};

fontsReady().then(() => {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
});
