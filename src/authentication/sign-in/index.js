import { useState } from "react";
import { Link } from "react-router";
// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";

// Material Dashboard 2 React components
import BTBox from "../../components/BTBox";
import BTTypography from "../../components/BTTypography";
import BTInput from "../../components/BTInput";
import BTButton from "../../components/BTButton";

// Authentication layout component

// Images
import bgImage from "../../assets/images/sign-in.jpeg";
import CoverLayout from "../components/CoverLayouts";

function Basic() {
  const [rememberMe, setRememberMe] = useState(false);
  const handleSetRememberMe = () => setRememberMe(!rememberMe);
  return (
    <CoverLayout image={bgImage}>
      <Card sx={{ overflow: "visible", borderRadius: "10px" }}>
        <BTBox
          variant="gradient"
          bgColor="dark"
          borderRadius="lg"
          coloredShadow="info"
          mx={2}
          p={1}
          textAlign="center"
          position="relative"
          bottom={"45px"}
        >
          <BTTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Sign in
          </BTTypography>
          <BTTypography display="block" variant="body2" color="white" my={1}>
            Enter your email and password to Sign in
          </BTTypography>
        </BTBox>
        <BTBox pb={3} px={3}>
          <BTBox component="form" role="form">
            <BTBox mb={2}>
              <BTInput
                type="email"
                label="Email"
                fullWidth
                variant="standard"
              />
            </BTBox>
            <BTBox mb={2}>
              <BTInput
                type="password"
                label="Password"
                fullWidth
                variant="standard"
              />
            </BTBox>
            {/* <BTBox display="flex" alignItems="center" ml={-1}>
              <Switch checked={rememberMe} onChange={handleSetRememberMe} />
              <BTTypography
                variant="button"
                fontWeight="regular"
                color="text"
                onClick={handleSetRememberMe}
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                &nbsp;&nbsp;Remember me
              </BTTypography>
            </BTBox> */}
            <BTBox mt={4} mb={1}>
              <BTButton variant="gradient" color="dark" fullWidth>
                sign in
              </BTButton>
            </BTBox>
            <BTBox mt={3} mb={1} textAlign="center">
              <BTTypography variant="body2" color="text">
                Don&apos;t have an account?{" "}
                <BTTypography
                  component={Link}
                  to="/sign-up"
                  variant="button"
                  color="black"
                  fontWeight="medium"
                  textGradient
                >
                  Sign up
                </BTTypography>
              </BTTypography>
            </BTBox>
          </BTBox>
        </BTBox>
      </Card>
    </CoverLayout>
  );
}

export default Basic;
