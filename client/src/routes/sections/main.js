import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

// Layouts
import MainLayout from 'src/layouts/main';

// Components
import { SplashScreen } from 'src/components/loading-screen';

export const HomePage = lazy(() => import('src/pages/user/home'));

export const mainRoutes = [
    {
        element: (
            <Suspense fallback={<SplashScreen />}>
                <MainLayout>
                    <Outlet />
                </MainLayout>
            </Suspense>
        ),
    },
];
