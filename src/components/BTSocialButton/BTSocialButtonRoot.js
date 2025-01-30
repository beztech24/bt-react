import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
export default styled(Button)(({ theme, ownerState }) => {
  const { palette, functions, borders, boxShadows } = theme;

  const { color, variant, size, circular, iconOnly } = ownerState;
  const { white, text, transparent, gradients, grey, socialMediaColors, dark } =
    palette;
  const { boxShadow, linearGradient, pxToRem, rgba } = functions;
  const { borderRadius } = borders;

  const containedStyles = () => {
    // background color value
    const backgroundValue = socialMediaColors[color]
      ? socialMediaColors[color]?.main
      : white.main;

    // boxShadow value
    const boxShadowValue = boxShadows["md"];

    // boxShadow value when button is hovered
    const hoveredBoxShadowValue = `${boxShadow(
      [0, 14],
      [26, -12],
      palette["dark"].main,
      0.4
    )}, ${boxShadow([0, 4], [23, 0], palette["dark"].main, 0.15)}, ${boxShadow(
      [0, 8],
      [10, -5],
      palette["dark"].main,
      0.2
    )}`;

    // color value
    let colorValue = white.main;

    // color value when button is focused
    let focusedColorValue = white.main;

    return {
      background: backgroundValue,
      color: colorValue,
      boxShadow: boxShadowValue,

      "&:hover": {
        backgroundColor: backgroundValue,
        color: colorValue,
        boxShadow: hoveredBoxShadowValue,
      },

      "&:focus:not(:hover)": {
        color: colorValue,
        boxShadow: socialMediaColors[color]?.main
          ? boxShadow([0, 0], [0, 3.2], socialMediaColors[color].main, 0.5)
          : boxShadow([0, 0], [0, 3.2], white.main, 0.5),
      },

      "&:disabled": {
        backgroundColor: backgroundValue,
        color: focusedColorValue,
      },
    };
  };
  const outlinedStyles = () => {
    let backgroundValue =
      color === "white" ? rgba(white.main, 0.1) : transparent.main;
    let colorValue = socialMediaColors[color]
      ? socialMediaColors[color]?.dark
      : white.main;

    const boxShadowValue = socialMediaColors[color]
      ? boxShadow([0, 0], [0, 3.2], socialMediaColors[color]?.dark, 0.5)
      : boxShadow([0, 0], [0, 3.2], white.main, 0.5);
    let borderColorValue = socialMediaColors[color]
      ? socialMediaColors[color]?.dark
      : rgba(white.main, 0.75);

    return {
      background: backgroundValue,
      color: colorValue,
      border: `1px solid ${borderColorValue}`,

      "&:hover": {
        background: colorValue,
        borderColor: transparent.main,
        color: transparent.main,
      },

      "&:focus:not(:hover)": {
        background: colorValue,
        boxShadow: boxShadowValue,
        color: transparent.main,
      },

      "&:active:not(:hover)": {
        backgroundColor: colorValue,
        color: white.main,
        opacity: 0.85,
      },

      "&:disabled": {
        color: colorValue,
        borderColor: colorValue,
        background: grey[200],
      },
    };
  };

  const circularStyles = () => ({
    borderRadius: borderRadius.section,
  });
  const iconOnlyStyles = () => {
    // width, height, minWidth and minHeight values
    let sizeValue = pxToRem(38);

    if (size === "small") {
      sizeValue = pxToRem(25.4);
    } else if (size === "large") {
      sizeValue = pxToRem(52);
    }

    // padding value
    let paddingValue = `${pxToRem(11)} ${pxToRem(11)} ${pxToRem(10)}`;

    if (size === "small") {
      paddingValue = pxToRem(4.5);
    } else if (size === "large") {
      paddingValue = pxToRem(16);
    }

    return {
      width: sizeValue,
      minWidth: sizeValue,
      height: sizeValue,
      minHeight: sizeValue,
      padding: paddingValue,

      "& .material-icons": {
        marginTop: 0,
      },

      "&:hover, &:focus, &:active": {
        transform: "none",
      },
    };
  };
  return {
    ...(variant === "contained" && containedStyles()),
    ...(variant === "outlined" && outlinedStyles()),
    ...(circular && circularStyles()),
    ...(iconOnly && iconOnlyStyles()),
  };
});
