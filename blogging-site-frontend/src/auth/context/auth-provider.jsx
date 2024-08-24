import PropTypes from 'prop-types';
import { useEffect, useState, useCallback, useMemo } from 'react';
// utils
import axios, { endpoints } from '../../utils/axios';
//
import { AuthContext } from './auth-context';
import { isValidToken, setSession } from './utils';

// ----------------------------------------------------------------------

const STORAGE_KEY = 'accessToken';

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const initialize = useCallback(async () => {
    try {
      const accessToken = sessionStorage.getItem(STORAGE_KEY);

      if (accessToken && isValidToken(accessToken)) {
        setSession(accessToken);

        const response = await axios.get(endpoints.auth.me);
        const { user } = response.data;

        setUser(user);
      } else {
        setUser(null);
      }
    } catch (error) {
      console.error(error);
      setUser(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    initialize();
  }, [initialize]);

  // LOGIN
  const login = useCallback(async (email, password) => {
    const data = { email, password };
    const response = await axios.post(endpoints.auth.login, data);

    const { data: { accessToken, user } } = response.data;

    setSession(accessToken);
    setUser(user);
    return user;
  }, []);

  // REGISTER
  const register = useCallback(async ({ email, password, lastname, firstname, title }) => {
    const payloadData = {
      email,
      password,
      title,
      fname: firstname,
      lname: lastname,
    };

    const { data: { accessToken, user } } = await axios.post(endpoints.auth.register, payloadData);

    setSession(accessToken);
    setUser(user);
    return user
  }, []);

  // LOGOUT
  const logout = useCallback(() => {
    setSession(null);
    setUser(null);
  }, []);

  // ----------------------------------------------------------------------
  const checkAuthenticated = user ? 'authenticated' : 'unauthenticated';
  const status = loading ? 'loading' : checkAuthenticated;

  const memoizedValue = useMemo(
    () => ({
      user,
      loading: status === 'loading',
      authenticated: status === 'authenticated',
      unauthenticated: status === 'unauthenticated',
      login,
      register,
      logout,
    }),
    [login, logout, register, user, status]
  );

  return <AuthContext.Provider value={memoizedValue}>{children}</AuthContext.Provider>;
}

