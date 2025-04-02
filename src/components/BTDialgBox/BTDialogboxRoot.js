import { Dialog } from "@mui/material";
import { styled } from "@mui/material";
export default styled(Dialog)(({ theme, ownerState }) => {
  const { width } = ownerState;
  return {
    "& .MuiDialog-paper": {
      width,
    },
    "& .MuiDialogTitle-root": {
      padding: "10px 7px",
    },
    "& .MuiDialogContent-root": {
      padding: "10px 7px",
    },
  };
});
