import { styled } from "@mui/material/styles";
import BTBox from "../BTBox";
import { Box } from "@mui/material";
export default styled(Box)(({ theme, ownerState }) => {
  const { palette, functions, borders, boxShadows } = theme;
  const { height, width } = ownerState;
  const { white, text, transparent, gradients, grey, socialMediaColors, dark } =
    palette;

  return {
    border: `1px solid ${grey[400]}`,
    maxHeight: height ? height : "200px",
    minHeight: height ? height : "200px",
    background: grey[200],
    margin: "2rem,0",
    display: "flex",
    flexDirection: "column",
    boxSizing: "border-box",
    cursor: "pointer",
    borderRadius: "10px",
    padding: "20px",
    width: width ? width : "100%",
    overflow: "auto",
  };
});
