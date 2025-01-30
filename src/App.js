// import logo from "./logo.svg";
import "./App.css";
import BTButton from "./components/BTButton";
import theme from "./assets/theme/index";
import { ThemeProvider } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
// import ReportProblemIcon from "@mui/icons-material/ReportProblem";
// import Wifi from "@mui/icons-material/SignalWifiStatusbarConnectedNoInternet4";
// import WarningAmberIcon from "@mui/icons-material/WarningAmber";
// import SignalIssues from "@mui/icons-material/SignalCellularConnectedNoInternet0Bar";
import { Favorite } from "@mui/icons-material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Instagram } from "@mui/icons-material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import NotificationsIcon from "@mui/icons-material/Notifications";
import BTBox from "./components/BTBox";
import BTInput from "./components/BTInput";
import BTTypography from "./components/BTTypography";
import BTAlert from "./components/BTAlert";
import BTSnackbar from "./components/BTSnackbar";
import BTPagination from "./components/BTPagination";
import BTProgress from "./components/BTProgress";
import BTBadge from "./components/BTBadge";
import BTAvatar from "./components/BTAvatar";
import Grid from "@mui/material/Grid2";
import { Card } from "@mui/material";
import BTSocialButton from "./components/BTSocialButton";
import BTDropzone from "./components/BTDropzone";
import BTCalendar from "./components/BTCalendar";
import BTCarousel from "./components/BTCarousel";
function App() {
  const [successSB, setSuccessSB] = useState(false);
  const [infoSB, setInfoSB] = useState(false);
  const [warningSB, setWarningSB] = useState(false);
  const [errorSB, setErrorSB] = useState(false);
  const [active, setActive] = useState(1);
  const [files, setFiles] = useState([]);
  console.log("files1", files);

  const openSuccessSB = () => setSuccessSB(true);
  const closeSuccessSB = () => setSuccessSB(false);
  const openInfoSB = () => setInfoSB(true);
  const closeInfoSB = () => setInfoSB(false);
  const openWarningSB = () => setWarningSB(true);
  const closeWarningSB = () => setWarningSB(false);
  const openErrorSB = () => setErrorSB(true);
  const closeErrorSB = () => setErrorSB(false);
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
    <ThemeProvider theme={theme}>
      <BTBox>
        <BTBox padding={5} bgColor={"light"} variant="gradient">
          <BTTypography textTransform={"capitalize"} variant="h5">
            contained Buttons
          </BTTypography>
          <BTButton
            variant="contained"
            color="info"
            type="submit"
            size={"small"}
            // disabled={true}
            borderRadius={"lg"}
          >
            info
          </BTButton>
          <BTButton
            variant="contained"
            color="primary"
            type="submit"
            size={"small"}
            borderRadius={"xs"}
            // disabled={true}
          >
            primary
          </BTButton>
          <BTButton
            variant="contained"
            color="secondary"
            type="submit"
            size={"small"}
            borderRadius={"sm"}
            // disabled={true}
          >
            secondary
          </BTButton>
          <BTButton
            variant="contained"
            color="dark"
            type="submit"
            size={"small"}
            borderRadius={"md"}
          >
            dark
          </BTButton>
          <BTButton
            variant="contained"
            color="text"
            type="submit"
            size={"small"}
            borderRadius={"xl"}
          >
            text
          </BTButton>
          <BTButton
            variant="contained"
            color="success"
            type="submit"
            size={"small"}
            borderRadius={"xxl"}
          >
            success
          </BTButton>
          <BTButton
            variant="contained"
            color="warning"
            type="submit"
            size={"small"}
            borderRadius={"section"}
          >
            warning
          </BTButton>
          <BTButton
            variant="contained"
            color="error"
            type="submit"
            size={"small"}
            borderRadius={"xl"}
          >
            error
          </BTButton>
          <BTButton
            variant="contained"
            color="ligth"
            type="submit"
            size={"small"}
            borderRadius={"xl"}
            // disabled={true}
          >
            ligth
          </BTButton>
          <BTButton borderRadius={"50px"} variant={"contained"} color={"dark"}>
            borderRadius 50px
          </BTButton>
        </BTBox>
        <BTBox
          padding={5}
          bgColor={"white"}
          width={"80%"}
          variant="contained"
          mt={2}
        >
          <BTTypography textTransform={"capitalize"} variant="h5">
            outlined buttons
          </BTTypography>
          <BTButton
            variant="outlined"
            color="info"
            type="submit"
            size={"small"}
            // disabled={true}
            borderRadius={"lg"}
          >
            info
          </BTButton>
          <BTButton
            variant="outlined"
            color="primary"
            type="submit"
            size={"small"}
            // disabled={true}
            borderRadius={"xs"}
          >
            primary
          </BTButton>
          <BTButton
            variant="outlined"
            color="secondary"
            type="submit"
            size={"small"}
            borderRadius={"sm"}
            // disabled={true}
          >
            secondary
          </BTButton>
          <BTButton
            variant="outlined"
            color="dark"
            type="submit"
            size={"small"}
            borderRadius={"md"}
          >
            dark
          </BTButton>
          <BTButton
            variant="outlined"
            color="text"
            type="submit"
            size={"small"}
            borderRadius={"xl"}
          >
            text
          </BTButton>
          <BTButton
            variant="outlined"
            color="success"
            type="submit"
            size={"small"}
            borderRadius={"xxl"}
          >
            success
          </BTButton>
          <BTButton
            variant="outlined"
            color="warning"
            type="submit"
            size={"small"}
            borderRadius={"xl"}
          >
            warning
          </BTButton>
          <BTButton
            variant="outlined"
            color="error"
            type="submit"
            size={"small"}
            borderRadius={"xl"}
          >
            error
          </BTButton>
          <BTButton
            variant="outlined"
            color="light"
            type="submit"
            size={"small"}
            borderRadius={"xl"}
            // disabled={true}
          >
            ligth
          </BTButton>
        </BTBox>
        <BTBox padding={5} bgColor={"light"} variant="gradient">
          <BTTypography
            textTransform={"capitalize"}
            textGradient={true}
            variant="h5"
          >
            variant gradient
          </BTTypography>
          <BTButton
            variant="gradient"
            color="info"
            type="submit"
            size={"small"}
            // disabled={true}
            borderRadius={"lg"}
          >
            info
          </BTButton>
          <BTButton
            variant="gradient"
            color="primary"
            type="submit"
            size={"small"}
            // disabled={true}
            borderRadius={"sm"}
          >
            primary
          </BTButton>
          <BTButton
            variant="gradient"
            color="secondary"
            type="submit"
            size={"small"}
            // disabled={true}
            borderRadius={"sm"}
          >
            secondary
          </BTButton>
          <BTButton
            variant="gradient"
            color="dark"
            type="submit"
            size={"small"}
            // disabled={true}
            borderRadius={"sm"}
          >
            dark
          </BTButton>
          <BTButton
            variant="gradient"
            color="text"
            type="submit"
            size={"small"}
            // disabled={true}
            borderRadius={"sm"}
          >
            text
          </BTButton>
          <BTButton
            variant="gradient"
            color="success"
            type="submit"
            size={"small"}
            // disabled={true}
            borderRadius={"sm"}
          >
            success
          </BTButton>
          <BTButton
            variant="gradient"
            color="error"
            type="submit"
            size={"small"}
            // disabled={true}
            borderRadius={"sm"}
          >
            error
          </BTButton>
          <BTButton
            variant="gradient"
            color="light"
            type="submit"
            size={"small"}
            // disabled={true}
            borderRadius={"sm"}
          >
            light
          </BTButton>
          <BTButton
            variant="gradient"
            color="info"
            type="submit"
            size={"small"}
            circular={true}
          >
            circular true
          </BTButton>
          <BTButton
            variant="gradient"
            color="info"
            type="submit"
            circular={true}
            iconOnly={true}
          >
            <AddIcon />
          </BTButton>
        </BTBox>
        <BTBox padding={5}>
          <BTTypography textTransform={"capitalize"} variant="h5">
            BTBox
          </BTTypography>
          <BTBox display="flex" justifyContent={"space-between"}>
            <BTBox
              bgColor={"dark"}
              variant={"contained"}
              coloredShadow={"dark"}
              shadow={"xxl"}
              color={"white"}
              borderRadius={"lg"}
              height="200px"
              width="200px"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              bgColor={"dark"}
              <br />
              variant={"contained"}
              <br />
              coloredShadow={"primary"}
              <br />
              shadow={"xxl"}
              <br />
              color={"white"}
              <br />
              borderRadius={"lg"}
            </BTBox>
            <BTBox
              bgColor={"dark"}
              variant={"contained"}
              coloredShadow={"error"}
              opacity={0.1}
              shadow={"lg"}
              color={"white"}
              borderRadius={"lg"}
              height="200px"
              width="200px"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              bgColor={"dark"}
              <br />
              variant={"contained"}
              <br />
              coloredShadow={"error"}
              <br />
              opacity={0.1}
              <br />
              shadow={"lg"}
              <br />
              color={"white"}
              <br />
              borderRadius={"lg"}
            </BTBox>
            <BTBox
              bgColor={"success"}
              variant={"gradient"}
              coloredShadow={"error"}
              opacity={2.0}
              shadow={"lg"}
              color={"white"}
              borderRadius={"xxl"}
              height="200px"
              width="200px"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              bgColor={"success"}
              <br />
              variant={"gradient"}
              <br />
              coloredShadow={"error"}
              <br />
              opacity={2.0}
              <br />
              shadow={"lg"}
              <br />
              color={"white"}
              <br />
              borderRadius={"xxl"}
              <br />
            </BTBox>
            <BTBox
              bgColor={"light"}
              variant={"gradient"}
              coloredShadow={"error"}
              opacity={2.0}
              shadow={"lg"}
              borderRadius={"sm"}
              height="200px"
              width="200px"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              bgColor={"light"}
              <br />
              variant={"gradient"}
              <br />
              coloredShadow={"error"}
              <br />
              opacity={2.0}
              <br />
              shadow={"lg"}
              <br />
              borderRadius={"sm"}
              <br />
            </BTBox>
            <BTBox
              bgColor={"light"}
              variant={"gradient"}
              coloredShadow={"error"}
              shadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}
              borderRadius={"10%"}
              height="200px"
              width="200px"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              bgColor={"light"}
              <br />
              variant={"gradient"}
              <br />
              coloredShadow={"error"}
              <br />
              shadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}
              <br />
              borderRadius={"10%"}
              <br />
            </BTBox>
          </BTBox>
        </BTBox>
        <BTBox padding={6} bgColor={"light"}>
          <BTTypography textTransform={"capitalize"} variant="h5">
            BTInput
          </BTTypography>
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
              <BTInput
                label="error"
                error={true}
                size="small"
                variant="standard"
              />
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
        </BTBox>
        <BTBox
          padding={5}
          bgColor={"light"}
          variant="gradient"
          display={"flex"}
          flexDirection={"column"}
        >
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
        </BTBox>
        <BTBox mt={6} mb={3}>
          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={12} lg={8}>
              <Card>
                <BTBox p={2}>
                  <BTTypography variant="h5">Alerts</BTTypography>
                </BTBox>
                <BTBox pt={2} px={2}>
                  <BTAlert color="primary" icon={<AddIcon />} dismissible>
                    {alertContent("primary")}
                  </BTAlert>
                  <BTAlert color="secondary" dismissible>
                    {alertContent("secondary")}
                  </BTAlert>
                  <BTAlert
                    color="success"
                    icon={<NotificationsIcon />}
                    dismissible
                  >
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
                </BTBox>
              </Card>
            </Grid>

            <Grid item xs={12} lg={8}>
              <Card>
                <BTBox p={2} lineHeight={0}>
                  <BTTypography variant="h5">Notifications</BTTypography>
                  <BTTypography
                    variant="button"
                    color="text"
                    fontWeight="regular"
                    textTransform={"capitalize"}
                  >
                    Notifications on this page use Toasts from Bootstrap. Read
                    more details here.
                  </BTTypography>
                </BTBox>
                <BTBox p={2}>
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
                </BTBox>
              </Card>
            </Grid>
          </Grid>
        </BTBox>
        <BTBox
          padding={5}
          variant="gradient"
          display={"flex"}
          flexDirection={"column"}
        >
          <BTPagination
            color={"dark"}
            variant={"gradient"}
            postion={"start"}
            size="small"
          >
            <BTPagination item>
              <ArrowBackIosIcon />
            </BTPagination>
            <BTPagination item active>
              1
            </BTPagination>
            <BTPagination item>2</BTPagination>
            <BTPagination item>3</BTPagination>
            <BTPagination item>
              <ArrowForwardIosIcon />
            </BTPagination>
          </BTPagination>
          <BTPagination color={"info"} variant={"contained"} postion={"center"}>
            <BTPagination item>
              <ArrowBackIosIcon />
            </BTPagination>
            <BTPagination item>1</BTPagination>
            <BTPagination item active>
              2
            </BTPagination>
            <BTPagination item>3</BTPagination>
            <BTPagination item>
              <ArrowForwardIosIcon />
            </BTPagination>
          </BTPagination>
          <BTPagination
            color={"black"}
            variant={"contained"}
            postion={"end"}
            size="large"
          >
            <BTPagination
              item
              onClick={() => {
                active === 1 ? setActive(10) : setActive(active - 1);
              }}
            >
              <ArrowBackIosIcon />
            </BTPagination>
            {Array.from({ length: 10 }, (_, i) => i + 1)?.map((n, index) => (
              <BTPagination
                key={index}
                item
                onClick={() => setActive(index + 1)}
                active={active === index + 1}
              >
                {n}
              </BTPagination>
            ))}
            <BTPagination
              item
              onClick={() => {
                active === 10 ? setActive(1) : setActive(active + 1);
              }}
            >
              <ArrowForwardIosIcon />
            </BTPagination>
          </BTPagination>
        </BTBox>
        <BTBox padding={6} bgColor={"light"} variant={"gradient"}>
          <BTTypography
            variant="body1"
            fontWeight={"bold"}
            textAlign={"center"}
            textGradient={true}
          >
            Progress bar
          </BTTypography>
          <BTProgress value="50" variant="contained" label={true} />
          <BTProgress
            value="70"
            variant="contained"
            label={true}
            color={"primary"}
          />

          <BTProgress
            value="70"
            variant="contained"
            label={true}
            color={"secondary"}
          />

          <BTProgress
            value="70"
            variant="contained"
            label={true}
            color={"error"}
          />

          <BTProgress
            value="10"
            variant="contained"
            label={true}
            color={"warning"}
          />
          <BTProgress
            value="10"
            label={true}
            color={"info"}
            variant={"gradient"}
          />
        </BTBox>
        <BTBox padding={5} bgColor={"dark"}>
          <BTTypography color={"light"}>BTBadge</BTTypography>
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
        </BTBox>
        <BTBox padding={5}>
          <BTTypography>BTAvatar</BTTypography>
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
        </BTBox>
        <BTBox padding={6}>
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
        </BTBox>
        <BTBox padding={6}>
          <BTTypography>BTDropzone</BTTypography>
          <BTDropzone files={files} setFiles={setFiles} />
        </BTBox>
        <BTBox mt={2}>
          <BTCalendar />
        </BTBox>
        <BTBox mt={2} p={6}>
          <BTCarousel width={500} height={500} autoPlay={true} />
        </BTBox>
      </BTBox>
    </ThemeProvider>
  );
}

export default App;
