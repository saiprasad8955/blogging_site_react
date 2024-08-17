import { Link, useNavigate } from "react-router-dom";
import LOGO from '/logo.png';
import useAuthContext from "../../auth/hook/use-context-hook";

const Header = () => {
    const navigate = useNavigate();
    const { authenticated, logout, user } = useAuthContext();

    const logOut = () => {
        logout();
        navigate('/auth/login');
    }
    return (
        <div className='flex justify-between bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 shadow-lg w-full'>
            <div className='p-5 flex items-center gap-x-6'>
                <img className="w-10" src={LOGO} alt="Logo" />
                {
                    user && <div>
                        <h3 className="text-lg font-semibold text-gray-800">{`${user?.fname} ${user?.lname}`}</h3>
                        <p className="text-sm text-gray-800">Welcome back!</p>
                    </div>
                }

            </div>
            <div className='flex items-center'>
                <ul className="flex p-2 m-4 items-center">
                    <li className="px-2 relative group">
                        <Link
                            to="/home"
                            className="inline-block text-lg transition-transform duration-300 ease-out group-hover:scale-110"
                        >
                            HOME
                        </Link>
                        <span
                            className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-blue-300 transition-all duration-300 ease-out group-hover:w-full group-hover:left-0"
                        />
                    </li>
                    <li className="px-2 relative group">
                        {authenticated ? (
                            <button
                                className="inline-block text-lg transition-transform duration-300 ease-out group-hover:scale-110"
                                onClick={logOut}
                            >
                                LOGOUT
                            </button>
                        ) : (
                            <Link
                                to="/auth/login"
                                className="inline-block text-lg transition-transform duration-300 ease-out group-hover:scale-110"
                                style={{ textDecoration: 'none', color: 'inherit' }}
                            >
                                LOGIN
                            </Link>
                        )}
                        <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-blue-300 transition-all duration-300 ease-out group-hover:w-full group-hover:left-0" />
                    </li>
                </ul>
            </div>
        </div>
    )
};

export default Header;
