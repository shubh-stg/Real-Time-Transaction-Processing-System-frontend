import axios from "axios"

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const sendTransaction = (data)=>axios.post(`${BASE_URL}/user-analytics/publish`,data);

export const getUserBalance=(userId)=>axios.get(`${BASE_URL}/user-analytics/balance-overview/${userId}`);

export const getRecentTransactionsForUser=(userId,page)=>axios.get(`${BASE_URL}/user-analytics/recent/${userId}?page=${page}`);


