import { lazyImport } from '../lib/utils/importUtils';

// MAIN
const { TripsPage } = lazyImport(() => import('src/pages/trips/TripsPage'), 'TripsPage');

export const publicRoutes = [
  // Root Path
  { path: '/', element: <TripsPage /> },
];
