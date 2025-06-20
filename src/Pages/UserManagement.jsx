import React, { useEffect, useState } from "react";
import { deleteUser, getAllUsers } from "../Service/AdminService";
import styles from  "./UserManagement.module.css"
import BackToDashboardButton from "../Components/BackToAdminDashboard";

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchUsers = async () => {
    try {
      const res = await getAllUsers();
      setUsers(res.data);
    } catch (e) {
      console.log("Error in fetching ", e);
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = async (userId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user"
    );
    if (!confirmDelete) return;

    try {
      const res = await deleteUser(userId);
      setUsers((prev) => prev.filter((u) => u.id !== userId));
    } catch (e) {
      console.log("error deleting user");
    }
  };

  if (loading) return <div>Loading users...</div>;
  if (error) return <div>Failed to load users</div>;

   return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Users</h1>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>User ID</th>
            <th>Name</th>
            <th>Balance</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.name}</td>
              <td>₹ {u.balance}</td>
              <td>
                <button onClick={() => handleDelete(u.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className={styles.backButtonWrapper}><BackToDashboardButton/></div>
    </div>
  );
};

export default UserManagement;
