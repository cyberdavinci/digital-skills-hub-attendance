"use client";

import React from "react";
import DashboardContent from "./DashboardContent";
import DashboardSidebar from "./DashboardSidebar";
const Dashboard = () => {
  return (
    <div className=" inner-dashboard overflow-y-auto text-slate-100 ">
      <DashboardSidebar />
      <DashboardContent />
    </div>
  );
};

export default Dashboard;
