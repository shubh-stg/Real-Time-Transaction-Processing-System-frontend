import axios from "axios";

const BASE_URL = import.meta.env.VITE_AUTH_BASE_URL;

export const registerUser=(user)=>axios.post(`${BASE_URL}/register`,user);
export const loginUser=(user)=>axios.post(`${BASE_URL}/login`,user);