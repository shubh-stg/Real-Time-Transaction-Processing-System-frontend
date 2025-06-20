import React from 'react'
import { Send } from 'lucide-react';
import styles from "./AdminNavbar.module.css"
const AdminNavbar = () => {
  return (
    
    <nav className={styles.navbar}>
      <div className={styles.container}>
        {/* Left: Logo + Name */}
        <div className={styles.left}>
          <div className={styles.logoBox}>
            <Send className={styles.icon} />
          </div>
          <span className={styles.appName}>MoneyFlow</span>
        </div>

        {/* Center: User Panel */}
        <div className={styles.center}>
          <span className={styles.userPanel}>Admin Panel</span>
        </div>


      </div>
    </nav>
  );
}

export default AdminNavbar