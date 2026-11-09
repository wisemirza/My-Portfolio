import { useSyncExternalStore } from 'react';

/** Ids of projects that have an article page. Unknown ids fall back to the projects list. */
export const PROJECT_IDS = ['student-voice', 'studentrep'];

const HOME_ROUTE = Object.freeze({ name: 'home', key: 'home' });
const PROJECTS_ROUTE = Object.freeze({ name: 'projects', key: 'projects' });
const PROJECT_ARTICLE_ROUTE = Object.freeze({
  name: 'project',
  id: 'student-voice',
  key: 'project:student-voice'
});

const subscribe = callback => {
  window.addEventListener('hashchange', callback);
  window.addEventListener('popstate', callback);
  return () => {
    window.removeEventListener('hashchange', callback);
    window.removeEventListener('popstate', callback);
  };
};

const getSnapshot = () => window.location.hash;
const getServerSnapshot = () => '';

/** Pure parser: '#/projects/student-voice' -> canonical frozen route object */
export const parseRoute = hash => {
  const path = String(hash || '').replace(/^#\/?/, '').replace(/\/+$/, '');
  const [root, id] = path.split('/');

  if (root !== 'projects') return HOME_ROUTE;
  if (id && PROJECT_IDS.includes(id)) return PROJECT_ARTICLE_ROUTE;
  return PROJECTS_ROUTE;
};

/**
 * Single source of truth for navigation. Backed by the URL hash through useSyncExternalStore,
 * so it can never drift out of sync with the address bar or the browser Back button.
 */
export const useHashRoute = () => parseRoute(useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot));
