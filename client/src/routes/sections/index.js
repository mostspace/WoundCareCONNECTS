import { Navigate, useRoutes } from 'react-router-dom'

// Layouts
import MainLayout from 'src/layouts/main';

import { authRoutes } from './auth'
import { mainRoutes, HomePage } from './main';

export default function Router() {
    return useRoutes([
        // Set Index Page With Home Page
        {
            path: '/',
            element: (
                <MainLayout>
                    <HomePage />
                </MainLayout>
            ),
        },

        // Auth routes
        ...authRoutes,

        // Main routes
        ...mainRoutes,
        {
            path: '*',
            element: <Navigate to="/404" />
        }
    ]);
}