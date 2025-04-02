import DashboardLayout from "../../Layouts/Layoutcontainers";
import { Grid2 as Grid } from "@mui/material";
import BTBadge from "../../components/BTBadge";
import { Notifications as NotificationsIcon } from "@mui/icons-material";
const Badges = () => {
  return (
    <DashboardLayout>
      <Grid container spacing={1}>
        <Grid item xs>
          <BTBadge badgeContent="Badge" size="xs" container />
        </Grid>
        <Grid item xs>
          <BTBadge badgeContent="Badge" size="sm" container />
        </Grid>
        <Grid item xs>
          <BTBadge badgeContent="Badge" size="md" container />
        </Grid>
        <Grid item xs>
          <BTBadge badgeContent="Badge" size="lg" container />
        </Grid>
        <Grid item xs>
          <BTBadge
            badgeContent="Badge"
            size="lg"
            color="dark"
            container
            variant={"contained"}
          />
        </Grid>
        <Grid item xs>
          <BTBadge
            badgeContent="Badge"
            size="lg"
            variant={"gradient"}
            color="dark"
            container
          />
        </Grid>
        <Grid item xs>
          <BTBadge
            badgeContent="Badge"
            size="lg"
            variant={"gradient"}
            color="dark"
            circular={true}
            container
          />
        </Grid>
        <Grid item xs>
          <BTBadge
            badgeContent="Badge"
            size="lg"
            variant={"gradient"}
            color="dark"
            circular={true}
          />
        </Grid>
        <Grid item xs>
          <BTBadge
            badgeContent="Badge"
            size="sm"
            variant={"gradient"}
            color="info"
            container
          />
        </Grid>
        <Grid item xs>
          <BTBadge
            badgeContent={<NotificationsIcon />}
            size="lg"
            variant={"contained"}
            color="info"
            indicator={true}
            container
          />
        </Grid>
      </Grid>
    </DashboardLayout>
  );
};
export default Badges;
