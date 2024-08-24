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

// ADMIN PAGES 
const UserManagement = lazy(() => import("../pages/user-managment/user-management"));
const UserDetailsPage = lazy(() => import("../pages/user-managment/user-details"));
const RoleManagement = lazy(() => import("../pages/role-management/role-management"));
const RoleDetailsPage = lazy(() => import("../pages/role-management/role-details"));


const router = createBrowserRouter([
    {
        path: '/',
        element: <Navigate to='/auth/login' />,
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
            <AuthGuard requiredRoles={['USER']}>
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
            <AuthGuard requiredRoles={['USER']}>
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

    // ADMIN ROUTES WITH ROLE PROTECTION
    {
        path: '/user-management',
        element: (
            <AuthGuard requiredRoles={['ADMIN']}>
                <MainLayout>
                    <Suspense fallback={<LoadingScreen />}>
                        <Outlet />
                    </Suspense>
                </MainLayout>
            </AuthGuard>
        ),
        children: [
            {
                index: true,
                element: <UserManagement />
            },
            {
                path: ':id',
                element: <UserDetailsPage />
            }
        ],
        errorElement: <PageNotFound />
    },
    {
        path: '/role-management',
        element: (
            <AuthGuard requiredRoles={['ADMIN']}>
                <MainLayout>
                    <Suspense fallback={<LoadingScreen />}>
                        <Outlet />
                    </Suspense>
                </MainLayout>
            </AuthGuard>
        ),
        children: [
            {
                index: true,
                element: <RoleManagement />
            },
            {
                path: ':id',
                element: <RoleDetailsPage />
            }
        ],
        errorElement: <PageNotFound />
    },

    // 404 ROUTE
    {
        path: '/*',
        element: <PageNotFound />
    }
]);

export default router;
