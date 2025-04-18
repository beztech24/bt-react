import {
  Dialog,
  DialogTitle,
  IconButton,
  DialogActions,
  DialogContent,
  CircularProgress,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import BTBox from "../BTBox";
import BTButton from "../BTButton";
import BTDialogboxRoot from "./BTDialogboxRoot";
function BTDialogBox({ children, close, title, width, buttons = [], ...rest }) {
  return (
    <BTDialogboxRoot {...rest} onClose={close} ownerState={{ width }}>
      <DialogTitle sx={{ m: 0, p: 2 }}>{title}</DialogTitle>
      <IconButton
        aria-label="close"
        onClick={close}
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <Close />
      </IconButton>
      <BTBox
        component={"form"}
        // onSubmit={handleSubmit}
        // noValidate
        // autoComplete="off"
      >
        <DialogContent dividers>{children}</DialogContent>
        <DialogActions>
          {buttons.map((button, index) => (
            <BTButton
              key={index}
              size={button.size || "small"}
              variant="contained"
              color={button.color || "primary"}
              type={button.type || "button"}
              onClick={
                button.name?.toLowerCase() === "cancel" ? close : button.onClick
              }
              sx={button.sx}
              disabled={button.disabled}
            >
              {button.loading ? button.loadingComponent : button.name}
            </BTButton>
          ))}
        </DialogActions>
      </BTBox>
    </BTDialogboxRoot>
  );
}
export default BTDialogBox;
