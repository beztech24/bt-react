import { styled } from "@mui/system";
import { TabsList as BaseTabsList } from "@mui/base/TabsList";
export default styled(BaseTabsList)(({ theme, ownerState }) => {
  const { palette, functions, borders, boxShadows } = theme;
  const { color, width } = ownerState;

  return {
    minWidth: width,
    background: palette[color]?.main,
    borderRadius: "5px",
    marginBottom: "16px",
    display: "flex",
    padding: 0,
    alignItems: "center",
    placeContent: "space-between center",
    boxShadow: `0 4px 6px ${
      theme.palette.mode === "dark" ? "rgba(0,0,0, 0.4)" : "rgba(0,0,0, 0.2)"
    };`,
  };
});
