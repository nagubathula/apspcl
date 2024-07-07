import ProtectedRoute from '@/components/ProtectedRoute';

const Dashboard = () => {
  return (
    <ProtectedRoute>
      <h1>Dashboard</h1>
      <p>Only authenticated users can access this page.</p>
    </ProtectedRoute>
  );
};

export default Dashboard;
