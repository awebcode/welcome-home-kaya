import deleteFile from "@/firebase/deleteFile";
import { Base_url } from "@/utils/base_url"
import axios from "axios"
//get all projects for creating/editing and realtime updating
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



//update project and realtime updating



export const updateRoom = async (
  room,
  currentUser,
  dispatch,
  updatedRoom,
  deletedImages
) => {
  dispatch({ type: "START_LOADING" });

  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    };

    // Assuming you're sending a JSON object as the request body
    const response = await axios.patch(
      `${Base_url}/projects/${updatedRoom._id}`,
      room,
      config
    );

    if (response.data) {
      dispatch({
        type: "UPDATE_ALERT",
        payload: {
          open: true,
          severity: "success",
          message: "The Project has been updated successfully",
        },
      });

      clearProject(dispatch, currentUser, deletedImages, updatedRoom);
      dispatch({ type: "UPDATE_SECTION", payload: 0 });
      dispatch({ type: "UPDATE_ROOM", payload: response.data });

      return {data:response.data};
    }
  } catch (error) {
   
    dispatch({
      type: "UPDATE_ALERT",
      payload: {
        open: true,
        severity: "error",
        message: "Error updating room. Please try again later.",
      },
    });
  } finally {
    dispatch({ type: "END_LOADING" });
  }
};
export const clearProject = (dispatch, currentUser, images = [], updatedRoom = null) => {
  dispatch({ type: "RESET_ROOM" });
  // remove from localStorage
  if (updatedRoom) {
    deleteImages(images, currentUser._id); //updatedroom.uid
  } else {
    deleteImages(images, currentUser._id); //currentUser.id
  }
};




export const deleteImages = async (images, userId) => {
  if (images.length > 0) {
    const promises = images.map((imgURL) => {
      const imgName = imgURL?.split(`${userId}%2F`)[1]?.split("?")[0];
      return deleteFile(`rooms/${userId}/${imgName}`);
    });
    try {
      await Promise.all(promises);
    } catch (error) {
      console.log(error);
    }
  }
};
