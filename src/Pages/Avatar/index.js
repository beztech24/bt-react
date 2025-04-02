import DashboardLayout from "../../Layouts/Layoutcontainers";
import { Grid2 as Grid } from "@mui/material";
import BTAvatar from "../../components/BTAvatar";
import { Favorite } from "@mui/icons-material";
import { Instagram } from "@mui/icons-material";
const Avatar = () => {
  return (
    <DashboardLayout>
      <Grid container spacing={1}>
        <Grid item xs>
          <BTAvatar
            src="https://bit.ly/31BDLda"
            alt="Avatar"
            size="xs"
            shadow={"xxl"}
          />
        </Grid>
        <Grid item xs>
          <BTAvatar
            src="https://bit.ly/31BDLda"
            alt="Avatar"
            size="sm"
            shadow={"xs"}
          />
        </Grid>
        <Grid item xs>
          <BTAvatar
            src="https://bit.ly/31BDLda"
            alt="Avatar"
            size="md"
            shadow={"xs"}
          />
        </Grid>
        <Grid item xs>
          <BTAvatar
            src="https://bit.ly/31BDLda"
            alt="Avatar"
            size="lg"
            shadow={"lg"}
          />
        </Grid>
        <Grid item xs>
          <BTAvatar
            src="https://bit.ly/31BDLda"
            alt="Avatar"
            size="xl"
            shadow={"md"}
          />
        </Grid>
        <Grid item xs>
          <BTAvatar size="xxl" shadow={"inset"} />
        </Grid>
        <Grid item xs>
          <BTAvatar bgColor={"green"} size="xxl" shadow={"inset"} />
        </Grid>
        <Grid item xs>
          <BTAvatar bgColor="info" size="xxl">
            <Favorite sx={{ fontSize: 40 }} />
          </BTAvatar>
        </Grid>
      </Grid>
    </DashboardLayout>
  );
};
export default Avatar;
