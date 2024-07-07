"use client";
import { createContext, useState, useContext } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  const register = async (userData) => {
    try {
      await axios.post('/api/auth/register', userData);
      router.push('/login');
    } catch (err) {
      console.error('Registration error:', err);
    }
  };

  const login = async (formData) => {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    if (response.ok) {
      return data;
    } else {
      throw new Error(data.msg || 'Login failed');
    }
  };

  const logout = () => {
    localStorage.removeItem('token'); // Remove token from localStorage
    setUser(null);
    router.push('/login');
  };

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
