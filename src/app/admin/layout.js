"use client";
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
    <div>
      <div className="flex">
        {/* Sidebar */}
        <nav className="w-64 bg-neutral-800 h-screen sticky top-0 left-0 text-white shadow-md">
          <div className="p-4">
            <Link href="/" className="text-xl font-bold mb-4">
              APSPCL Admin
            </Link>
            <ul>
              <li className="mb-2">
                <a
                  href="/admin/reports"
                  className="block p-2 hover:bg-neutral-700 rounded"
                >
                  Reports
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/admin/people"
                  className="block p-2 hover:bg-neutral-700 rounded"
                >
                  People
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/admin/tenders"
                  className="block p-2 hover:bg-neutral-700 rounded"
                >
                  Tenders
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/admin/contact"
                  className="block p-2 hover:bg-neutral-700 rounded"
                >
                  Contact
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/admin/latestnews"
                  className="block p-2 hover:bg-neutral-700 rounded"
                >
                  Latest News
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/admin/downloads"
                  className="block p-2 hover:bg-neutral-700 rounded"
                >
                Downloads
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/admin/goos"
                  className="block p-2 hover:bg-neutral-700 rounded"
                >
                GOOS
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/admin/circulars"
                  className="block p-2 hover:bg-neutral-700 rounded"
                >
                Circulars
                </a>
              </li>
            </ul>
          </div>
        </nav>

        {/* Main content */}
        <div className="flex w-full flex-col bg-neutral-100">
          <div>
            <div className="flex items-center justify-end align-center  bg-neutral-100 text-white shadow-md py-2 px-2 mb-4 border-b border-neutral-800">
              <button
                onClick={handleLogout}
                className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
          <div className="p-4">{children}</div>
        </div>
      </div>
    </div>
  );
}
