import React from 'react';
import { Send, Bell } from 'lucide-react';
import styles from './UserNavbar.module.css';
import { useState } from 'react';
import Notificationdropdown from './Notificationdropdown';

export default function Navbar() {
   const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => setShowDropdown(prev => !prev);

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
          <span className={styles.userPanel}>User Panel</span>
        </div>

        {/* Right: Bell Icon + Dropdown */}
        <div className={styles.right} style={{ position: "relative" }}>
          <Bell className={styles.bellIcon} onClick={toggleDropdown} />
          {showDropdown && (
            <div className={styles.dropdown}>
              <Notificationdropdown/>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
