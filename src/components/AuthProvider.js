// src/components/AuthProvider.js
'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { isAuthenticated, removeToken } from '@/utils/auth';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  console.log('AuthProvider rendering');

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    console.log('AuthProvider useEffect');
    setIsLoggedIn(isAuthenticated());
  }, []);

  const login = () => {
    console.log('Login called');
    setIsLoggedIn(true);
  };

  const logout = () => {
    console.log('Logout called');
    removeToken();
    setIsLoggedIn(false);
  };

  const value = { isLoggedIn, login, logout };
  console.log('AuthProvider value:', value);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  const context = useContext(AuthContext);
  console.log('useAuthContext called, context:', context);
  if (context === undefined) {
    throw new Error('useAuthContext must be used within an AuthProvider');
  }
  return context;
}