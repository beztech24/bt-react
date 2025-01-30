import { styled } from "@mui/material";
import { buttonClasses } from "@mui/base/Button";
import { Tab as BaseTab, tabClasses } from "@mui/base/Tab";
export default styled(BaseTab)(({ theme }) => {
  const { palette, functions, borders, boxShadows } = theme;
  const { grey } = palette;
  return {
    color: "white",
    cursor: "pointer",
    fontSize: "0.875rem",
    fontWeight: "bold",
    background: "transparent",
    width: "100%",
    lineHeight: 1.5,
    padding: "3px 5px",
    margin: "6px",
    border: "none",
    borderRadius: "5px",
    display: "flex",
    justifyContent: "center",
    "&:hover": {
      background: palette["dark"]?.focus,
    },
    "&:focus": {
      color: "#fff",
      outline: `2px solid ${grey[600]}`,
    },
    [`&.${tabClasses.selected}`]: {
      background: palette["dark"]?.focus,
    },
    [`&.${tabClasses.disabled}`]: {
      opacity: 0.5,
      cursor: "not-allowed",
    },
  };
});
