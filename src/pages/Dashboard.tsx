import React from "react";
import Sidebar from "../component/Sidebar";
import Header from "../component/Header";
import { FaAngleDown } from "react-icons/fa";
import DashboardContent from "./DashboardContent";

const Dashboard: React.FC = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col bg-gray-50">
        {/* Header */}
        <Header />

        {/* Page Header */}
        <div className="flex justify-between items-center px-6 py-4">
          <h1 className="text-2xl font-semibold text-blue-950">Dashboard</h1>
          <div className="flex items-center text-blue-800 text-sm cursor-pointer hover:text-blue-500">
            <span>This Week</span>
            <FaAngleDown className="ml-1 text-xs" />
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="flex-1 overflow-y-auto">
          <DashboardContent />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
