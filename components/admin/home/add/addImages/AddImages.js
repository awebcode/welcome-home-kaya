import { Paper } from "@mui/material";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import ProgressList from "./progressList/ProgressList";
import ImagesList from "./ImageList";

const AddImages = () => {
  const [files, setFiles] = useState([]);
    const onDrop = useCallback((acceptedFiles) => {
     
    setFiles(acceptedFiles); // Verify that this is only being called once per drop.
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
  });
  return (
    <>
      <Paper
        sx={{
          cursor: "pointer",
          background: "#fafafa",
          color: "#bdbdbd",
          border: "1px dashed #ccc",
          "&:hover": { border: "1px solid #ccc" },
        }}
      >
        <div style={{ padding: "16px" }} {...getRootProps()}>
          <input {...getInputProps()} />
          {isDragActive ? (
            <p style={{ color: "green" }}>Drop the files here...</p>
          ) : (
            <p>Drag and Drop some files here, or click to select files</p>
          )}
          <em>(images with *.jpeg, *.png, *.jpg extension will be accepted)</em>
        </div>
      </Paper>
      <ProgressList {...{ files }} />
      <ImagesList />
    </>
  );
};

export default AddImages;
