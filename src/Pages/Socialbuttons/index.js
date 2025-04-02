import DashboardLayout from "../../Layouts/Layoutcontainers";
import { Grid2 as Grid } from "@mui/material";
import BTSocialButton from "../../components/BTSocialButton";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Instagram } from "@mui/icons-material";
const Socialbuttons = () => {
  return (
    <DashboardLayout>
      <Grid container spacing={1}>
        <Grid item xs>
          <BTSocialButton color="twitter" iconOnly variant={"contained"}>
            <XIcon />
          </BTSocialButton>
        </Grid>
        <Grid item xs>
          <BTSocialButton color="instagram" iconOnly variant={"contained"}>
            <Instagram />
          </BTSocialButton>
        </Grid>
        <Grid item xs>
          <BTSocialButton color="github" iconOnly variant={"contained"}>
            <GitHubIcon />
          </BTSocialButton>
        </Grid>
        <Grid item xs>
          <BTSocialButton color="linkedin" iconOnly variant={"contained"}>
            <LinkedInIcon />
          </BTSocialButton>
        </Grid>
        <Grid item xs>
          <BTSocialButton
            color="linkedin"
            iconOnly
            variant={"contained"}
            circular={true}
          >
            <LinkedInIcon />
          </BTSocialButton>
        </Grid>
        <Grid item xs>
          <BTSocialButton
            color="linkedin"
            iconOnly
            variant={"contained"}
            circular={true}
            disabled
            size="small"
          >
            <LinkedInIcon />
          </BTSocialButton>
        </Grid>
        <Grid item xs>
          <BTSocialButton
            color="linkedin"
            iconOnly
            variant={"contained"}
            circular={true}
            disabled
            size="large"
          >
            <LinkedInIcon />
          </BTSocialButton>
        </Grid>
        <Grid item xs>
          <BTSocialButton color="linkedin" iconOnly variant={"outlined"}>
            <LinkedInIcon />
          </BTSocialButton>
        </Grid>
        <Grid item xs>
          <BTSocialButton
            color="instagram"
            iconOnly
            variant={"outlined"}
            disabled
          >
            <Instagram />
          </BTSocialButton>
        </Grid>
        <Grid item xs>
          <BTSocialButton color="github" iconOnly variant={"outlined"}>
            <GitHubIcon />
          </BTSocialButton>
        </Grid>
        <Grid item xs>
          <BTSocialButton
            color="twitter"
            iconOnly
            variant={"outlined"}
            disabled
          >
            <XIcon />
          </BTSocialButton>
        </Grid>
        <Grid item xs>
          <BTSocialButton
            color="twitter"
            iconOnly
            variant={"outlined"}
            circular
          >
            <XIcon />
          </BTSocialButton>
        </Grid>
      </Grid>
    </DashboardLayout>
  );
};
export default Socialbuttons;
