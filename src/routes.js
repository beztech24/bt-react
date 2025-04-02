import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import Tables from "./Pages/Tables";
import Calendar from "./Pages/Calendar";
import Stepper from "./Pages/Stepper";
import Inputs from "./Pages/Inputs";
import Dropzone from "./Pages/Dropzone";
import Badges from "./Pages/Badges";
import Notifications from "./Pages/Notifications";
import {
  Settings,
  Logout,
  Dashboard as Dash,
  Home as Homepage,
  Person,
  AppBlockingOutlined,
} from "@mui/icons-material";
import Image1 from "./assets/images/Untitled design.png";
import Avatar from "./Pages/Avatar";
import Socialbuttons from "./Pages/Socialbuttons";
import Typography from "./Pages/Typography";

export const theme_routes = [
  {
    type: "profile",
    name: "Profile",
    key: "profile",
    icon: (
      <img
        src={Image1}
        width={"30px"}
        height={"30px"}
        style={{ borderRadius: "50%" }}
      />
    ),
    route: "/profile",
    component: <h1>Profile</h1>,
    subItems: true,
    items: [
      {
        type: "collapse",
        name: "My profile",
        key: "my-profile",
        icon: <Dash />,
        route: "/profile",
        component: <h1>Profile</h1>,
        subItems: true,
      },
      {
        type: "collapse",
        name: "Settings",
        key: "settings",
        icon: <Settings />,
        route: "/settings",
        component: <h1>Settings</h1>,
        subItems: true,
      },
      {
        type: "collapse",
        name: "Logout",
        key: "logout",
        icon: <Logout />,
        route: "/logout",
        component: <h1>Logout</h1>,
        subItems: true,
      },
    ],
  },
  {
    type: "divider",
    name: "divider",
    key: "divider",
  },
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Dash />,
    route: "/dashboard",
    component: <Dashboard />,
    subItems: false,
  },
  {
    type: "text",
    name: "pages",
    key: "pages",
  },
  {
    type: "collapse",
    name: "Home",
    key: "home",
    icon: <Homepage />,
    route: "/home",
    component: <h1>Home</h1>,
    subItems: true,
    items: [
      {
        type: "collapse",
        name: "Buttons",
        key: "buttons",
        icon: "B",
        route: "/buttons",
        component: <Home />,
        subItems: false,
      },
      {
        type: "collapse",
        name: "Table",
        key: "table",
        icon: "T",
        route: "/table",
        component: <Tables />,
        subItems: false,
      },
      {
        type: "collapse",
        name: "Calendar",
        key: "calendar",
        icon: "C",
        route: "/calendar",
        component: <Calendar />,
        subItems: false,
      },
      {
        type: "collapse",
        name: "Stepper",
        key: "stepper",
        icon: "S",
        route: "/stepper",
        subItems: false,
        component: <Stepper />,
      },
      {
        type: "collapse",
        name: "Inputs",
        key: "inputs",
        icon: "I",
        route: "/inputs",
        subItems: false,
        component: <Inputs />,
      },
      {
        type: "collapse",
        name: "Dropzone",
        key: "dropzone",
        icon: "D",
        route: "/dropzone",
        subItems: false,
        component: <Dropzone />,
      },
      {
        type: "collapse",
        name: "Badges",
        key: "badges",
        icon: "B",
        route: "/badges",
        subItems: false,
        component: <Badges />,
      },
      {
        type: "collapse",
        name: "Avatar",
        key: "avatar",
        icon: "A",
        route: "/avatar",
        subItems: false,
        component: <Avatar />,
      },
      {
        type: "collapse",
        name: "Socialbutton",
        key: "socialbutton",
        icon: "B",
        route: "/socialbutton",
        subItems: false,
        component: <Socialbuttons />,
      },
      {
        type: "collapse",
        name: "Typography",
        key: "typography",
        icon: "T",
        route: "/typography",
        subItems: false,
        component: <Typography />,
      },
      {
        type: "collapse",
        name: "Notification",
        key: "notification",
        icon: "N",
        route: "/notification",
        subItems: false,
        component: <Notifications />,
      },
    ],
  },
];
