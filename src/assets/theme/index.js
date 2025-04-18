// @mui material components
import { createTheme } from "@mui/material/styles";

// Material Dashboard 2 React base styles
import colors from "./base/colors";
import breakpoints from "./base/breakpoints.js";
import typography from "./base/typography.js";
import borders from "./base/borders.js";
import globals from "./base/globals";
import boxShadows from "./base/boxShadows.js";
// Material Dashboard 2 React helper functions
import boxShadow from "./functions/boxShadow.js";
import hexToRgb from "./functions/hexToRgb.js";
import linearGradient from "./functions/linearGradient.js";
import pxToRem from "./functions/pxToRem.js";
import rgba from "./functions/rgba.js";

// Material Dashboard 2 React components base styles for @mui material components
import sidenav from "./components/sidenav.js";
// import list from "assets/theme/components/list";
// import listItem from "assets/theme/components/list/listItem";
// import listItemText from "assets/theme/components/list/listItemText";
// import card from "assets/theme/components/card";
// import cardMedia from "assets/theme/components/card/cardMedia";
// import cardContent from "assets/theme/components/card/cardContent";
import button from "./components/button";
import iconButton from "./components/iconButton";
import input from "./components/form/input";
import inputLabel from "./components/form/inputLabel";
import inputOutlined from "./components/form/inputOutlined";
import textField from "./components/form/textField.js";
// import menu from "assets/theme/components/menu";
// import menuItem from "assets/theme/components/menu/menuItem";
// import switchButton from "assets/theme/components/form/switchButton";
// import divider from "assets/theme/components/divider";
// import tableContainer from "assets/theme/components/table/tableContainer";
// import tableHead from "assets/theme/components/table/tableHead";
// import tableCell from "assets/theme/components/table/tableCell";
import linearProgress from "./components/linearProgress.js";
// import breadcrumbs from "assets/theme/components/breadcrumbs";
// import slider from "assets/theme/components/slider";
// import avatar from "assets/theme/components/avatar";
// import tooltip from "assets/theme/components/tooltip";
// import appBar from "assets/theme/components/appBar";
// import tabs from "assets/theme/components/tabs";
// import tab from "assets/theme/components/tabs/tab";
// import stepper from "assets/theme/components/stepper";
// import step from "assets/theme/components/stepper/step";
// import stepConnector from "assets/theme/components/stepper/stepConnector";
// import stepLabel from "assets/theme/components/stepper/stepLabel";
// import stepIcon from "assets/theme/components/stepper/stepIcon";
// import select from "assets/theme/components/form/select";
import formControlLabel from "./components/form/formControlLabel.js";
// import formLabel from "assets/theme/components/form/formLabel";
// import checkbox from "assets/theme/components/form/checkbox";
// import radio from "assets/theme/components/form/radio";
import autocomplete from "./components/form/autocomplete.js";
// import container from "assets/theme/components/container";
// import popover from "assets/theme/components/popover";
// import buttonBase from "assets/theme/components/buttonBase";
// import icon from "assets/theme/components/icon";
// import svgIcon from "assets/theme/components/svgIcon";
// import link from "assets/theme/components/link";
// import dialog from "assets/theme/components/dialog";
// import dialogTitle from "assets/theme/components/dialog/dialogTitle";
// import dialogContent from "assets/theme/components/dialog/dialogContent";
// import dialogContentText from "assets/theme/components/dialog/dialogContentText";
// import dialogActions from "assets/theme/components/dialog/dialogActions";

export default createTheme({
  breakpoints: { ...breakpoints },
  palette: { ...colors },
  typography: { ...typography },
  boxShadows: { ...boxShadows },
  borders: { ...borders },
  functions: {
    boxShadow,
    hexToRgb,
    linearGradient,
    pxToRem,
    rgba,
  },

  components: {
    // MuiCssBaseline: {
    //   styleOverrides: {
    //     ...globals,
    //     ...container,
    //   },
    // },
    MuiDrawer: { ...sidenav },
    // MuiList: { ...list },
    // MuiListItem: { ...listItem },
    // MuiListItemText: { ...listItemText },
    // MuiCard: { ...card },
    // MuiCardMedia: { ...cardMedia },
    // MuiCardContent: { ...cardContent },
    MuiButton: { ...button },
    // MuiTextField: { ...textField },
    MuiIconButton: { ...iconButton },
    MuiInput: { ...input },
    MuiInputLabel: { ...inputLabel },
    MuiOutlinedInput: { ...inputOutlined },
    // MuiMenu: { ...menu },
    // MuiMenuItem: { ...menuItem },
    // MuiSwitch: { ...switchButton },
    // MuiDivider: { ...divider },
    // MuiTableContainer: { ...tableContainer },
    // MuiTableHead: { ...tableHead },
    // MuiTableCell: { ...tableCell },
    MuiLinearProgress: { ...linearProgress },
    // MuiBreadcrumbs: { ...breadcrumbs },
    // MuiSlider: { ...slider },
    // MuiAvatar: { ...avatar },
    // MuiTooltip: { ...tooltip },
    // MuiAppBar: { ...appBar },
    // MuiTabs: { ...tabs },
    // MuiTab: { ...tab },
    // MuiStepper: { ...stepper },
    // MuiStep: { ...step },
    // MuiStepConnector: { ...stepConnector },
    // MuiStepLabel: { ...stepLabel },
    // MuiStepIcon: { ...stepIcon },
    // MuiSelect: { ...select },
    MuiFormControlLabel: { ...formControlLabel },
    // MuiFormLabel: { ...formLabel },
    // MuiCheckbox: { ...checkbox },
    // MuiRadio: { ...radio },
    MuiAutocomplete: { ...autocomplete },
    // MuiPopover: { ...popover },
    // MuiButtonBase: { ...buttonBase },
    // MuiIcon: { ...icon },
    // MuiSvgIcon: { ...svgIcon },
    // MuiLink: { ...link },
    // MuiDialog: { ...dialog },
    // MuiDialogTitle: { ...dialogTitle },
    // MuiDialogContent: { ...dialogContent },
    // MuiDialogContentText: { ...dialogContentText },
    // MuiDialogActions: { ...dialogActions },
  },
});
