import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Divider from "@mui/material/Divider";
import { Fade } from "@mui/material";
import BTBox from "../BTBox";
import BTSnackbarIconRoot from "./BTSnackbarIconRoot";
import BTTypography from "../BTTypography";
const BTSnackbar = ({
  color = "info",
  icon,
  title,
  dateTime,
  content,
  close,
  bgWhite = false,
  ...rest
}) => {
  let titleColor;
  let dateTimeColor;
  let dividerColor;
  if (bgWhite) {
    titleColor = color;
    dateTimeColor = "dark";
    dividerColor = false;
  } else if (color === "light") {
    titleColor = "dark";
    dateTimeColor = "text";
    dividerColor = false;
  } else {
    titleColor = "white";
    dateTimeColor = "white";
    dividerColor = true;
  }
  const Content = (
    <BTBox
      variant={bgWhite ? "contained" : "gradient"}
      bgColor={bgWhite ? "white" : color}
      minWidth="21.875rem"
      maxWidth="100%"
      shadow="md"
      borderRadius="md"
      p={1}
      sx={{
        backgroundColor: ({ palette }) => palette[color] || palette.white.main,
      }}
    >
      <BTBox
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        color="dark"
        p={1.5}
      >
        <BTBox display="flex" alignItems="center" lineHeight={0}>
          <BTSnackbarIconRoot fontSize="small" ownerState={{ color, bgWhite }}>
            {icon}
          </BTSnackbarIconRoot>
          <BTTypography
            variant="button"
            fontWeight="medium"
            color={titleColor}
            textGradient={bgWhite}
          >
            {title}
          </BTTypography>
        </BTBox>
        <BTBox display="flex" alignItems="center" lineHeight={0}>
          <BTTypography variant="caption" color={dateTimeColor}>
            {dateTime}
          </BTTypography>
          <CloseIcon
            sx={{
              color: ({ palette: { dark, white } }) =>
                bgWhite || color === "light" ? dark.main : white.main,
              fontWeight: ({ typography: { fontWeightBold } }) =>
                fontWeightBold,
              cursor: "pointer",
              marginLeft: 2,
              transform: "translateY(-1px)",
            }}
            onClick={close}
          />
        </BTBox>
      </BTBox>
      <Divider sx={{ margin: 0 }} />
      <BTBox
        p={1.5}
        sx={{
          fontSize: ({ typography: { size } }) => size.sm,
          color: ({ palette: { white, text } }) => {
            let colorValue =
              bgWhite || color === "light" ? text.main : white.main;
            // if (darkMode) {
            //   colorValue = color === "light" ? "inherit" : white.main;
            // }
            return colorValue;
          },
        }}
      >
        {content}
      </BTBox>
    </BTBox>
  );

  return (
    <Snackbar
      TransitionComponent={Fade}
      autoHideDuration={1000}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      onClose={close}
      {...rest}
    >
      <div>{Content}</div>
    </Snackbar>
  );
};

export default BTSnackbar;
