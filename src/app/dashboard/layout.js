import React from "react";
import Dashboard from "@/components/Dashboard";
export default  function DashboardLayout({ children }){
    return (
      <div className="dashboard px-8 py-6">
        <Dashboard />
  
        {children}
      </div>
    );
  };
  
