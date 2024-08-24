import { Navigate, useNavigate } from "react-router-dom";
import useAuthContext from "../hook/use-context-hook";
import { useEffect } from "react";

export default function AuthGuard({ children, requiredRoles = [] }) {


    const navigate = useNavigate();
    const { user } = useAuthContext();
    const permissions = user?.role?.permissions;


    useEffect(() => {
        if (user === null) {
            navigate('/auth/login', { replace: true });
        };

        // Check if the user has the required role
        if (user && requiredRoles.length > 0 && !requiredRoles.includes(user?.userType)) {
            return navigate(user?.userType === 'ADMIN' ? '/user-management' : '/home', { replace: true });
        };

        // If the user is an admin, bypass below checks
        if (user?.userType === 'ADMIN') {
            return;
        }


        // Extract the first part of the current path (e.g., "/blog" from "/blog/123")
        const currentPath = location.pathname.split('/')[1];

        // Check if the user has read permission for the current path
        if (permissions && currentPath && !permissions[currentPath]?.r) {
            navigate('/home', { replace: true });
            return;
        };

    }, [navigate, user, permissions, location])


    return <>{children}</>;
}
