
import apiClient from "./apiClient";

export const getUnseenNotification=(userId)=>apiClient.get(`/noti/${userId}/unseen`);

export const markAllSeen=(userId)=>apiClient.post(`/noti/${userId}/mark-seen`);

export const deleteNotification=(Id)=>apiClient.delete(`/noti/${Id}/delete`);