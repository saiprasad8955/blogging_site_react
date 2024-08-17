import { useNavigate } from "react-router-dom";
import useAuthContext from "../hook/use-context-hook";
import { useEffect } from "react";

export default function AuthGuard({ children }) {
    const navigate = useNavigate();
    const { user } = useAuthContext();

    useEffect(() => {
        if (user === null) {
            navigate('/auth/login', { replace: true });
        };

    }, [navigate, user])


    return <>{children}</>;
}
