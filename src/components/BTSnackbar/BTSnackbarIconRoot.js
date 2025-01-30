import Icon from "@mui/material/Icon";
import { styled } from "@mui/material/styles";

export default styled("span")(({ theme, ownerState }) => {
  const { palette, functions, typography } = theme;
  const { color, bgWhite } = ownerState;

  const { gradients } = palette;
  const { pxToRem, linearGradient } = functions;
  const { size } = typography;

  // backgroundImage value
  let backgroundImageValue;

  if (bgWhite) {
    backgroundImageValue = gradients[color]
      ? linearGradient(gradients[color].main, gradients[color].state)
      : linearGradient(gradients.info.main, gradients.info.state);
  } else if (color === "light") {
    backgroundImageValue = linearGradient(
      gradients.dark.main,
      gradients.dark.state
    );
  }

  return {
    marginRight: pxToRem(8),
    color: backgroundImageValue,
    fontSize: size.lg,
    transform: `translateY(${pxToRem(-2)})`,
  };
});
