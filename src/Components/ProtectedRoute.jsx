import React from "react";
import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";


const ProtectedRoute=({ children, requiredRole }) =>{
  const token = localStorage.getItem("token");

  if (!token) return <Navigate to="/login" />;

  try {

    const { exp, role } = jwtDecode(token);

    if (exp * 1000 < Date.now()) {
      localStorage.clear();
      return <Navigate to="/login" />;
    }

    if (requiredRole && role !== requiredRole) {
      return <Navigate to="/unauthorized"  replace/>;
    }

    return children;
  } catch (err) {
    localStorage.clear();
    return <Navigate to="/login" />;
  }
}
export default ProtectedRoute;
