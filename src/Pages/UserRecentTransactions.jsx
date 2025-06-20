import React, { useEffect, useState } from 'react'
import { getRecentTransactionsForUser } from '../Service/UserService';
import styles from "./UserRecentTransactions.module.css";
import BackToDashboardButton from '../Components/BackToDashboardButton';

const UserRecentTransactions = () => {
  // const userId=localStorage.getItem("userId");
  const userId=19847641;
   const [transactions, setTransactions] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(()=>{

    const fetchTransactions=async()=>{
      try{
        setLoading(true);
        const res=await getRecentTransactionsForUser(userId,page);
        setTotalPages(res.data.totalPages);
        setTransactions(res.data.content);

      }
      catch(err){
        setError(true);
        console.log("Error Fetching Transactions",err);
      }
      finally{
        setLoading(false);
      }
    }
    fetchTransactions();

  },[userId,page]);

  if (loading) return <div>Loading recent transactions...</div>;
  if (error) return <div>Failed to load transactions.</div>;
  if (transactions.length === 0) return <div>No recent transactions found.</div>;

   const formatDateTime = (timestampArr) => {
    const dateObj = new Date(
      timestampArr[0],
      timestampArr[1] - 1,
      timestampArr[2],
      timestampArr[3],
      timestampArr[4],
      timestampArr[5]
    );
    const date = dateObj.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
    const time = dateObj.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
    return `${date} ${time}`;
  };

return (
  <div className={styles.container}>
    <h2 className={styles.title}>Recent Transactions</h2>

    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead className={styles.tableHead}>
          <tr>
            <th className={styles.tableHeader}>Timestamp</th>
            <th className={styles.tableHeader}>Type</th>
            <th className={styles.tableHeader}>Counterparty</th>
            <th className={styles.tableHeader}>Amount</th>
            <th className={styles.tableHeader}>Status</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((tx, index) => (
            <tr key={index} className={styles.tableRow}>
              <td className={styles.tableCell}>{formatDateTime(tx.timestamp)}</td>
              <td className={styles.tableCell}>
                <span className={styles.typeTag}>{tx.type}</span>
              </td>
              <td className={styles.tableCell}>{tx.counterpartyName}</td>
              <td className={styles.tableCell}>
                <span className={styles.amount}>₹{tx.amount}</span>
              </td>
              <td className={styles.tableCell}>
                <span className={`${styles.status} ${styles[tx.status?.toLowerCase()]}`}>
                  {tx.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <div className={styles.pagination}>
      <button 
        className={`${styles.paginationBtn} ${page === 0 ? styles.disabled : ''}`}
        onClick={() => setPage((p) => Math.max(p - 1, 0))} 
        disabled={page === 0}
      >
        Previous
      </button>
      <span className={styles.pageInfo}>
        Page {page + 1} of {totalPages}
      </span>
      <button 
        className={`${styles.paginationBtn} ${page + 1 >= totalPages ? styles.disabled : ''}`}
        onClick={() => setPage((p) => p + 1)} 
        disabled={page + 1 >= totalPages}
      >
        Next
      </button>
    </div>

    <div className={styles.backButtonWrapper}><BackToDashboardButton/></div>
  </div>
);

}

export default UserRecentTransactions