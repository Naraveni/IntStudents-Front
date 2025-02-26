import axios from 'axios';
const BASE_URL = import.meta.env.VITE_BASE_URL;
import { useNavigate } from 'react-router-dom';
import useNotificationStore from '../Store/NotificationStore';


const axiosInstace = axios.create({
    baseURL: BASE_URL,
    timeout: 100000,
    headers: {
        'Content-Type': 'application/json',
    }
})

axiosInstace.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("jwt_token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

axiosInstace.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response && error.response.status === 401) {
        const navigate = useNavigate();
        const setNotification = useNotificationStore(state=> state.setNotification);
  
        localStorage.clear();
  
        setNotification("Session expired. Redirecting to login.", "error", true);
  
        navigate("/");
      }
      return Promise.reject(error);
    }
  );

export default axiosInstace;