
import apiClient from "./apiClient";


export const getAllUsers=()=>apiClient.get(`/analytics/get-users`);
export const deleteUser=()=>apiClient.delete(`/analytics/delete-user`);

export const getCards=()=>apiClient.get(`/analytics/admin-analytics`);
export const getStatusRatio=()=>apiClient.get(`/analytics/status-ratio`);
export const getDailyTransactions=()=>apiClient.get(`/analytics/daily-volume`);
export const getTopUsers=()=>apiClient.get(`/analytics/top-users`);

