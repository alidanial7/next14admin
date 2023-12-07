import React from "react";
import Navbar from "./_ui/navbar";
import Sidebar from "./_ui/sidebar";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div>
        <Sidebar />
      </div>
      <div>
        <Navbar />
        {children}
      </div>
    </div>
  );
}

export default DashboardLayout;
