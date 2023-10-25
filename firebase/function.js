import { Base_url } from "@/utils/base_url"
import axios from "axios"

export const getAllProjects = async(dispatch) => {
    try {
      const config = {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      };
        const { data } =await axios.get(`${Base_url}/projects`, config);
        
    if (data) {
        dispatch({ type: "UPDATE_ROOMS", payload: data?.projects });
    }
  } catch (error) {
    console.log("error", error);
  }
};