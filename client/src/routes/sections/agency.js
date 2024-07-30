import { lazy, Suspense } from 'react';
import { Navigate } from 'react-router-dom';

// Components
import { SplashScreen } from 'src/components/loading-screen';
import ProtectedRoute from 'src/components/protected-route';

// Layouts
import AgencyLayout from 'src/layouts/agency';

// Pages
const Dashboard = lazy(() => import('src/pages/agency'));
const PatientDetails = lazy(() => import('src/pages/agency/patient-details'));

const LazyComponent = (Component, requiredRole) => (
  <ProtectedRoute requiredRole={requiredRole}>
    <Suspense fallback={<SplashScreen />}>
      <AgencyLayout>
        <Component />
      </AgencyLayout>
    </Suspense>
  </ProtectedRoute>
);

export const agencyRoutes = [
  {
    path: '/agency',
    children: [
      { element: <Navigate to="/agency/dashboard" />, index: true },
      {
        path: 'dashboard',
        element: LazyComponent(Dashboard, 'agency'),
      },
      {
        path: 'patient-details/:id',
        element: LazyComponent(PatientDetails, 'agency'),
      },
    ],
  },
];
