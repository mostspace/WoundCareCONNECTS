import { lazy, Suspense } from 'react';
import { Navigate } from 'react-router-dom'

// Components
import { SplashScreen } from 'src/components/loading-screen';

// Layouts
import MainLayout from 'src/layouts/main';

// Pages
const ServicesPage = lazy(() => import('src/pages/user/services'));
const ProductsPage = lazy(() => import('src/pages/user/products'));
const AboutPage = lazy(() => import('src/pages/user/about-us'));
const FaqsPage = lazy(() => import('src/pages/user/faqs'));
const ContactPage = lazy(() => import('src/pages/user/contact-us'));
const PatientSubmission = lazy(() => import('src/pages/user/patient-submission'));

const LazyComponent = (Component) => (
    <Suspense fallback={<SplashScreen />}>
        <MainLayout>
            <Component />
        </MainLayout>
    </Suspense>
);

export const userRoutes = [
    {
        path: '/',
        children: [
            { element: <Navigate to="/home" />, index: true },
            { path: 'services', element: LazyComponent(ServicesPage) },
            { path: 'products', element: LazyComponent(ProductsPage) },
            { path: 'about', element: LazyComponent(AboutPage) },
            { path: 'faqs', element: LazyComponent(FaqsPage) },
            { path: 'contact', element: LazyComponent(ContactPage) },
            { path: 'patient-submission', element: LazyComponent(PatientSubmission) },
        ]
    },
];
