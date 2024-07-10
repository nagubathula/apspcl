// app/hooks/useAuth.js

"use client";

import { useState, useEffect } from "react";
import { isAuthenticated, removeToken } from "@/utils/auth";

export function useAuth() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(isAuthenticated());
  }, []);

  const login = () => setIsLoggedIn(true);
  const logout = () => {
    removeToken();
    setIsLoggedIn(false);
  };

  return { isLoggedIn, login, logout };
}
