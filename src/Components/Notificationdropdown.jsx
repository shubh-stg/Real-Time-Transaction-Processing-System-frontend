import React, { useState, useEffect } from "react";
import {
  deleteNotification,
  getUnseenNotification,
  markAllSeen,
} from "../Service/NotificationService";

const NotificationDropdown = () => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
    const userId = 19847641;// you can switch to localStorage later
// const userId = localStorage.getItem("userId");
  useEffect(() => {
    const fetchnoti = async () => {
      try {
        const res = await getUnseenNotification(userId);
        setNotifications(res.data);

        // Automatically mark all seen after 3 seconds
        setTimeout(() => {
          markAllSeen(userId);
        }, 60*1000);
      } catch (err) {
        console.error("Error fetching notifications:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchnoti();
  }, [userId]);

  const handleDelete = async (id) => {
    try {
      await deleteNotification(id);
      setNotifications((prev) => prev.filter((n) => n.id !== id));
    } catch (err) {
      console.log("Failed to delete notification :", err);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (notifications.length === 0) return <div className="text-gray-700"> No new notifications</div>;

  return (
    <div>
      {notifications.map((n) => {
        const dateObj = new Date(
          n.timestamp[0],
          n.timestamp[1] - 1, // JS months are 0-based
          n.timestamp[2],
          n.timestamp[3],
          n.timestamp[4],
          n.timestamp[5]
        );

        const formattedDate = dateObj.toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        });

        const formattedTime = dateObj.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        });

        return (
          <div key={n.id} className="text-black">
            <p>
              [
              {n.type === "SUCCESS"
                ? "✅"
                : n.type === "FAILURE"
                ? "❌"
                : "⚠️"}
              ] {n.message}
            </p>
            <p>{formattedDate}  {formattedTime}</p>
            
            <button onClick={() => handleDelete(n.id)}>Delete</button>
            <hr />
          </div>
        );
      })}
    </div>
  );
};



export default NotificationDropdown;
