import axios from "axios"

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const getAllUsers=()=>axios.get(`${BASE_URL}/analytics/get-users`);
export const deleteUser=()=>axios.delete(`${BASE_URL}/analytics/delete-user`);

export const getCards=()=>axios.get(`${BASE_URL}/analytics/admin-analytics`);
export const getStatusRatio=()=>axios.get(`${BASE_URL}/analytics/status-ratio`);
export const getDailyTransactions=()=>axios.get(`${BASE_URL}/analytics/daily-volume`);
export const getTopUsers=()=>axios.get(`${BASE_URL}/analytics/top-users`);

