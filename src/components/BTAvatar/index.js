import BTAvatarRoot from "./BTAvatarRoot";
const BTAvatar = ({ bgColor, size, shadow, ...rest }) => {
  return <BTAvatarRoot ownerState={{ shadow, bgColor, size }} {...rest} />;
};
export default BTAvatar;

// Typechecking props for the MDAvatar
// BTAvatar.propTypes = {
//   bgColor: PropTypes.oneOf([
//     "transparent",
//     "primary",
//     "secondary",
//     "info",
//     "success",
//     "warning",
//     "error",
//     "light",
//     "dark",
//   ]),
//   size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", "xxl"]),
//   shadow: PropTypes.oneOf([
//     "none",
//     "xs",
//     "sm",
//     "md",
//     "lg",
//     "xl",
//     "xxl",
//     "inset",
//   ]),
// };
