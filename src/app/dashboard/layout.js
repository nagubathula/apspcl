// app/layout.js

"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";
import { isAuthenticated, removeToken } from "@/utils/auth";

export default function RootLayout({ children }) {
  const router = useRouter();

  const handleLogout = () => {
    removeToken();
    router.push("/login");
  };

  return (
    <html lang="en">
      <body>
        <div>
          <Link href="/">Home</Link>
          {isAuthenticated() ? (
            <>
              <Link href="/dashboard">Dashboard</Link>
              <button onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <>
              <Link href="/login">Login</Link>
              <Link href="/register">Register</Link>
            </>
          )}
        </div>
        {children}
      </body>
    </html>
  );
}
