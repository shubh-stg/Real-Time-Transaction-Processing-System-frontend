import { useState } from "react";
import {  sendTransaction } from "../Service/UserService";
import styles from "./SendMoney.module.css"
import { useNavigate } from "react-router-dom";
import { getUnseenNotification } from "../Service/NotificationService";
import BackToDashboardButton from "../Components/BackToDashboardButton";


export default function SendMoney() {
  const [recieverId, setReceiverId] = useState("");
  const [amount, setAmount] = useState("");
  const [status, setStatus] = useState(null);
   const [loading, setLoading] = useState(false);
  const navigate=useNavigate();
  // const userId = localStorage.getItem("userId"); // senderId
  const userId = 19847641;



  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);
    setLoading(true);

    const numericAmount = parseFloat(amount);

  // ✅ Validation check
  if (numericAmount <= 0 || isNaN(numericAmount)) {
    setStatus("⚠️ Please enter a valid amount greater than 0.");
    setAmount("");
    return;
  }

   if (parseInt(recieverId) === userId) {
    setStatus("⚠️ Receiver ID cannot be the same as your own ID.");
    setReceiverId("");
    return;
  }
    try {
      const payload = {
        senderId: userId,
        recieverId,
        amount: parseFloat(amount),
      };

      const res = await sendTransaction(payload);
      
      if (res.status === 200) {
        setStatus("✅ Transaction submitted successfully! Processing...");
        
        // Wait then check notifications for result
        setTimeout(async () => {
          try {
            const response = await getUnseenNotification(userId);
            
            
            // Extract the notifications array from response.data
            const notifications = response?.data || [];
           
            
            if (notifications.length > 0) {
              
              const latestNotification = notifications[notifications.length - 1];
              
              
              if (latestNotification?.message?.includes("You successfully sent ₹")) {
                setStatus("✅ Transaction completed successfully! Redirecting...");
              } else if (latestNotification?.message?.includes("Transaction failed:")) {
                setStatus("❌ Transaction failed. Redirecting...");
              } else {
                setStatus("⏳ Transaction processing. Check notifications. Redirecting...");
              }
            } else {
              setStatus(" Transaction may still be processing. Redirecting...");
            }
            
            setTimeout(() => navigate("/userdashboard"), 2000);
          } catch (err) {
            console.error("Error fetching notifications:", err);
            setStatus("⏳ Transaction submitted. Check notifications. Redirecting...");
            setTimeout(() => navigate("/userdashboard"), 2000);
          }
        }, 6000);
        
      } else {
        setStatus("❌ Failed to submit transaction. Please try again.");
        setTimeout(() => navigate("/userdashboard"), 3000);
      }

    } catch (err) {
      setStatus("❌ Error submitting transaction. Please try again.");
      setTimeout(() => navigate("/userdashboard"), 3000);
    } finally {
      setLoading(false);
    }
  };
  return (
    
    <div className={styles.container}>
      <h1 className={styles.heading}>Send Money</h1>
      <p className={styles.subheading}>Transfer funds to another user</p>
      
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Receiver ID:</label>
          <input
            type="text"
            value={recieverId}
            onChange={(e) => setReceiverId(e.target.value)}
            className={styles.input}
            placeholder="Enter receiver's ID"
          />
        </div>
        
        <div className={styles.inputGroup}>
          <label className={styles.label}>Amount:</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className={styles.input}
            placeholder="Enter amount"
          />
        </div>
        
        <button type="submit" className={styles.button}>
          Send
        </button>
      </form>
      
      {status && (
        <p className={`${styles.status} ${
          status.includes("successfully") ? styles.statusSuccess : styles.statusError
        }`}>
          {status}
        </p>
      )}
      <div className={styles.backButtonWrapper}><BackToDashboardButton/></div>
       
    </div>
   
   
  );
}
