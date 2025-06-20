import React from 'react'
import AdminNavbar from './AdminNavbar'
import { useNavigate } from 'react-router-dom';
import DashboardCard from './DashBoardCard';

export default function AdminDashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-red-300">
      <AdminNavbar/>

      <div className="max-w-4xl mx-auto px-6 py-12 text-center">
        <h1 className="text-5xl font-extrabold mb-4 text-gray-900 drop-shadow-sm">
          Admin Dashboard 🛡️
        </h1>
        <p className="text-xl text-gray-800 mb-10">
          Manage your platform efficiently
        </p>

        <div className="flex flex-col gap-8 items-center mt-2">
          <DashboardCard
            title="User Management"
            icon="👥"
            onClick={() => navigate("/admin/users")}
          />
          <DashboardCard
            title="Statistics"
            icon="📊"
            onClick={() => navigate("/admin/statistics")}
          />
        </div>
      </div>
    </div>
  );
}

