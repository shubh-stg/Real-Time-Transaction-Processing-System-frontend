import axios  from "axios";
import { jwtDecode } from "jwt-decode";
const apiClient=axios.create({
  baseURL: import.meta.env.VITE_BASE_URL
});

apiClient.interceptors.request.use((config)=>{
  const token=localStorage.getItem("token");
  if(token){

     try {
      const { exp } = jwtDecode(token);
      if (exp * 1000 < Date.now()) {
       
        localStorage.clear();
        window.location.href = "/login"; 
        return Promise.reject("Token expired");
      }
    } catch (err) {
      console.error("Invalid token:", err);
      localStorage.clear();
      window.location.href = "/login";
      return Promise.reject("Invalid token");
    }
    config.headers.Authorization=`Bearer ${token}`;
    
  }
  return config;
},(error)=>{
   return Promise.reject(error);
})
export default apiClient;