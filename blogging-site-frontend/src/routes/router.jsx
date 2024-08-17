import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";
import { lazy, Suspense } from 'react';

import PageNotFound from "../pages/PageNotFound";
import AuthGuard from "../auth/guard/auth-guard";

const SplashScreen = lazy(() => import('../pages/Splash-screen'));
const HomePage = lazy(() => import("../pages/Home/HomePage"));
const LoginPage = lazy(() => import('../pages/auth/LoginPage'));
const RegisterPage = lazy(() => import('../pages/auth/Register'));
const Header = lazy(() => import("../pages/Header/Header"));
const BlogPage = lazy(() => import("../pages/blogs/Blog"));
const BlogForm = lazy(() => import("../pages/blogs/BlogForm"));
const BlogView = lazy(() => import("../pages/blogs/BlogView"));

const router = createBrowserRouter([
    {
        path: '/',
        element: <Navigate to='/home' />,
    },

    // AUTH ROUTES
    {
        path: '/auth',
        element: (
            <>
                <Header />
                <Suspense fallback={<SplashScreen />}>
                    <Outlet />
                </Suspense>
            </>
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
            <>
                <Header />
                <Suspense fallback={<SplashScreen />}>
                    <Outlet />
                </Suspense>
            </>
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
                <Header />
                <Suspense fallback={<SplashScreen />}>
                    <Outlet />
                </Suspense>
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
