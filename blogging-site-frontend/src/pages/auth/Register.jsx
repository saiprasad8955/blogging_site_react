import React from 'react';
import {
  IconButton,
  InputAdornment,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  FormControl,
  FormHelperText,
} from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { LoadingButton } from '@mui/lab';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link, useNavigate } from 'react-router-dom';
import Iconify from '../../components/Iconify';
import useAuthContext from '../../auth/hook/use-context-hook';
import { useSnackbar } from '../../components/snackbar';
import RegisterImage from '../../assets/register.jpg';

// Define the validation schema with Yup
const validationSchema = yup.object().shape({
  title: yup.string().required('Title is required!'),
  firstname: yup.string().required('First name is required!'),
  lastname: yup.string().required('Last name is required!'),
  email: yup.string().email('Email is not valid!').required('Email is required!'),
  password: yup.string()
    .matches(/^(?=.*[A-Z])/, 'Password must include at least one uppercase letter.')
    .matches(/^(?=.*[a-z])/, 'Password must include at least one lowercase letter.')
    .matches(/^(?=.*\d)/, 'Password must include at least one number.')
    .matches(/^(?=.*[@$!%*?&])/, 'Password must include at least one special character.')
    .min(8, 'Password must be at least 8 characters long.')
    .required('Password is required!')
})

const RegisterPage = () => {
  const { register } = useAuthContext();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [passwordView, setPasswordView] = React.useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      title: '',
      firstname: '',
      lastname: '',
      email: '',
      password: '',
    },
  });

  const onPasswordViewClick = () => {
    setPasswordView(!passwordView);
  };

  const onSubmit = async (data) => {
    try {
      await register(data);
      enqueueSnackbar('Registration successful!');
      navigate('/blog');
    } catch (err) {
      console.log("🚀 ~ onSubmit ~ err:", err);
      enqueueSnackbar(err.error || 'Something went wrong!', { variant: 'error' });
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-6"
      style={{ backgroundImage: `url(${RegisterImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">REGISTER</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <FormControl component="fieldset" error={!!errors.title} fullWidth required>
            <FormLabel component="legend">Title</FormLabel>
            <Controller
              name="title"
              control={control}
              render={({ field }) => (
                <RadioGroup
                  row
                  aria-label="title"
                  {...field}
                >
                  <FormControlLabel value="Mr" control={<Radio />} label="Mr." />
                  <FormControlLabel value="Mrs" control={<Radio />} label="Mrs." />
                  <FormControlLabel value="Miss" control={<Radio />} label="Miss" />
                </RadioGroup>
              )}
            />
            {errors.title && <FormHelperText>{errors.title.message}</FormHelperText>}
          </FormControl>

          <Controller
            name="firstname"
            control={control}
            render={({ field }) => (
              <TextField
                required
                label="First Name"
                sx={{ '& .MuiOutlinedInput-root': { borderRadius: '12px' } }}
                fullWidth
                variant="outlined"
                {...field}
                error={!!errors.firstname}
                helperText={errors.firstname ? errors.firstname.message : null}
              />
            )}
          />

          <Controller
            name="lastname"
            control={control}
            render={({ field }) => (
              <TextField
                required
                label="Last Name"
                sx={{ '& .MuiOutlinedInput-root': { borderRadius: '12px' } }}
                fullWidth
                variant="outlined"
                {...field}
                error={!!errors.lastname}
                helperText={errors.lastname ? errors.lastname.message : null}
              />
            )}
          />

          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <TextField
                required
                label="Email"
                sx={{ '& .MuiOutlinedInput-root': { borderRadius: '12px' } }}
                fullWidth
                variant="outlined"
                {...field}
                error={!!errors.email}
                helperText={errors.email ? errors.email.message : null}
              />
            )}
          />

          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <TextField
                required
                label="Password"
                sx={{ '& .MuiOutlinedInput-root': { borderRadius: '12px' } }}
                fullWidth
                type={passwordView ? 'text' : 'password'}
                variant="outlined"
                {...field}
                error={!!errors.password}
                helperText={errors.password ? errors.password.message : null}
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
            )}
          />

          <LoadingButton
            type="submit"
            variant="outlined"
            loading={isSubmitting}
            className="w-full"
          >
            Register
          </LoadingButton>
        </form>

        <p className="text-center text-gray-600 mt-6">
          Already have an account?{' '}
          <Link to="/auth/login" className="text-blue-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
