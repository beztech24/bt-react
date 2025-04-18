import { useState } from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { NavLink } from "react-router";
import BTBox from "../../components/BTBox";

import {
  collapseItem,
  collapseIconBox,
  collapseText,
} from "./styles/sidenavCollapse";

import { useBTUIController } from "../../context";

function SidenavCollapse({ icon, name, to, active, subItems, items, ...rest }) {
  const location = useLocation();
  const mainroute = location.pathname.split("/")[1];
  const collapseName = location.pathname;
  const [state] = useBTUIController();
  const [open, setOpen] = useState(mainroute === name?.toLowerCase());
  const {
    transparentSidenav,
    whiteSidenav,
    miniSidenav,
    darkMode,
    sideNavWidth,
  } = state;

  const handleClick = (e) => {
    if (subItems) {
      e.preventDefault();
      setOpen(!open);
    }
  };

  return (
    <>
      <ListItem
        component={subItems ? "div" : NavLink}
        to={!subItems ? to : undefined}
        sx={{ px: 1, py: 0 }}
        onClick={handleClick}
      >
        <BTBox
          {...rest}
          sx={(theme) =>
            collapseItem(theme, {
              active,
              transparentSidenav,
              whiteSidenav,
              darkMode,
              sidenavColor: "light",
            })
          }
        >
          <ListItemIcon
            sx={(theme) =>
              collapseIconBox(theme, {
                transparentSidenav,
                whiteSidenav,
                darkMode,
                active,
              })
            }
          >
            {icon}
          </ListItemIcon>

          <ListItemText
            primary={name}
            sx={(theme) =>
              collapseText(theme, {
                transparentSidenav,
                whiteSidenav,
                active,
                miniSidenav,
                sideNavWidth,
              })
            }
          />
          {subItems && (
            <KeyboardArrowDownIcon
              sx={(theme) => ({
                rotate: open ? "180deg" : "0deg",
                transition: theme.transitions.create(["rotate"], {
                  easing: theme.transitions.easing.easeInOut,
                  duration: theme.transitions.duration.standard,
                }),
              })}
            />
          )}
        </BTBox>
      </ListItem>
      {subItems && (
        <List
          sx={(theme) => ({
            padding: 0,
            maxHeight: open ? "1000px" : "0px",
            overflow: "hidden",
            transition: theme.transitions.create(["max-height"], {
              easing: theme.transitions.easing.easeInOut,
              duration: theme.transitions.duration.standard,
            }),
          })}
        >
          {items?.map((item) => (
            <SidenavCollapse
              key={item.key}
              icon={item.icon}
              name={item.name}
              to={item.route}
              active={item.key === collapseName}
              subItems={item?.subItems}
              items={item?.items}
            />
          ))}
        </List>
      )}
    </>
  );
}

// Setting default values for the props of SidenavCollapse
SidenavCollapse.defaultProps = {
  active: false,
  subItems: false,
  items: [],
};

// Typechecking props for the SidenavCollapse
SidenavCollapse.propTypes = {
  icon: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  to: PropTypes.string,
  active: PropTypes.bool,
  subItems: PropTypes.bool,
  items: PropTypes.arrayOf(PropTypes.object),
};

export default SidenavCollapse;
