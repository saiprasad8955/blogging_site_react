import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";
import { lazy, Suspense } from 'react';

import PageNotFound from "../pages/PageNotFound";
import AuthGuard from "../auth/guard/auth-guard";

const SplashScreen = lazy(() => import('../pages/Splash-screen'));
const HomePage = lazy(() => import("../pages/Home/HomePage"));
const LoginPage = lazy(() => import('../pages/auth/LoginPage'));
const RegisterPage = lazy(() => import('../pages/auth/Register'));
const BlogPage = lazy(() => import("../pages/blogs/Blog"));
const BlogForm = lazy(() => import("../pages/blogs/BlogForm"));
const BlogView = lazy(() => import("../pages/blogs/BlogView"));
const MainLayout = lazy(() => import("../layout/MainLayout"));
const LoadingScreen = lazy(() => import("../pages/Loading-Screen"));

const router = createBrowserRouter([
    {
        path: '/',
        element: <Navigate to='/home' />,
    },

    // AUTH ROUTES
    {
        path: '/auth',
        element: (
            <Suspense fallback={<SplashScreen />}>
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
    },

    // HOME ROUTE
    {
        path: '/home',
        element: (
            <AuthGuard>
                <MainLayout>
                    <Suspense fallback={<LoadingScreen />}>
                        <Outlet />
                    </Suspense>
                </MainLayout>
            </AuthGuard>
        ),
        errorElement: <PageNotFound />,
        children: [
            {
                index: true,
                element: <HomePage />
            }
        ]
    },

    // BLOG ROUTE WITH AUTH GUARD
    {
        path: '/blog',
        element: (
            <AuthGuard>
                <MainLayout>
                    <Suspense fallback={<LoadingScreen />}>
                        <Outlet />
                    </Suspense>
                </MainLayout>
            </AuthGuard>
        ),
        errorElement: <PageNotFound />,
        children: [
            {
                index: true,
                element: <BlogPage />
            },
            {
                path: 'add',
                element: <BlogForm />
            },
            {
                path: 'update',
                element: <BlogForm />
            },
            {
                path: ':id',
                element: <BlogView />
            }
        ]
    },

    // 404 ROUTE
    {
        path: '/*',
        element: <PageNotFound />
    }
]);

export default router;
