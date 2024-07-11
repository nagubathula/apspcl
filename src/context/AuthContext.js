"use client";
import { createContext, useState, useContext } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const router = useRouter();
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const register = async (userData) => {
    try {
      await axios.post(`${apiUrl}/api/auth/register`, userData);
      router.push("/login");
    } catch (err) {
      console.error("Registration error:", err);
    }
  };

  const login = async (userData) => {
    try {
      const res = await axios.post(`${apiUrl}/api/auth/login`, userData);
      const { token } = res.data;
      localStorage.setItem("token", token); // Save token to localStorage
      setUser(token);
      router.push("/admin");
    } catch (err) {
      console.error("Login error:", err);
    }
  };

  const logout = () => {
    localStorage.removeItem("token"); // Remove token from localStorage
    setUser(null);
    router.push("/login");
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
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
