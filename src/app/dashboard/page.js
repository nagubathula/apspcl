// app/dashboard/page.js

import ProtectedRoute from "@/components/ProtectedRoute";

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <div>
        <h1>Dashboard</h1>
        <p>This is a protected page</p>
      </div>
    </ProtectedRoute>
  );
}
