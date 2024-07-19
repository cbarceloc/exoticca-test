import buildPath from '../lib/utils/routerUtils';

// AUTH
const PATH_ROOT_AUTH = '/auth';
const PATH_AUTH = {
  root: PATH_ROOT_AUTH,
  login: buildPath(PATH_ROOT_AUTH, '/login'),
};
// DASHBOARD
const PATH_ROOT_DASHBOARD = '/dashboard';
const PATH_KNOWLDEDGE = buildPath(PATH_ROOT_DASHBOARD, `/knowledge`);

const PATH_DASHBOARD = {
  root: PATH_ROOT_DASHBOARD,
  knowledge: {
    root: PATH_KNOWLDEDGE,
    search: buildPath(PATH_KNOWLDEDGE, '/search'),
    sources: buildPath(PATH_KNOWLDEDGE, '/sources'),
  },
};

export const paths = {
  root: '/',
  auth: PATH_AUTH,
  dashboard: PATH_DASHBOARD,
};
