import React from 'react';
import { Send, Bell } from 'lucide-react';
import styles from './UserNavbar.module.css';
import { useState } from 'react';
import Notificationdropdown from './Notificationdropdown';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
   const [showDropdown, setShowDropdown] = useState(false);
  const navigate =useNavigate();
  const toggleDropdown = () => setShowDropdown(prev => !prev);

  const handleLogout=()=>{
    localStorage.clear();
    navigate("/login");
  }

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
        <div className={styles.right} style={{ position: "relative", display: "flex", alignItems: "center", gap: "15px" }}>
          <button 
            onClick={handleLogout}
            style={{
              background: "linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)",
              color: "white",
              border: "none",
              padding: "8px 16px",
              borderRadius: "6px",
              fontSize: "14px",
              fontWeight: "600",
              cursor: "pointer",
              transition: "all 0.3s ease",
              boxShadow: "0 2px 8px rgba(231, 76, 60, 0.3)"
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "translateY(-1px)";
              e.target.style.boxShadow = "0 4px 12px rgba(231, 76, 60, 0.4)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "0 2px 8px rgba(231, 76, 60, 0.3)";
            }}
          >
            Logout
          </button>
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
