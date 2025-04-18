import SidenavRoot from "./SidenavRoot";
import { NavLink, useLocation } from "react-router";
import { ArrowForwardIos, ArrowUpward } from "@mui/icons-material";
import BTSocialButton from "../../components/BTSocialButton";
import { ListItem, List, IconButton } from "@mui/material";
import BTBox from "../../components/BTBox";
import BTButton from "../../components/BTButton";
import BTTypography from "../../components/BTTypography";
import BTDivider from "../../components/BTDivider";
import {
  useBTUIController,
  setSideNavWidth,
  setMiniSidenav,
} from "../../context";

import sidenavLogoLabel from "./styles/sidenav";
import SidenavCollapse from "./sidenavCollapse";
import { useEffect, useState } from "react";
import { theme_routes } from "../../routes";
function Sidenav({ color, routes, brandName, ...rest }) {
  const [state, dispatch] = useBTUIController();
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const collapseName = location.pathname.replace("/", "");
  const {
    transparentSidenav,
    whiteSidenav,
    miniSidenav,
    darkMode,
    sideNavWidth,
  } = state;

  const renderRoutes = theme_routes?.map(
    ({ type, name, key, icon, route, subItems, items }) => {
      let returnComponent;
      if (type === "profile") {
        returnComponent = (
          <SidenavCollapse
            key={key}
            name={name}
            icon={icon}
            to={route}
            active={key === collapseName}
            subItems={subItems}
            items={items}
          />
        );
      }
      if (type === "divider") {
        returnComponent = <BTDivider key={key} />;
      }
      if (type === "collapse") {
        returnComponent = (
          <SidenavCollapse
            key={key}
            name={name}
            icon={icon}
            to={route}
            active={key === collapseName}
            subItems={subItems}
            items={items}
          />
        );
      }
      if (type === "text") {
        returnComponent = (
          <ListItem key={key}>
            <BTTypography variant={"button"} fontWeight="bold">
              {name}
            </BTTypography>
          </ListItem>
        );
      }
      return returnComponent;
    }
  );
  useEffect(() => {
    function handleMiniSidenav() {
      setMiniSidenav(dispatch, window.innerWidth < 1000);
    }
    window.addEventListener("resize", handleMiniSidenav);
    handleMiniSidenav();
    return () => window.removeEventListener("resize", handleMiniSidenav);
  }, [dispatch]);
  const handleResize = (e) => {
    e.stopPropagation();
    const newWidth = e.clientX;

    if (newWidth >= 100 && newWidth < 500) {
      setSideNavWidth(dispatch, newWidth);
    }
  };
  const stopResizing = () => {
    window.removeEventListener("mousemove", handleResize);
    window.removeEventListener("mouseup", stopResizing);
  };
  const startResizing = (e) => {
    e.preventDefault();
    window.addEventListener("mousemove", handleResize);
    window.addEventListener("mouseup", stopResizing);
  };

  return (
    <SidenavRoot
      variant="permanent"
      {...rest}
      ownerState={{
        transparentSidenav,
        whiteSidenav,
        miniSidenav,
        darkMode,
        sideNavWidth,
      }}
    >
      <BTBox pt={2} pl={2} textAlign="center">
        <BTBox
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          {sideNavWidth > 95 && (
            <BTBox
              width={!brandName && "100%"}
              sx={(theme) => sidenavLogoLabel(theme, { miniSidenav })}
              to="/"
              component={NavLink}
            >
              <BTTypography
                component="h6"
                variant="button"
                fontWeight="medium"
                color={"black"}
              >
                {brandName}
              </BTTypography>
            </BTBox>
          )}
          <BTBox display="flex" alignItems="end">
            <IconButton
              size="small"
              onClick={() => setMiniSidenav(dispatch, !miniSidenav)}
            >
              <ArrowForwardIos
                fontSize="15px"
                sx={(theme) => ({
                  rotate: miniSidenav ? "0deg" : "180deg",
                  transition: theme.transitions.create(["rotate"], {
                    easing: theme.transitions.easing.easeInOut,
                    duration: theme.transitions.duration.standard,
                  }),
                })}
              />
            </IconButton>
          </BTBox>
        </BTBox>
      </BTBox>
      <BTDivider />

      <List sx={{ height: "810px", overflowY: "auto", overflowX: "hidden" }}>
        {renderRoutes}
      </List>
      <BTBox
        width={"100%"}
        position="absolute"
        bottom={0}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <BTBox
          sx={{
            p: 1,
            bgcolor: "transparent",
            display: "flex",
            flexDirection: "column",
            width: "100%",
            gap: 1,
            transform: open ? "translateY(0)" : "translateY(140%)",
            transition: "transform 0.3s ease-in-out",
          }}
        >
          <BTButton fullWidth size="small">
            profile
          </BTButton>
          <BTButton fullWidth size="small">
            logout
          </BTButton>
        </BTBox>
        <BTSocialButton
          color="twitter"
          iconOnly
          circular
          variant={"contained"}
          onClick={() => setOpen(!open)}
          sx={{ mb: 2 }}
        >
          <ArrowUpward
            sx={(theme) => ({
              rotate: !open ? "0deg" : "180deg",
              transition: theme.transitions.create(["rotate"], {
                easing: theme.transitions.easing.easeInOut,
                duration: theme.transitions.duration.standard,
              }),
            })}
          />
        </BTSocialButton>
      </BTBox>
      <div
        style={{
          position: "absolute",
          right: 0,
          top: "50%",
          transform: "translateY(-100%)",
          width: "10px",
          height: "100vh",
          cursor: "ew-resize",
        }}
        onMouseDown={startResizing}
      />
    </SidenavRoot>
  );
}
export default Sidenav;
