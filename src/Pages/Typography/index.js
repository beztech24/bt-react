import DashboardLayout from "../../Layouts/Layoutcontainers";
import BTTypography from "../../components/BTTypography";
const Typography = () => {
  return (
    <DashboardLayout>
      <BTTypography variant="h1" color="dark">
        Heading 1
      </BTTypography>
      <BTTypography variant="h2" color="primary">
        Heading 2
      </BTTypography>
      <BTTypography variant="h3" color="secondary">
        Heading 3
      </BTTypography>
      <BTTypography variant="h4" color="info">
        Heading 4
      </BTTypography>
      <BTTypography variant="h5" color="inherit">
        Heading 5
      </BTTypography>
      <BTTypography variant="h6" color="success">
        Heading 6
      </BTTypography>
      <BTTypography variant="subtitle1" color="warning">
        Subtitle 1
      </BTTypography>
      <BTTypography variant="subtitle2" color="error">
        Subtitle 2
      </BTTypography>
      <BTTypography variant="body1" color="light">
        Body 1
      </BTTypography>
      <BTTypography variant="body2" color="text">
        Body 2
      </BTTypography>
      <BTTypography variant="button" color="white">
        Button
      </BTTypography>
      <BTTypography variant="caption" color="">
        Caption
      </BTTypography>
      <BTTypography variant="overline" color="">
        Overline
      </BTTypography>
      <BTTypography variant="inherit" color="">
        Inherit
      </BTTypography>
    </DashboardLayout>
  );
};
export default Typography;
