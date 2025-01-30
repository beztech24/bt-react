import ButtonRoot from "./ButtonRoot";
const BTButton = ({
  color,
  variant,
  size,
  circular,
  iconOnly,
  borderRadius,
  children,
  ...rest
}) => {
  return (
    <ButtonRoot
      {...rest}
      color="primary"
      variant={variant === "gradient" ? "contained" : variant}
      size={size}
      ownerState={{ color, variant, size, circular, iconOnly, borderRadius }}
    >
      {children}
    </ButtonRoot>
  );
};
// BTButton.defaultProps = {
//   size: "medium",
//   variant: "contained",
//   color: "dark",
//   circular: false,
//   iconOnly: false,
//   borderRadius: "sm",
// };
export default BTButton;
