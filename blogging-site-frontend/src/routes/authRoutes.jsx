
import { lazy, Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import PageNotFound from '../pages/PageNotFound'

const LoginPage = lazy(() => import('../pages/auth/LoginPage'));
const RegisterPage = lazy(() => import('../pages/auth/Register'));
const Header = lazy(() => import('../pages/Header/Header'));
const SplashScreen = lazy(() => import('../pages/Splash-screen'));


export const authRoutes = [
    {
        path: 'auth',
        element: (
            <Suspense fallback={<SplashScreen />}>
                <Header />
                <Outlet />
            </Suspense>
        ),
        errorElement: <PageNotFound />,
        children: [
            {
                path: 'login',
                element: <LoginPage />
            },
            {
                path: 'register',
                element: <RegisterPage />
            }
        ]

    }
]