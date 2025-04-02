import PropTypes from "prop-types";
import BTBox from "../../components/BTBox";
import DashboardNavbar from "../Dashboardnavbar/index";
import { useBTUIController } from "../../context";
function DashboardLayout({ children }) {
  const [state] = useBTUIController();
  const { miniSidenav, sideNavWidth } = state;

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
