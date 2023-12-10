import React from "react";
import styles from "./dashboard.module.css";
import Card from "./_ui/card/card";
import RightBar from "./_ui/rightbar/rightbar";
import TransActions from "./_ui/transActions/transActions";
import Chart from "./_ui/chart/chart";

function DashboardPage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          <Card />
          <Card />
          <Card />
        </div>
        <TransActions />
        <Chart />
      </div>
      <div className={styles.side}>
        <RightBar />
      </div>
    </div>
  );
}

export default DashboardPage;
