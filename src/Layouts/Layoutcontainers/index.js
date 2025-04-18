import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import BTBox from "../../components/BTBox";
import { useBTUIController, setLayout } from "../../context";
import { useLocation } from "react-router";
function DashboardLayout({ children }) {
  const [state, dispatch] = useBTUIController();
  const { miniSidenav, sideNavWidth } = state;
  const { pathname } = useLocation();

  useEffect(() => {
    setLayout(dispatch, "dashboard");
  }, [pathname]);
  return (
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
      <DashboardNavbar absolute={false} />
      <BTBox p={2}>{children}</BTBox>
    </BTBox>
  );
}

DashboardLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DashboardLayout;
