import React, { useEffect, useState } from "react";
import { getUserBalance } from "../Service/UserService";
import styles from "./Balance.module.css"
import UserNavbar from "../Components/UserNavbar";
import { 
  Wallet, 
  ArrowUpRight, 
  ArrowDownLeft, 
  Activity, 
  BarChart3, 
  TrendingUp 
} from 'lucide-react';
import BackToDashboardButton from "../Components/BackToDashboardButton";
const BalanceOverview = () => {
  const [overview, setOverview] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const userId = localStorage.getItem("userId");
 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getUserBalance(userId);
        setOverview(res.data);
      } catch (err) {
        console.error("Error fetching balance overview", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  },[userId]);

  
  if (loading) return <div className={styles.loading}>Loading balance overview...</div>;
  if (error) return <div className={styles.error}>Failed to load balance overview</div>;


  return (
    <div>
      <UserNavbar/>
      <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Financial Overview</h1>
        <p className={styles.subtitle}>Your account summary and transaction statistics</p>
      </div>
      
      <div className={styles.grid}>
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <Wallet size={24} className={styles.iconBalance} />
            <h3>Current Balance</h3>
          </div>
          <p>₹ {overview.currentBalance.toLocaleString()}</p>
        </div>
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <ArrowUpRight size={24} className={styles.iconSent} />
            <h3>Total Sent</h3>
          </div>
          <p>₹ {overview.totalSent.toLocaleString()}</p>
        </div>
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <ArrowDownLeft size={24} className={styles.iconReceived} />
            <h3>Total Received</h3>
          </div>
          <p>₹ {overview.totalReceived.toLocaleString()}</p>
        </div>
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <Activity size={24} className={styles.iconTransactions} />
            <h3>Total Successful Transactions</h3>
          </div>
          <p>{overview.totalTransactions.toLocaleString()}</p>
        </div>
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <BarChart3 size={24} className={styles.iconAverage} />
            <h3>Avg. Transaction</h3>
          </div>
          <p>₹ {overview.averageTransaction.toFixed(2)}</p>
        </div>
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <TrendingUp size={24} className={styles.iconMaximum} />
            <h3>Maximum Transaction</h3>
          </div>
          <p>₹ {overview.largestTransaction.toLocaleString()}</p>
        </div>
      </div>
      <div className={styles.backButtonWrapper}><BackToDashboardButton/></div>
    </div>
    </div>
    
  );

};

export default BalanceOverview;
