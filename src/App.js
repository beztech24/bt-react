// import logo from "./logo.svg";
import { useState } from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router";
import { theme_routes } from "./routes";
import theme from "./assets/theme/index";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Sidenav from "./Layouts/Sidenav";
import BTBox from "./components/BTBox";
import { useBTUIController, setSideNavWidth } from "./context";
import DashboardNavbar from "./Layouts/Dashboardnavbar";
function App() {
  const [state, dispatch] = useBTUIController();
  const { sideNavWidth, layout, miniSidenav } = state;
  const [onMouseEnter, setOnMouseEnter] = useState(false);
  const enterMouse = () => {
    if (sideNavWidth <= 115 && !onMouseEnter) {
      setSideNavWidth(dispatch, 240);
      setOnMouseEnter(true);
    }
  };
  const leaveMouse = () => {
    if (onMouseEnter) {
      setSideNavWidth(dispatch, 115);
      setOnMouseEnter(false);
    }
  };
  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }
      if (route?.items) {
        return getRoutes(route?.items);
      }
      if (route.route) {
        return (
          <Route
            exact
            path={route.route}
            element={route.component}
            key={route.key}
          />
        );
      }

      return null;
    });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {layout === "dashboard" && (
        <>
          <Sidenav
            brandName={"bezel tech"}
            onMouseEnter={enterMouse}
            onMouseLeave={leaveMouse}
          />
          <BTBox
            sx={({ breakpoints, transitions, functions: { pxToRem } }) => ({
              [breakpoints.up("xl")]: {
                marginLeft: miniSidenav ? pxToRem(95) : pxToRem(sideNavWidth),
                transition: transitions.create(["margin-left"], {
                  easing: transitions.easing.easeInOut,
                  duration: transitions.duration.shorter,
                }),
              },
              [breakpoints.up("lg")]: {
                marginLeft: miniSidenav ? pxToRem(95) : pxToRem(sideNavWidth),
              },
              [breakpoints.up("sm")]: {
                marginLeft: miniSidenav ? pxToRem(0) : pxToRem(sideNavWidth),
              },
            })}
          >
            <DashboardNavbar
              absolute={false}
              light={false}
              isMini={sideNavWidth <= 115}
              sideNavWidth={sideNavWidth}
            />
          </BTBox>
        </>
      )}
      <Routes>
        {getRoutes(theme_routes)}
        <Route
          path="*"
          element={
            false ? (
              <Navigate to="/auth/login" />
            ) : (
              <Navigate to="/components/buttons" />
            )
          }
        />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
