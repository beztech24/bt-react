import BoxRoot from "./BTBoxRoot.js";
const BTBox = ({
  variant,
  bgColor,
  color,
  opacity,
  borderRadius,
  shadow,
  coloredShadow,
  ...rest
}) => {
  return (
    <BoxRoot
      {...rest}
      ownerState={{
        variant,
        bgColor,
        color,
        opacity,
        borderRadius,
        shadow,
        coloredShadow,
      }}
    />
  );
};

export default BTBox;
