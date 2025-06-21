import React, { useState } from "react";
import styles from "./Register.module.css";

import { useNavigate } from "react-router-dom";
import { registerUser } from "../Service/AuthService";

const Register = () => {
  const navigate = useNavigate();

  const [id, setId] = useState("");
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [balance, setBalance] = useState("");

  const [errors, setErrors] = useState({
    id: "",
    fullName: "",
    username: "",
    password: "",
    balance: "",
  });

  const validate = () => {
    const newErrors = {};

    if (!id.trim()) {
      newErrors.id = "ID is required";
    } else if (!/^\d{10}$/.test(id)) {
      newErrors.id = "ID must be exactly 10 digits";
    }

    if (!fullName.trim()) newErrors.fullName = "Full Name is required";
    if (!username.trim()) newErrors.username = "Username is required";

    if (!password.trim()) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!balance.toString().trim()) {
      newErrors.balance = "Balance is required";
    } else if (isNaN(balance)) {
      newErrors.balance = "Balance must be a number";
    } else if (Number(balance) <= 0) {
      newErrors.balance = "Balance must be greater than 0";
    } else if (Number(balance) > 100000) {
      newErrors.balance = "Balance cannot exceed 1,00,000";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const user = {
      id,
      name: fullName,
      username,
      password,
      balance: Number(balance),
    };

    registerUser(user)
      .then((response) => {
        alert("User registered successfully!");
        setTimeout(() => {
          navigate("/login");
        }, 1000); // delay 1 second
      })
      .catch((error) => {
        if (error.response && error.response.status === 409) {
          alert("Username or ID already exists");
        } else {
          console.log(error);
        }
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <form onSubmit={handleRegister} className={styles.form}>
          <h2 className={styles.title}>Create Account</h2>
          <p className={styles.subtitle}>Join us today and get started</p>

          <div className={styles.inputGroup}>
            <input
              type="text"
              placeholder="ID (10-digit number)"
              value={id}
              onChange={(e) => setId(e.target.value)}
              className={`${styles.input} ${
                errors.id ? styles.inputError : ""
              }`}
            />
            {errors.id && (
              <span className={styles.errorMessage}>{errors.id}</span>
            )}
          </div>

          <div className={styles.inputGroup}>
            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className={`${styles.input} ${
                errors.fullName ? styles.inputError : ""
              }`}
            />
            {errors.fullName && (
              <span className={styles.errorMessage}>{errors.fullName}</span>
            )}
          </div>

          <div className={styles.inputGroup}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className={`${styles.input} ${
                errors.username ? styles.inputError : ""
              }`}
            />
            {errors.username && (
              <span className={styles.errorMessage}>{errors.username}</span>
            )}
          </div>

          <div className={styles.inputGroup}>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`${styles.input} ${
                errors.password ? styles.inputError : ""
              }`}
            />
            {errors.password && (
              <span className={styles.errorMessage}>{errors.password}</span>
            )}
          </div>

          <div className={styles.inputGroup}>
            <input
              type="number"
              placeholder="Initial Balance"
              value={balance}
              onChange={(e) => setBalance(e.target.value)}
              className={`${styles.input} ${
                errors.balance ? styles.inputError : ""
              }`}
            />
            {errors.balance && (
              <span className={styles.errorMessage}>{errors.balance}</span>
            )}
          </div>

          <button type="submit" className={styles.submitButton}>
            Create Account
          </button>

          <div className={styles.loginPrompt}>
            <p>
              Already have an account?{" "}
              <button
                type="button"
                className={styles.loginLink}
                onClick={() => navigate("/login")}
              >
                Sign In
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
