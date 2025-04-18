
import SignIn from "./authentication/sign-in";
import SignUp from "./authentication/sign-up";
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
  Login,
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
        name: "Sign In",
        key: "SignIn",
        icon: <Login />,
        route: "/sign-in",
        component: <SignIn />,
        subItems: false,
      },
      {
        type: "collapse",
        name: "Sign Up",
        key: "SignUp",
        icon: <Logout />,
        route: "/sign-up",
        component: <SignUp />,
        subItems: false,
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
    name: "Components",
    key: "components",
    icon: <Homepage />,
    route: "/components",
    subItems: true,
    items: [
      {
        type: "collapse",
        name: "Buttons",

        key: "/components/buttons",
        icon: "B",
        route: "/components/buttons",
        component: <Home />,
        subItems: false,
      },
      {
        type: "collapse",
        name: "Table",
        key: "/components/table",
        icon: "T",
        route: "/components/table",
        component: <Tables />,
        subItems: false,
      },
      {
        type: "collapse",
        name: "Calendar",
        key: "/components/calendar",
        icon: "C",
        route: "/components/calendar",
        component: <Calendar />,
        subItems: false,
      },
      {
        type: "collapse",
        name: "Stepper",
        key: "/components/stepper",
        icon: "S",
        route: "/components/stepper",
        subItems: false,
        component: <Stepper />,
      },
      {
        type: "collapse",
        name: "Inputs",
        key: "/components/inputs",
        icon: "I",
        route: "/components/inputs",
        subItems: false,
        component: <Inputs />,
      },
      {
        type: "collapse",
        name: "Dropzone",
        key: "/components/dropzone",
        icon: "D",
        route: "/components/dropzone",
        subItems: false,
        component: <Dropzone />,
      },
      {
        type: "collapse",
        name: "Badges",
        key: "/components/badges",
        icon: "B",
        route: "/components/badges",
        subItems: false,
        component: <Badges />,
      },
      {
        type: "collapse",
        name: "Avatar",

        key: "/components/avatar",
        icon: "A",
        route: "/components/avatar",
        subItems: false,
        component: <Avatar />,
      },
      {
        type: "collapse",
        name: "Socialbutton",
        key: "/components/socialbutton",
        icon: "B",
        route: "/components/socialbutton",
        subItems: false,
        component: <Socialbuttons />,
      },
      {
        type: "collapse",
        name: "Typography",
        key: "/components/typography",
        icon: "T",
        route: "/components/typography",
        subItems: false,
        component: <Typography />,
      },
      {
        type: "collapse",
        name: "Notification",
        key: "/components/notification",
        icon: "N",
        route: "/components/notification",
        subItems: false,
        component: <Notifications />,
      },
    ],
  },
];
