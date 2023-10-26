import { CheckCircleOutline } from "@mui/icons-material";
import { Box, ImageListItem } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import CircularProgressWithLabel from "./CircularProgressWithLabel";
import { v4 as uuidv4 } from "uuid";
import uploadFileProgress from "@/firebase/uploadFileProgress";
import { useValue } from "@/context/ContextProvider";

const ProgressItem = ({ file }) => {
 const [progress, setProgress] = useState(0);
 const [imageURL, setImageURL] = useState(null);
 const {
   state: { currentUser,updatedRoom },
   dispatch,
 } = useValue();
 const isInitialRender = useRef(true);

 useEffect(() => {
   const uploadImage = async () => {
     const imageName = uuidv4() + "." + file.name.split(".").pop();
     try {
       const url = await uploadFileProgress(
         file,
         `rooms/${updatedRoom ? updatedRoom._id : currentUser?._id}`,
         imageName,
         setProgress
       );
 dispatch({ type: "UPDATE_IMAGES", payload: [url] });
 if (updatedRoom) dispatch({ type: "UPDATE_ADDED_IMAGES", payload: [url] });
      //  dispatch({ type: "UPDATE_IMAGES", payload: url });
       if (isInitialRender.current) {
         setImageURL(URL.createObjectURL(file));
         isInitialRender.current = false;
       } else {
         setImageURL(null);
       }
     } catch (error) {
       dispatch({
         type: "UPDATE_ALERT",
         payload: { open: true, severity: "error", message: error.message },
       });
       console.log(error);
     }
   };

   if (isInitialRender.current) {
     setImageURL(URL.createObjectURL(file));
     isInitialRender.current = false;
   } else {
     uploadImage();
   }
 }, [file, currentUser, dispatch]);
  return (
    imageURL && (
      <ImageListItem cols={1} rows={1}>
        <img src={imageURL} alt="gallery" loading="lazy" />
        <Box sx={backDrop}>
          {progress < 100 ? (
            <CircularProgressWithLabel value={progress} />
          ) : (
            <CheckCircleOutline
              sx={{ width: 60, height: 60, color: 'lightgreen' }}
            />
          )}
        </Box>
      </ImageListItem>
    )
  );
};

export default ProgressItem;

const backDrop = {
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'rgba(0,0,0, .5)',
}