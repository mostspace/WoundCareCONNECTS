import { lazy, Suspense } from 'react';

// Layouts
import AuthLayout from 'src/layouts/auth';

// Components
import { SplashScreen } from 'src/components/loading-screen';
import PublicRoute from 'src/components/public-route';

// Pages
const Login = lazy(() => import('src/pages/auth/login'));
const Register = lazy(() => import('src/pages/auth/register'));
const ForgotPassword = lazy(() => import('src/pages/auth/forgot-password'));
const ResetPassword = lazy(() => import('src/pages/auth/reset-password'));

const LazyComponent = (Component) => (
  <Suspense fallback={<SplashScreen />}>
    <AuthLayout>
      <Component />
    </AuthLayout>
  </Suspense>
);

export const authRoutes = [
  {
    path: '/login',
    element: (
      <PublicRoute>
        {LazyComponent(Login)}
      </PublicRoute>
    ),
  },
  {
    path: '/register',
    element: (
      <PublicRoute>
        {LazyComponent(Register)}
      </PublicRoute>
    ),
  },
  {
    path: '/forgot-password',
    element: (
      <PublicRoute>
        {LazyComponent(ForgotPassword)}
      </PublicRoute>
    ),
  },
  {
    path: '/reset-password',
    element: (
      <PublicRoute>
        {LazyComponent(ResetPassword)}
      </PublicRoute>
    ),
  },
];
