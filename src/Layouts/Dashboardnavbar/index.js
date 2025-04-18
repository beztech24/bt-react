
import {
  AppBar,
  Toolbar,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { useLocation } from "react-router";
import { AppBar, Toolbar, IconButton } from "@mui/material";
import {
  navbar,
  navbarRow,
  navbarMobileMenu,
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "./styles";
import { NotificationAdd, Search as SearchIcon } from "@mui/icons-material";
import { setMiniSidenav } from "../../context";
import { useState, useEffect } from "react";
import { useBTUIController } from "../../context";
import BTBox from "../../components/BTBox";
import { MenuOpen, Menu as MenuIcon } from "@mui/icons-material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import BTButton from "../../components/BTButton";
import { Menu, MenuItem } from "@mui/material";
import { theme_routes } from "../../routes";
import { NavLink } from "react-router";
import BTDialogBox from "../../components/BTDialgBox";
const MenuContent = ({ pages, anchorEl, handleMenuClose }) => {
  return (
    <Menu
      id="basic-menu"
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={handleMenuClose}
      MenuListProps={{
        "aria-labelledby": "basic-button",
      }}
      PaperProps={{
        elevation: 0,
        sx: {
          overflow: "visible",
          filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.10))",
          mt: 1.5,
          "& .MuiAvatar-root": {
            width: 40,
            height: 40,
            ml: -0.5,
            mr: 1,
          },
          "&:before": {
            content: '""',
            display: "block",
            position: "absolute",
            top: 0,
            left: 14,
            width: 10,
            height: 10,
            bgcolor: "background.paper",
            transform: "translateY(-50%) rotate(45deg)",
            zIndex: 0,
          },
        },
      }}
      transformOrigin={{ horizontal: "left", vertical: "top" }}
      anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
    >
      {pages?.map((item) => (
        <MenuItem
          key={item?.key}
          component={!item?.subItems ? NavLink : undefined}
          to={!item?.subItems ? item?.route : undefined}
          onClick={handleMenuClose}
          sx={{ fontSize: "0.9rem" }}
        >
          {item?.name}
        </MenuItem>
      ))}
    </Menu>
  );
};


function Dashboardnavbar({ absolute, light, sideNavWidth }) {
  const location = useLocation();
  const app_routes = theme_routes;
  const [state, dispatch] = useBTUIController();
  const { transparentNavbar, darkMode, fixedNavbar, miniSidenav } = state;
  const [navbarType, setNavbarType] = useState();
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentMenu, setCurrentMenu] = useState(null);
  const isMobile = useMediaQuery("(max-width:1200px)");
  useEffect(() => {
    if (fixedNavbar) {
      setNavbarType("sticky");
    } else {
      setNavbarType("static");
    }
  }, [fixedNavbar]);
  const handleMiniSidenav = () => setMiniSidenav(dispatch, !miniSidenav);
  const handleMenuOpen = (event, menu) => {
  const handleMiniSidenav = () => setMiniSidenav(dispatch, !miniSidenav);
  const handleMenuOpen = (event, menu) => {
    if (menu?.subItems === false) {
      return;
    }
    setAnchorEl(event.currentTarget);
    setCurrentMenu(menu);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
    setCurrentMenu(null);
  };
  const handleClose = () => {
    setModel(false);
  };

  return (
    <AppBar
      position={absolute ? "absolute" : navbarType}
      color="inherit"
      sx={(theme) => ({
        ...navbar(theme, { transparentNavbar, absolute, light, darkMode }),
        left: `${sideNavWidth}px`,
        transition: theme.transitions.create(["width", "left"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      })}
    >
      <Toolbar>
        {isMobile && miniSidenav ? (
          <BTBox sx={(theme) => navbarRow(theme, { isMobile })}>
            <BTBox color={light ? "white" : "inherit"}>
              <IconButton
                size="small"
                disableRipple
                color="inherit"
                sx={navbarMobileMenu}
                onClick={handleMiniSidenav}
              >
                {miniSidenav ? <MenuIcon /> : <MenuOpen />}
              </IconButton>
            </BTBox>
          </BTBox>
        ) : null}
        {/* Menu content */}
        <BTBox
          sx={{
            flexGrow: 1,
            display: "flex",
            gap: 1,
            overflow: "auto",
            display: {
              xs: "none",
              sm: "none",
              lg: "flex",
              xl: "flex",
              md: "flex",
            },
          }}
        >
          {app_routes
            ?.filter(({ type }) => type === "collapse")
            ?.map((page) => (
              <BTButton
                key={page?.key}
                component={!page?.subItems ? NavLink : undefined}
                to={!page?.subItems ? page?.route : undefined}
                sx={{
                  gap: 1,
                  mx: 1,
                  p: 0,
                  borderRadius: 0,
                  "&.active": {
                    borderBottom: "1px solid gray",
                    p: 0,
                  },
                  "&:hover": {
                    borderBottom: "1px solid gray",
                  },
                }}
                className={
                  location.pathname === page?.route ||
                  page?.items?.some((item) => location.pathname === item.route)
                    ? "active"
                    : ""
                }
                onClick={(e) => handleMenuOpen(e, page)}
                variant={"contained"}
                sx={{ gap: 1, mx: 1, p: 0 }}
                onClick={(e) => handleMenuOpen(e, page)}
                aria-controls={
                  currentMenu?.name === page.name ? "basic-menu" : undefined
                }
                aria-haspopup="true"
                aria-expanded={
                  currentMenu?.name === page.name ? "true" : undefined
                }
              >
                {page?.name}
                {page?.subItems && (
                  <KeyboardArrowDownIcon
                    sx={(theme) => ({
                      rotate:
                        currentMenu?.name === page?.name ? "180deg" : "0deg",
                      transition: theme.transitions.create(["rotate"], {
                        easing: theme.transitions.easing.easeInOut,
                        duration: theme.transitions.duration.standard,
                      }),
                    })}
                  />
                )}
              </BTButton>
            ))}
        </BTBox>
        <MenuContent
          pages={currentMenu?.items}
          anchorEl={anchorEl}
          handleMenuClose={handleMenuClose}
        />
        {/* Last content left side  */}
        <BTBox
          display="flex"
          justifyContent="flex-end"
          gap={2}
          alignItems="center"
        >
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <NotificationAdd />
          <HelpOutlineIcon />
        </BTBox>
      </Toolbar>
    </AppBar>
  );
}
export default Dashboardnavbar;
