import axiosInstace from "./axiosInstance";
import { ENDPOINTS } from "../Utils/API";


export const getVisaExperiences = async (body) => {
    try {
        const response = await axiosInstace.get(ENDPOINTS.GET_VISA_EXPERIENCES+`?page_number=${body.page_number}`);
        if (response.status === 200) {
            return response;
        } else {
            return null;
        }
    } catch (error) {
        if (error.response) {
            if (error.response.status === 401) {
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
