import apiClient from "./apiClient";

export const sendTransaction = (data)=>apiClient.post(`/user-analytics/publish`,data);

export const getUserBalance=(userId)=>apiClient.get(`/user-analytics/balance-overview/${userId}`);

export const getRecentTransactionsForUser=(userId,page)=>apiClient.get(`/user-analytics/recent/${userId}?page=${page}`);


