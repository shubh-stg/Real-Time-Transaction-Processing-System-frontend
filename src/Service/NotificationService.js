import axios from "axios"

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const getUnseenNotification=(userId)=>axios.get(`${BASE_URL}/${userId}/unseen`);

export const markAllSeen=(userId)=>axios.post(`${BASE_URL}/${userId}/mark-seen`);

export const deleteNotification=(Id)=>axios.delete(`${BASE_URL}/${Id}/delete`);