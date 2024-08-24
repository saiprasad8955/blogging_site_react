import SplashScreen from '../../pages/Splash-screen';
//
import { AuthContext } from './auth-context';
// ----------------------------------------------------------------------

export function AuthConsumer({ children }) {
    return (
        <AuthContext.Consumer>
            {(auth) => auth.loading ? <SplashScreen /> : children}
        </AuthContext.Consumer>
    );
};
