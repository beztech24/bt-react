// import logo from "./logo.svg";
import { useState } from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router";
import { theme_routes } from "./routes";
import theme from "./assets/theme/index";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import DashboardLayout from "./Layouts/Layoutcontainers";
import Sidenav from "./Layouts/Sidenav";
import { useBTUIController, setSideNavWidth } from "./context";

function App() {
  const [state, dispatch] = useBTUIController();
  const { sideNavWidth } = state;
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
      <Sidenav
        brandName={"bezel tech"}
        onMouseEnter={enterMouse}
        onMouseLeave={leaveMouse}
      />
      <Routes>
        {getRoutes(theme_routes)}
        <Route
          path="*"
          element={
            false ? <Navigate to="/auth/login" /> : <Navigate to="/buttons" />
          }
        />
      </Routes>
      {/* <DashboardLayout /> */}
    </ThemeProvider>
  );
}

export default App;
