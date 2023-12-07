import React from "react";
import Navbar from "./_ui/navbar/navbar";
import Sidebar from "./_ui/sidebar/sidebar";
import styles from "./dashboard.module.css";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        <Navbar />
        {children}
      </div>
    </div>
  );
}

export default DashboardLayout;
