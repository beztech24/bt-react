import { Divider, styled } from "@mui/material";
export default styled(Divider)(() => {
  return {
    flexShrink: 0,
    borderTop: "0px solid rgba(0, 0, 0, 0.12)",
    borderRight: "0px solid rgba(0, 0, 0, 0.12)",
    borderBottom: "none",
    borderLeft: "0px solid rgba(0, 0, 0, 0.12)",
    backgroundColor: "transparent",
    height: "0.0625rem",
    margin: "0.5rem 0px",
    opacity: 0.25,
    backgroundImage:
      "linear-gradient(to right, rgba(23, 23, 23, 0), rgba(23, 23, 23, 0.4), rgba(23, 23, 23, 0)) !important",
  };
});
