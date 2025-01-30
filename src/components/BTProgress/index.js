import BTTypography from "../BTTypography";
import BTProgressRoot from "./BTProgressRoot";
const BTProgress = ({ variant, color, value, label, ...rest }) => {
  return (
    <>
      {label && (
        <BTTypography variant="button" fontWeight="medium" color="text">
          {value}%
        </BTTypography>
      )}
      <BTProgressRoot
        {...rest}
        variant="determinate"
        value={value}
        ownerState={{ color, value, variant }}
      />
    </>
  );
};
export default BTProgress;
