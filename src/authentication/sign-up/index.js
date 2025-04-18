import { Link } from "react-router";

// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";

// Material Dashboard 2 React components
import BTBox from "../../components/BTBox";
import BTTypography from "../../components/BTTypography";
import BTInput from "../../components/BTInput";
import BTButton from "../../components/BTButton";

// Authentication layout components
import CoverLayout from "../components/CoverLayouts";

// Images
import bgImage from "../../assets/images/sign-up.jpeg";

function Cover() {
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
          <BTTypography variant="h4" fontWeight="medium" color="white">
            Join us today
          </BTTypography>
          <BTTypography
            variant="body2"
            color="white"
            my={1}
            textGradient={true}
          >
            Enter your email and password to register
          </BTTypography>
        </BTBox>
        <BTBox pb={3} px={3}>
          <BTBox component="form" role="form">
            <BTBox mb={1}>
              <BTInput
                type="text"
                label="Username"
                variant="standard"
                fullWidth
              />
            </BTBox>
            <BTBox mb={1}>
              <BTInput
                type="text"
                label="First Name"
                variant="standard"
                fullWidth
              />
            </BTBox>
            <BTBox mb={1}>
              <BTInput
                type="text"
                label="Second Name"
                variant="standard"
                fullWidth
              />
            </BTBox>
            <BTBox mb={1}>
              <BTInput
                type="text"
                label="Last Name"
                variant="standard"
                fullWidth
              />
            </BTBox>
            <BTBox mb={1}>
              <BTInput
                type="email"
                label="Email"
                variant="standard"
                fullWidth
              />
            </BTBox>
            <BTBox mb={1}>
              <BTInput
                type="password"
                label="Password"
                variant="standard"
                fullWidth
              />
            </BTBox>

            <BTBox mb={1}>
              <BTInput
                type="password"
                label="Confirm Password"
                variant="standard"
                fullWidth
              />
            </BTBox>
            {/* <BTBox display="flex" alignItems="center" ml={-1}>
              <Checkbox />
              <BTTypography
                variant="button"
                fontWeight="regular"
                color="text"
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                &nbsp;&nbsp;I agree the&nbsp;
              </BTTypography>
              <BTTypography
                component="a"
                href="#"
                variant="button"
                fontWeight="bold"
                color="black"
                textGradient
              >
                Terms and Conditions
              </BTTypography>
            </BTBox> */}
            <BTBox mt={4} mb={1}>
              <BTButton variant="gradient" color="dark" fullWidth>
                sign in
              </BTButton>
            </BTBox>
            <BTBox mt={3} mb={1} textAlign="center">
              <BTTypography variant="body2" color="text">
                Already have an account?{" "}
                <BTTypography
                  component={Link}
                  to="/sign-in"
                  variant="button"
                  color="black"
                  fontWeight="medium"
                  textGradient
                >
                  Sign In
                </BTTypography>
              </BTTypography>
            </BTBox>
          </BTBox>
        </BTBox>
      </Card>
    </CoverLayout>
  );
}

export default Cover;
