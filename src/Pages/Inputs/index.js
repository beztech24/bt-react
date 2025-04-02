import DashboardLayout from "../../Layouts/Layoutcontainers";
import BTBox from "../../components/BTBox";
import { Grid2 as Grid } from "@mui/material";
import BTInput from "../../components/BTInput";
const Inputs = () => {
  return (
    <DashboardLayout>
      <Grid container spacing={1}>
        <Grid item xs>
          <BTInput label="Name" />
        </Grid>
        <Grid item xs>
          <BTInput label="Name" size="small" />
        </Grid>
        <Grid item xs>
          <BTInput label="Name" variant="standard" />
        </Grid>
        <Grid item xs>
          <BTInput label="error" error={true} />
        </Grid>
        <Grid item xs>
          <BTInput label="success" success={true} />
        </Grid>
        <Grid item xs>
          <BTInput label="error" error={true} size="small" />
        </Grid>
        <Grid item xs>
          <BTInput label="success" success={true} size="small" />
        </Grid>
        <Grid item xs>
          <BTInput label="error" error={true} size="small" variant="standard" />
        </Grid>
        <Grid item xs>
          <BTInput
            label="success"
            success={true}
            size="small"
            type="text"
            variant="standard"
          />
        </Grid>
      </Grid>
      <Grid container spacing={1} mt={2}>
        <Grid item xs>
          <BTInput type="number" defaultValue={0} label="number" />
        </Grid>
        <Grid item xs>
          <BTInput type="text" defaultValue={"Bezeltech"} label="text" />
        </Grid>
        <Grid item xs>
          <BTInput type="date" label="date" defaultValue={"2024-12-12"} />
        </Grid>
        <Grid item xs>
          <BTInput
            type="time"
            label="time"
            defaultValue={"01:12:01"}
            disabled={true}
          />
        </Grid>
        <Grid item xs>
          <BTInput
            type="month"
            label="Month"
            defaultValue={"2024-06"}
            disabled={true}
          />
        </Grid>
        <Grid item xs>
          <BTInput
            type="password"
            label="Password"
            size="small"
            defaultValue={"1234567890"}
          />
        </Grid>
        <Grid item xs>
          <BTInput
            type="password"
            label="Password"
            defaultValue={"1234567890"}
            variant="standard"
          />
        </Grid>
        <Grid item xs>
          <BTInput
            type="email"
            label="email"
            defaultValue={"example@gmail.com"}
          />
        </Grid>

        <Grid item xs>
          <BTInput
            type="datetime-local"
            label="Date time"
            value="2018-11-23T10:30:00"
          />
        </Grid>

        <Grid item xs>
          <BTInput type="week" label="Week" value="2018-W23" />
        </Grid>
        <Grid item xs>
          <BTInput type="time" label="Time" value="10:30:00" />
        </Grid>
        <Grid item xs>
          <BTInput
            type="color"
            label="Color"
            size="small"
            value="#17c1e8"
            fullWidth
          />
        </Grid>
        <Grid item xs>
          <BTInput label="Type here..." multiline rows={5} />
        </Grid>
      </Grid>
    </DashboardLayout>
  );
};
export default Inputs;
