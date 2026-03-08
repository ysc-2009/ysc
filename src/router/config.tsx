import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const HomePage = lazy(() => import('../pages/home/page'));
const AboutPage = lazy(() => import('../pages/about/page'));
const InfoPage = lazy(() => import('../pages/info/page'));
const ReportPage = lazy(() => import('../pages/report/page'));
const TrialPage = lazy(() => import('../pages/trial/page'));
const MembersPage = lazy(() => import('../pages/members/page'));
const ContactPage = lazy(() => import('../pages/contact/page'));
const RulesPage = lazy(() => import('../pages/rules/page'));
const NotFoundPage = lazy(() => import('../pages/NotFound'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '/info',
    element: <InfoPage />,
  },
  {
    path: '/report',
    element: <ReportPage />,
  },
  {
    path: '/trial',
    element: <TrialPage />,
  },
  {
    path: '/members',
    element: <MembersPage />,
  },
  {
    path: '/contact',
    element: <ContactPage />,
  },
  {
    path: '/rules',
    element: <RulesPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];

export default routes;