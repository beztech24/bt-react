function collapseItem(theme, ownerState) {
  const { palette, transitions, breakpoints, boxShadows, borders, functions } =
    theme;
  const { active, transparentSidenav, whiteSidenav, darkMode, sidenavColor } =
    ownerState;

  const { white, transparent, dark, grey, gradients } = palette;
  const { md } = boxShadows;
  const { borderRadius } = borders;
  const { pxToRem, rgba, linearGradient } = functions;

  return {
    background: active
      ? linearGradient(
          gradients[sidenavColor].main,
          gradients[sidenavColor].state
        )
      : transparent.main,
    color: dark?.main,
    display: "flex",
    alignItems: "center",
    width: "100%",
    padding: `${pxToRem(8)} ${pxToRem(10)}`,
    borderRadius: borderRadius.md,
    cursor: "pointer",
    userSelect: "none",
    whiteSpace: "nowrap",
    boxShadow:
      active && !whiteSidenav && !darkMode && !transparentSidenav ? md : "none",
    [breakpoints.up("xl")]: {
      transition: transitions.create(["box-shadow", "background-color"], {
        easing: transitions.easing.easeInOut,
        duration: transitions.duration.shorter,
      }),
    },

    "&:hover, &:focus": {
      backgroundColor: () => {
        let backgroundValue;

        if (!active) {
          backgroundValue =
            transparentSidenav && !darkMode
              ? grey[300]
              : rgba(whiteSidenav ? grey[400] : white.main, 0.2);
        }

        return backgroundValue;
      },
    },
  };
}

function collapseIconBox(theme, ownerState) {
  const { palette, transitions, borders, functions } = theme;
  const { transparentSidenav, whiteSidenav, darkMode, active } = ownerState;

  const { white, dark } = palette;
  const { borderRadius } = borders;
  const { pxToRem } = functions;

  return {
    minWidth: pxToRem(10),
    minHeight: pxToRem(10),
    color:
      (transparentSidenav && !darkMode && !active) || (whiteSidenav && !active)
        ? dark.main
        : white.main,
    borderRadius: borderRadius.md,
    display: "grid",
    placeItems: "center",
    transition: transitions.create("margin", {
      easing: transitions.easing.easeInOut,
      duration: transitions.duration.standard,
    }),

    "& svg, svg g": {
      color: transparentSidenav || whiteSidenav ? dark.main : white.main,
      fontSize: pxToRem(20),
    },
  };
}

const collapseIcon = ({ palette: { white, gradients } }, { active }) => ({
  color: active ? white.main : gradients.dark.state,
});

function collapseText(theme, ownerState) {
  const { typography, transitions, breakpoints, functions } = theme;
  const { transparentSidenav, active, miniSidenav, sideNavWidth } = ownerState;
  const { size, fontWeightRegular, fontWeightLight } = typography;
  const { pxToRem } = functions;

  return {
    marginLeft: pxToRem(10),
    opacity:
      miniSidenav || (miniSidenav && transparentSidenav) || sideNavWidth <= 115
        ? 0
        : 1,
    [breakpoints.up("xl")]: {
      opacity:
        miniSidenav ||
        (miniSidenav && transparentSidenav) ||
        sideNavWidth <= 115
          ? 0
          : 1,
      maxWidth:
        miniSidenav ||
        (miniSidenav && transparentSidenav) ||
        sideNavWidth <= 115
          ? 0
          : "100%",
      marginLeft:
        miniSidenav ||
        (miniSidenav && transparentSidenav) ||
        sideNavWidth <= 115
          ? 0
          : pxToRem(10),
      transition: transitions.create(["opacity", "margin"], {
        easing: transitions.easing.easeInOut,
        duration: transitions.duration.standard,
      }),
    },

    "& span": {
      fontWeight: active ? fontWeightRegular : fontWeightLight,
      fontSize: size.sm,
      lineHeight: 0,
    },
  };
}

export { collapseItem, collapseIconBox, collapseIcon, collapseText };
