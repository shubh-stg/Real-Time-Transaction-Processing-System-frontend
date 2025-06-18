import React from "react";
import { useNavigate } from "react-router-dom";

import DashboardCard from "./DashBoardCard";
import UserNavbar from "./UserNavbar";

export default function UserDashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-red-300">
      <UserNavbar />

      <div className="max-w-4xl mx-auto px-6 py-12 text-center">
        <h1 className="text-5xl font-extrabold mb-4 text-gray-900 drop-shadow-sm">
          Welcome Back 👋
        </h1>
        <p className="text-xl text-gray-800 mb-10">
          What are you looking for today?
        </p>

        <div className="flex flex-col gap-8 items-center mt-2">
          <DashboardCard
            title="Send Money"
            icon="💸"
            onClick={() => navigate("/send")}
          />
          <DashboardCard
            title="Balance Overview"
            icon="💰"
            onClick={() => navigate("/balance")}
          />
          <DashboardCard
            title="Recent Transactions"
            icon="📜"
            onClick={() => navigate("/transactions")}
          />
        </div>
      </div>
    </div>
  );
}
