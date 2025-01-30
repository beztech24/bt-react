import { useState } from "react";
import BTInputRoot from "./BTInputRoot";
import { InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton } from "@mui/material";
const BTInput = ({
  error = false,
  success = false,
  disabled = false,
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const { type } = { ...rest };

  return (
    <BTInputRoot
      {...rest}
      type={showPassword ? "text" : type}
      ownerState={{ error, success, disabled, type }}
      InputProps={
        type === "password" && {
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                size="small"
                sx={{ cursor: "pointer" }}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <Visibility fontSize="13px" />
                ) : (
                  <VisibilityOff fontSize="13px" />
                )}
              </IconButton>
            </InputAdornment>
          ),
        }
      }
    />
  );
};

export default BTInput;
