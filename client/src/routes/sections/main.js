import { lazy, Suspense } from 'react'
import { Outlet } from 'react-router-dom'
// Layouts
import MainLayout from 'src/layouts/main'
// Components
import { SplashScreen } from 'src/components/loading-screen';

export const HomePage = lazy(() => import('src/pages/home'));

const ServicesPage = lazy(() => import('src/pages/services'));
const ProductsPage = lazy(() => import('src/pages/products'));
const AboutPage = lazy(() => import('src/pages/about-us'));
const TestimonialsPage = lazy(() => import('src/pages/testimonials'));
const FaqsPage = lazy(() => import('src/pages/faqs'));
const ContactPage = lazy(() => import('src/pages/contact-us'));

export const mainRoutes = [
    {
        element: (
            <MainLayout>
                <Suspense fallback={<SplashScreen />}>
                    <Outlet />
                </Suspense>
            </MainLayout>
        ),
        children: [
            { path: 'services', element: <ServicesPage /> },
            { path: 'products', element: <ProductsPage /> },
            { path: 'about-us', element: <AboutPage /> },
            { path: 'testimonials', element: <TestimonialsPage /> },
            { path: 'faqs', element: <FaqsPage /> },
            { path: 'contact-us', element: <ContactPage /> },
        ]
    },
];
