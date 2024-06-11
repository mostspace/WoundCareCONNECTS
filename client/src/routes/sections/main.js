import { lazy, Suspense } from 'react'
import { Outlet } from 'react-router-dom'
// Layouts
import MainLayout from 'src/layouts/main'
// Components
// import { SplashScreen } from 'src/components/loading-screen'

export const HomePage = lazy(() => import('src/pages/Home'));

const ContactPage = lazy(() => import('src/pages/ContactUs'));
const Signin = lazy(() => import('src/pages/auth/login'));

export const mainRoutes = [
    {
        element: (
            <MainLayout>
                <Suspense fallback={<div>loading...</div>}>
                    <Outlet />
                </Suspense>
            </MainLayout>
        ),
        children: [
            {
                path: 'contact-us', element: <ContactPage /> 
            },
        ]
    },
];
