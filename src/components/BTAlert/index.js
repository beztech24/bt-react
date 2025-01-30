import { useState } from "react";
import Fade from "@mui/material/Fade";
import BTBox from "../BTBox";
import BTAlertRoot from "./BTAlertRoot";
import BTAlertCloseIcon from "./BTAlertCloseIcon";
import BTAlertSideIcon from "./BTAlertSideIcon";
const BTAlert = ({ color, icon, dismissible, children, ...rest }) => {
  const [alertStatus, setAlertStatus] = useState("mount");

  const handleAlertStatus = () => setAlertStatus("fadeOut");

  // The base template for the alert
  const alertTemplate = (mount = true) => (
    <Fade in={mount} timeout={300}>
      <BTAlertRoot ownerState={{ color }} {...rest}>
        <BTBox
          display="flex"
          alignItems="center"
          color="white"
          justifyContent="center"
        >
          <BTAlertSideIcon>{icon}</BTAlertSideIcon>
          {children}
        </BTBox>
        {dismissible ? (
          <BTAlertCloseIcon onClick={mount ? handleAlertStatus : null}>
            &times;
          </BTAlertCloseIcon>
        ) : null}
      </BTAlertRoot>
    </Fade>
  );

  switch (true) {
    case alertStatus === "mount":
      return alertTemplate();
    case alertStatus === "fadeOut":
      setTimeout(() => setAlertStatus("unmount"), 400);
      return alertTemplate(false);
    default:
      alertTemplate();
      break;
  }

  return null;
};
export default BTAlert;
