import { IconButton, InputAdornment, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LoadingButton } from '@mui/lab';
import Iconify from '../../components/Iconify';
import useAuthContext from '../../auth/hook/use-context-hook';
import { useSnackbar } from '../../components/Snackbar';
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const LoginPage = () => {

  const { login } = useAuthContext();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [user, setUser] = useState({ email: 'rsaiprasad4@gmail.com', password: 'Sai@12345' });
  const [userErr, setUserErr] = useState({ email: false, password: false });
  const [loading, setLoading] = useState(false);
  const [passwordView, setPasswordView] = useState(false);

  const { authenticated } = useAuthContext();

  useEffect(() => {
    if (authenticated) {
      navigate('/home', { replace: true });
    };
  }, []);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
    setUserErr((prev) => ({ ...prev, [name]: false }));
  };

  const handleLogin = async () => {
    setLoading(true);
    if (!emailRegex.test(user.email)) {
      setUserErr((prev) => ({ ...prev, email: true }));
      setLoading(false);
      return;
    }

    setUserErr((prev) => ({ ...prev, email: false }));

    if (!passwordRegex.test(user.password)) {
      setUserErr((prev) => ({ ...prev, password: true }));
      setLoading(false);
      return;
    };

    setUserErr((prev) => ({ ...prev, password: false }));

    try {
      const loggedInUser = await login?.(user.email, user.password);
      if (loggedInUser && loggedInUser.userType === 'ADMIN') {
        navigate('/user-management')
      } else {
        navigate('/home')
      }
      enqueueSnackbar('Login success!')
    } catch (err) {
      setLoading(false);
      enqueueSnackbar(err.error || 'Something went wrong!', { variant: 'error' });
    }
  }

  const onPasswordViewClick = () => {
    setPasswordView(!passwordView);
  }

  const textFieldStyle = {
    '& .MuiOutlinedInput-root': {
      borderRadius: '12px',
    },
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-6">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">LOGIN</h2>
        <div className='space-y-4'>
          <TextField
            label='Email'
            sx={textFieldStyle}
            fullWidth
            variant='outlined'
            value={user.email}
            name='email'
            onChange={handleChange}
            error={userErr.email}
            helperText={userErr.email ? 'Email is not valid!' : null}
          />
          <TextField
            label='Password'
            sx={textFieldStyle}
            fullWidth
            type={passwordView ? 'text' : 'password'}
            variant='outlined'
            name='password'
            value={user.password}
            onChange={handleChange}
            error={userErr.password}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={onPasswordViewClick} edge="end">
                    <Iconify icon={passwordView ? 'solar:eye-bold' : 'solar:eye-closed-bold'} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <LoadingButton disabled={!user.email || !user.password} variant='outlined' loading={loading} onClick={handleLogin} className='w-full' > Login</LoadingButton>
        </div>
        <p className="text-center text-gray-600 mt-6">
          Don't have an account?{' '}
          <Link to="/auth/register" className="text-purple-600 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  )
}

export default LoginPage