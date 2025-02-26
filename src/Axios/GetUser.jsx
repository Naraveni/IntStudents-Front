import axiosInstace from "./axiosInstance";
import { ENDPOINTS } from "../Utils/API";

async function getUser () {
    try {
        const response = await axiosInstace.get(ENDPOINTS.GET_USER);
        if (response.status === 200) {
            return response.data;
        } else {
            return null;
        }
    } catch (error) {
        console.error("Error while fetching user data", error);
        return error.response;
    }
}

export default getUser;