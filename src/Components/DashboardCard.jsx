import React from 'react'
export default function DashboardCard({ title, icon, onClick }) {
  return (
    <div
      onClick={onClick}
      className="bg-blue-300 hover:shadow-2xl cursor-pointer transition-all px-8 py-10 rounded-2xl shadow-md flex items-center justify-between w-full max-w-xl h-32"
    >
      <div>
        <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
      </div>
      <div className="text-4xl">{icon}</div>
    </div>
  );
}
