import { lazy } from 'react';
const HomePage = lazy(() => import('./Home'));

const routers = [
  {
    path: '/',
    exact: true,
    public: true,
    component: HomePage,
  },
];

export default routers;
