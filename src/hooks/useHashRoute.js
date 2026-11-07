import { useSyncExternalStore } from 'react';

/** Ids of projects that have an article page. Unknown ids fall back to the projects list. */
export const PROJECT_IDS = ['student-voice'];

const subscribe = callback => {
  window.addEventListener('hashchange', callback);
  return () => window.removeEventListener('hashchange', callback);
};

const getSnapshot = () => window.location.hash;
const getServerSnapshot = () => '';

/** Pure parser: '#/projects/student-voice' -> { name: 'project', id: 'student-voice', key: ... } */
export const parseRoute = hash => {
  const path = String(hash || '').replace(/^#\/?/, '').replace(/\/+$/, '');
  const [root, id] = path.split('/');

  if (root !== 'projects') return { name: 'home', key: 'home' };
  if (id && PROJECT_IDS.includes(id)) return { name: 'project', id, key: `project:${id}` };
  return { name: 'projects', key: 'projects' };
};

/**
 * Single source of truth for navigation. Backed by the URL hash through useSyncExternalStore,
 * so it can never drift out of sync with the address bar or the browser Back button.
 */
export const useHashRoute = () => parseRoute(useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot));
