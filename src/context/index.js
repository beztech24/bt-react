import {
  createContext,
  useMemo,
  useReducer,
  useContext,
  useEffect,
} from "react";
const AppContext = createContext();
function reducer(state, action) {
  switch (action.type) {
    case "MINI_SIDENAV": {
      return { ...state, miniSidenav: action.value };
    }
    case "SIDENAV_WIDTH": {
      return { ...state, sideNavWidth: action.value };
    }
    case "TRANSPARENT_SIDENAV": {
      return { ...state, transparentSidenav: action.value };
    }
    case "WHITE_SIDENAV": {
      return { ...state, whiteSidenav: action.value };
    }
    case "SIDENAV_COLOR": {
      return { ...state, sidenavColor: action.value };
    }
    case "TRANSPARENT_NAVBAR": {
      return { ...state, transparentNavbar: action.value };
    }
    case "FIXED_NAVBAR": {
      return { ...state, fixedNavbar: action.value };
    }
    case "OPEN_CHAT": {
      return { ...state, openChat: action.value };
    }
    case "LAYOUT": {
      return { ...state, layout: action.value };
    }
    case "DARKMODE": {
      return { ...state, darkMode: action.value };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}
const AppProvider = ({ children }) => {
  const initialState = {
    miniSidenav: false,
    sideNavWidth: 240,
    transparentSidenav: false,
    whiteSidenav: true,
    sidenavColor: "info",
    transparentNavbar: true,
    fixedNavbar: true,
    // layout: location.pathname,
    isMobile: false,
    darkMode: false,
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = useMemo(() => [state, dispatch], [state, dispatch]);
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
function useBTUIController() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useBTUIController must be used within a BTUIProvider");
  }
  return context;
}
const setSideNavWidth = (dispatch, value) =>
  dispatch({ type: "SIDENAV_WIDTH", value });

const setMiniSidenav = (dispatch, value) =>
  dispatch({ type: "MINI_SIDENAV", value });
export { AppProvider, useBTUIController, setSideNavWidth, setMiniSidenav };
