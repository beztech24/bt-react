import DashboardLayout from "../../Layouts/Layoutcontainers";
import BTAlert from "../../components/BTAlert";
import BTSnackbar from "../../components/BTSnackbar";
import { Add as AddIcon } from "@mui/icons-material";
import { Notifications as NotificationsIcon } from "@mui/icons-material";
import BTTypography from "../../components/BTTypography";
import { useState } from "react";
import { Grid2 as Grid } from "@mui/material";
import BTButton from "../../components/BTButton";
import { Card } from "@mui/material";
const Notifications = () => {
  const [successSB, setSuccessSB] = useState(false);
  const [infoSB, setInfoSB] = useState(false);
  const [warningSB, setWarningSB] = useState(false);
  const [errorSB, setErrorSB] = useState(false);
  const alertContent = (name) => (
    <BTTypography variant="body2" color="white">
      A simple {name} alert with{" "}
      <BTTypography
        component="a"
        href="#"
        variant="body2"
        fontWeight="medium"
        color="white"
      >
        an example link
      </BTTypography>
      . Give it a click if you like.
    </BTTypography>
  );
  const openSuccessSB = () => setSuccessSB(true);
  const closeSuccessSB = () => setSuccessSB(false);
  const openInfoSB = () => setInfoSB(true);
  const closeInfoSB = () => setInfoSB(false);
  const openWarningSB = () => setWarningSB(true);
  const closeWarningSB = () => setWarningSB(false);
  const openErrorSB = () => setErrorSB(true);
  const closeErrorSB = () => setErrorSB(false);

  const renderSuccessSB = (
    <BTSnackbar
      color="success"
      icon={<NotificationsIcon color="success" />}
      title="Bezeltech Solution"
      content="Hello, world! This is a notification message"
      dateTime="11 mins ago"
      open={successSB}
      onClose={closeSuccessSB}
      close={closeSuccessSB}
      bgWhite
    />
  );

  const renderInfoSB = (
    <BTSnackbar
      icon={<NotificationsIcon color="white" />}
      title="Bezeltech Solution"
      content="Hello, world! This is a notification message"
      dateTime="11 mins ago"
      open={infoSB}
      onClose={closeInfoSB}
      close={closeInfoSB}
    />
  );

  const renderWarningSB = (
    <BTSnackbar
      color="warning"
      icon={<NotificationsIcon color="warning" />}
      title="Bezeltech Solution"
      content="Hello, world! This is a notification message"
      dateTime="11 mins ago"
      open={warningSB}
      onClose={closeWarningSB}
      close={closeWarningSB}
      bgWhite
    />
  );

  const renderErrorSB = (
    <BTSnackbar
      color="error"
      icon={<NotificationsIcon color="white" />}
      title="Bezeltech Solution"
      content="Hello, world! This is a notification message"
      dateTime="11 mins ago"
      open={errorSB}
      onClose={closeErrorSB}
      close={closeErrorSB}
      // bgWhite
    />
  );

  return (
    <DashboardLayout>
      <BTAlert color="primary" icon={<AddIcon />} dismissible>
        {alertContent("primary")}
      </BTAlert>
      <BTAlert color="secondary" dismissible>
        {alertContent("secondary")}
      </BTAlert>
      <BTAlert color="success" icon={<NotificationsIcon />} dismissible>
        {alertContent("success")}
      </BTAlert>
      <BTAlert color="error" dismissible>
        {alertContent("error")}
      </BTAlert>
      <BTAlert color="warning" dismissible>
        {alertContent("warning")}
      </BTAlert>
      <BTAlert color="info" dismissible>
        {alertContent("info")}
      </BTAlert>
      <BTAlert color="light" dismissible>
        {alertContent("light")}
      </BTAlert>
      <BTAlert color="dark" dismissible>
        {alertContent("dark")}
      </BTAlert>
      <Card>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} lg={3}>
            <BTButton
              variant="gradient"
              color="success"
              onClick={openSuccessSB}
              fullWidth
            >
              success notification
            </BTButton>
            {renderSuccessSB}
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <BTButton
              variant="gradient"
              color="info"
              onClick={openInfoSB}
              fullWidth
            >
              info notification
            </BTButton>
            {renderInfoSB}
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <BTButton
              variant="gradient"
              color="warning"
              onClick={openWarningSB}
              fullWidth
            >
              warning notification
            </BTButton>
            {renderWarningSB}
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <BTButton
              variant="gradient"
              color="error"
              onClick={openErrorSB}
              fullWidth
            >
              error notification
            </BTButton>
            {renderErrorSB}
          </Grid>
        </Grid>
      </Card>
    </DashboardLayout>
  );
};
export default Notifications;
