import { createContext, useContext, useMemo } from "react";
import BTPaginationItemRoot from "./BTPaginationItemRoot";
import BTBox from "../BTBox";
const Context = createContext();
const BTPagination = ({
  item,
  variant,
  color,
  postion,
  size,
  active,
  children,
  ...rest
}) => {
  const context = useContext(Context);
  const paginationSize = context ? context.size : null;
  const value = useMemo(
    () => ({ variant, color, size }),
    [variant, color, size]
  );

  return (
    <Context.Provider value={value}>
      {item ? (
        <BTPaginationItemRoot
          {...rest}
          variant={active ? context.variant : "outlined"}
          color={active ? context.color : "secondary"}
          iconOnly
          circular
          ownerState={{ variant, active, paginationSize }}
        >
          {children}
        </BTPaginationItemRoot>
      ) : (
        <BTBox
          display="flex"
          justifyContent={postion}
          alignItems="center"
          sx={{ listStyle: "none" }}
        >
          {children}
        </BTBox>
      )}
    </Context.Provider>
  );
};

export default BTPagination;
