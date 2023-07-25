import React from "react";
import Dashboard from "@/components/Dashboard";
import DashboardSidebar from "@/components/DashboardSidebar";
export default  function DashboardLayout({ children }){
    return (
      <div className="dashboard gap-x-5 flex overflow-y-auto h-screen text-slate-100  px-8 py-6">
        <DashboardSidebar />
  
  <div className="inner-dashboard px-3 py-2">

        {children}
      </div>
  </div>
    );
  };
  
