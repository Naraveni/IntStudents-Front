import axiosInstace from "./axiosInstance";
import { ENDPOINTS } from "../Utils/API";


export const userLogin = async (body) => {
    try {
        const response = await axiosInstace.post(ENDPOINTS.LOGIN, body);
        if (response.status === 200) {
            localStorage.setItem("jwt_token", response.data.token);
            return response;
        } else {
            return null;
        }
    } catch (error) {
        if (error.response) {
            if (error.response.status === 401) {
                console.error("Invalid email or password");
                return error.response;
            } else {
                console.error("Unexpected error:", error.response.data);
                return null;
            }
        } else {
            console.error("Error without response:", error);
            return null;
        }
    }
};
