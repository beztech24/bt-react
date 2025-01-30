import BTSocialButtonRoot from "./BTSocialButtonRoot";
const BTSocialButton = ({
  color,
  size,
  circular,
  iconOnly,
  variant,
  children,
  ...rest
}) => {
  return (
    <BTSocialButtonRoot
      {...rest}
      ownerState={{ color, size, circular, iconOnly, variant, children }}
    >
      {children}
    </BTSocialButtonRoot>
  );
};
export default BTSocialButton;
