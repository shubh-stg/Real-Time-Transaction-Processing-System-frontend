import React, { useEffect, useState } from 'react'
import { getCards } from '../Service/AdminService';
import styles from "./Statistics.module.css"
import StatusRatioChart from '../Components/StatusRatioChart';
import DailyTransactionChart from '../Components/DailyTransactionChart';
import TopUsers from '../Components/TopUsers';
import BackToDashboardButton from '../Components/BackToAdminDashboard';
import AdminNavbar from '../Components/AdminNavbar';
const Statistics = () => {

  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(()=>{
    const fetchData=async()=>{
      try{
        const res=await getCards();
        setStats(res.data);
      }
      catch(err){
        console.log("error in fetching");
        
      }
      finally{
        setLoading(false);
      }
    }
    fetchData();
  },[])

  if (loading) return <div className={styles.loading}>Loading stats...</div>;
  if (!stats) return <div className={styles.error}>Failed to load stats</div>;

  return (
    <div>
      <AdminNavbar/>
      <div className={styles.dashboardContainer}>
      <div className={styles.dashboardHeader}>
        <h1 className={styles.dashboardTitle}>Statistics</h1>
        {/* <p className={styles.dashboardSubtitle}>Monitor your platform's performance and analytics</p> */}
      </div>

      <div className={styles.contentWrapper}>
        {/* Stats Cards Section */}
        <section className={styles.statsSection}>
          <div className={styles.cardContainer}>
            <div className={styles.card}>
              <h3>🧑‍💼 Total Users</h3>
              <p>{stats.usercount}</p>
            </div>
            <div className={styles.card}>
              <h3>💸 Total Transaction Volume</h3>
              <p>₹ {stats.transactionvolume?.toLocaleString()}</p>
            </div>
            <div className={styles.card}>
              <h3>🔄 Total Transactions</h3>
              <p>{stats.transactioncount}</p>
            </div>
          </div>
        </section>

        {/* Charts Grid Section */}
        <section className={styles.chartsGrid}>
          <div className={styles.chartCard}>
            <StatusRatioChart />
          </div>
          <div className={styles.chartCard}>
            <DailyTransactionChart />
          </div>
        </section>

        {/* Full Width Chart Section */}
        <section className={styles.fullWidthChart}>
          <TopUsers />
        </section>
      </div>
      <div className={styles.backButtonWrapper}><BackToDashboardButton/></div>
    </div>
    </div>
    
  );
}

export default Statistics