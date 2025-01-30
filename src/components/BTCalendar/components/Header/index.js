import BTBox from "../../../BTBox";
import { useState } from "react";
import BTTypography from "../../../BTTypography";
import { Card } from "@mui/material";
import Grid from "@mui/material/Grid2";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import BTButton from "../../../BTButton";
import { Tabs } from "@mui/base/Tabs";

import { buttonClasses } from "@mui/base/Button";
import { Tab as BaseTab, tabClasses } from "@mui/base/Tab";
import TabslistRoot from "./TabslistRoot";
import TabRoot from "./TabRoot";
import BTAvatar from "../../../BTAvatar";
const Header = ({
  children,
  currentMonthYear,
  changeMonth,
  height,
  width,
  tabValue,
  setTabValue,
  setCurrentDate,
}) => {
  const handleSetTabValue = (event, newValue) => setTabValue(newValue);
  return (
    <Card
      sx={{
        position: "relative",
        mt: -8,
        mx: 3,
        py: 2,
        px: 2,
        maxHeight: height,
        maxWidth: width,
      }}
    >
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={12} md={4} lg={4} display={"flex"} alignItems={"center"}>
          <Tabs>
            <TabslistRoot
              ownerState={{ color: "dark", width: "100px" }}
              value={false}
            >
              <TabRoot>
                <ArrowBackIosNewIcon onClick={() => changeMonth(-1)} />
              </TabRoot>
              <TabRoot>
                <ArrowForwardIosIcon onClick={() => changeMonth(1)} />
              </TabRoot>
            </TabslistRoot>
          </Tabs>
          <BTButton
            fullWidth
            onClick={() => setCurrentDate(new Date())}
            sx={{ mb: 2, ml: 2 }}
            color={"dark"}
            variant={"contained"}
          >
            today
          </BTButton>
        </Grid>
        <Grid item xs={12} md={4} lg={4} sx={{ ml: "auto" }}>
          <BTBox height="100%" mt={0.5} lineHeight={1}>
            <BTTypography variant="h5" fontWeight="medium">
              {currentMonthYear}
            </BTTypography>
          </BTBox>
        </Grid>
        <Grid item xs={12} md={4} lg={4} sx={{ ml: "auto" }}>
          <Tabs value={tabValue} onChange={handleSetTabValue}>
            <TabslistRoot ownerState={{ color: "dark", width: "250px" }}>
              <TabRoot value={"month"}>Month</TabRoot>
              <TabRoot value={"week"}>Week</TabRoot>
              <TabRoot value={"day"}>Day</TabRoot>
            </TabslistRoot>
          </Tabs>
        </Grid>
      </Grid>
      {children}
    </Card>
  );
};

export default Header;
