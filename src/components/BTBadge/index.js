import BTBadgeRoot from "./BTBadgeRoot";
const BTBadge = ({
  color = "info",
  variant = "gradient",
  size = "sm",
  circular = false,
  indicator = false,
  border = false,
  container = false,
  children,
  ...rest
}) => {
  return (
    <BTBadgeRoot
      {...rest}
      ownerState={{
        color,
        variant,
        size,
        circular,
        indicator,
        border,
        container,
        children,
      }}
      color="default"
    >
      {children}
    </BTBadgeRoot>
  );
};
// BTBadge.defaultProps = {
//   color: "info",
//   variant: "gradient",
//   size: "sm",
//   circular: false,
//   indicator: false,
//   border: false,
//   children: false,
//   container: false,
// };
// BTBadge.propTypes = {
//     color: PropTypes.oneOf([
//       "primary",
//       "secondary",
//       "info",
//       "success",
//       "warning",
//       "error",
//       "light",
//       "dark",
//     ]),
//     variant: PropTypes.oneOf(["gradient", "contained"]),
//     size: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
//     circular: PropTypes.bool,
//     indicator: PropTypes.bool,
//     border: PropTypes.bool,
//     children: PropTypes.node,
//     container: PropTypes.bool,
//   };
export default BTBadge;
