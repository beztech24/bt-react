import { styled } from "@mui/material/styles";

export default styled("span")(({ theme }) => {
  const { palette, typography, functions } = theme;

  const { white } = palette;
  const { size } = typography;
  const { pxToRem } = functions;

  return {
    color: white.main,
    fontSize: size.xs,
    padding: `${pxToRem(2)} ${pxToRem(8)} ${pxToRem(0)}`,
    cursor: "pointer",
  };
});
