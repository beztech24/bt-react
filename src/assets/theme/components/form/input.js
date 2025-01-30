import colors from "../../base/colors";
import typography from "../../base/typography";
import borders from "../../base/borders";
import pxToRem from "../../functions/pxToRem";
const { info, inputBorderColor, dark } = colors;
const { size } = typography;
const { borderWidth } = borders;

const input = {
  styleOverrides: {
    root: {
      fontSize: size.sm,
      color: dark.main,

      "&:hover:not(.Mui-disabled):before": {
        borderBottom: `${borderWidth[1]} solid ${inputBorderColor}`,
      },

      "&:before": {
        borderColor: inputBorderColor,
      },

      "&:after": {
        borderColor: info.main,
      },
    },
    inputSizeSmall: {
      fontSize: size.xs,
      // padding: pxToRem(10),
    },
  },
};

export default input;
