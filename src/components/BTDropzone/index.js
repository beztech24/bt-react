import BTDropzoneRoot from "./BTDropzoneRoot";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import BTBox from "../BTBox";
import BTTypography from "../BTTypography";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { IconButton } from "@mui/material";
import { Cancel } from "@mui/icons-material";
import Grid from "@mui/material/Grid2";
function imageToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(file); // Converts image to Base64
  });
}
async function processFiles(files) {
  const base64Fileobj = await Promise.all(
    files.map(async (item) => ({
      type: item?.type,
      name: item.name, // Example of using properties from the `item`
      base64Str: await imageToBase64(item),
    }))
  );

  return base64Fileobj;
}
const BTDropzone = ({ height, width, files = [], setFiles }) => {
  const [processedFiles, setProcessedFiles] = useState([]);
  const onDrop = useCallback(async (acceptedFiles) => {
    const processed = await processFiles(acceptedFiles);
    setProcessedFiles((preState) => [...preState, ...processed]); // Update state with processed Base64 files
    setFiles && setFiles((preState) => [...preState, ...acceptedFiles]);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  return (
    <BTDropzoneRoot {...getRootProps()} ownerState={{ height, width }}>
      <input {...getInputProps()} multiple={true} name="image" />
      {isDragActive ? (
        <BTBox
          display="flex"
          alignItems="center"
          justifyContent="center"
          margin={"auto"}
        >
          <BTTypography variant="body2" color="text">
            Drop files dropping....
          </BTTypography>
        </BTBox>
      ) : processedFiles?.length === 0 ? (
        <BTBox
          display="flex"
          alignItems="center"
          justifyContent="center"
          margin={"auto"}
        >
          <BTTypography
            fontWeight="regular"
            variant="button"
            textTransform={"capitalize"}
            color="text"
            display="flex"
            alignItems="center"
          >
            <CloudUploadIcon />
            &nbsp; Drop files here to upload
          </BTTypography>
        </BTBox>
      ) : (
        <Grid container spacing={2}>
          {processedFiles?.map(({ base64Str, type }, index) => (
            <Grid item xs key={index}>
              <BTBox position={"relative"} display="inline-block">
                <BTBox
                  component={
                    type === "image/png" ||
                    type === "image/jpg" ||
                    type === "image/jpeg"
                      ? "img"
                      : ""
                  }
                  src={
                    type === "image/png" ||
                    type === "image/jpg" ||
                    type === "image/jpeg"
                      ? base64Str
                      : ""
                  }
                  bgColor={"dark"}
                  variant={"contained"}
                  coloredShadow={"dark"}
                  shadow={"xxl"}
                  color={"white"}
                  borderRadius={"lg"}
                  height="150px"
                  width="150px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                ></BTBox>
                <IconButton
                  onClick={(e) => {
                    e.stopPropagation();
                    setFiles(files?.filter((item, i) => index !== i));
                    setProcessedFiles(
                      processedFiles?.filter((item, i) => index !== i)
                    );
                  }}
                  sx={{ position: "absolute", right: "-18px", top: "-18px" }}
                >
                  <Cancel />
                </IconButton>
              </BTBox>
            </Grid>
          ))}
        </Grid>
      )}
    </BTDropzoneRoot>
  );
};
export default BTDropzone;
