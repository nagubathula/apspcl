"use client"
import { useEffect, useState } from 'react';
import { AuthProvider } from '../context/AuthContext';

const MyApp = ({ Component, pageProps }) => {
  const [authToken, setAuthToken] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setAuthToken(token);
    }
  }, []);

  return (
    <AuthProvider>
      <Component {...pageProps} authToken={authToken} />
    </AuthProvider>
  );
};

export default MyApp;
