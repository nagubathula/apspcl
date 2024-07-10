'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { isAuthenticated, removeToken } from "@/utils/auth";

export default function RootLayout({ children }) {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    if (!isAuthenticated()) {
      router.push("/login");
    }
  }, [router]);

  const handleLogout = () => {
    removeToken();
    router.push("/login");
  };

  if (!isClient) {
    return null;
  }

  return (
    <html lang="en">
      <body>
        <div>
          <Link href="/">Home</Link>
          <Link href="/dashboard">Dashboard</Link>
          <button onClick={handleLogout}>Logout</button>
        </div>
        {children}
      </body>
    </html>
  );
}
