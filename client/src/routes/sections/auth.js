import { lazy, Suspense } from 'react'
import { Outlet } from 'react-router-dom'
// Layouts
// Components
// import { SplashScreen } from 'src/components/loading-screen'

const Signin = lazy(() => import('src/pages/auth/signin'));
const Signup = lazy(() => import('src/pages/auth/signup'));

export const authRoutes = [
    {
        path: '/signin',
        element: (
            <Signin />
        ),
    },
    {
        path: '/signup',
        element: (
            <Signup />
        ),
    },
];
