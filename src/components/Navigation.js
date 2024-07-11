// app/components/Navigation.js

'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuthContext } from './AuthProvider';

export default function Navigation() {
  const router = useRouter();
  const { isLoggedIn, logout } = useAuthContext();

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  return (
    <div>
      <Link href="/">Home</Link>
      {isLoggedIn ? (
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
  );
}