import BTTypographyRoot from "./BTTypographyRoot";
const BTTypography = ({
  color,
  fontWeight,
  textTransform,
  verticalAlign,
  textAlign,
  textGradient,
  opacity,
  children,
  ...rest
}) => {
  return (
    <BTTypographyRoot
      ownerState={{
        color,
        textTransform,
        verticalAlign,
        textAlign,
        fontWeight,
        opacity,
        textGradient,
      }}
      {...rest}
    >
      {children}
    </BTTypographyRoot>
  );
};
// BTTypography.propTypes = {
//   color: PropTypes.oneOf([
//     "inherit",
//     "primary",
//     "secondary",
//     "info",
//     "success",
//     "warning",
//     "error",
//     "light",
//     "dark",
//     "text",
//     "white",
//   ]),
//   fontWeight: PropTypes.oneOf([false, "light", "regular", "medium", "bold"]),
//   textTransform: PropTypes.oneOf([
//     "none",
//     "capitalize",
//     "uppercase",
//     "lowercase",
//   ]),
//   verticalAlign: PropTypes.oneOf([
//     "unset",
//     "baseline",
//     "sub",
//     "super",
//     "text-top",
//     "text-bottom",
//     "middle",
//     "top",
//     "bottom",
//   ]),
//   textGradient: PropTypes.bool,
//   children: PropTypes.node.isRequired,
//   opacity: PropTypes.number,
// };
export default BTTypography;
