import * as React from "react";
import PropTypes from "prop-types";
import {
  alpha,
  useMediaQuery,
  useTheme,
  styled,
  InputBase,
} from "@mui/material";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import { TableHead } from "@mui/material";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import { visuallyHidden } from "@mui/utils";
import Collapse from "@mui/material/Collapse";
import { CircularProgress, circularProgressClasses } from "@mui/material";
import { KeyboardArrowUp, Search as SearchIcon } from "@mui/icons-material";
import BTTypography from "../BTTypography";
function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
  transition: theme.transitions.create("width"),
  overflow: "hidden",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    fontSize: "15px",
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "20ch",
    },
  },
}));
function EnhancedTableHead(props) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
    columns,
    headerCellStyle,
    headerRowStyle,
    checkBoxSelected,
    expandRow,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow sx={headerRowStyle}>
        {checkBoxSelected && (
          <TableCell padding="checkbox">
            <Checkbox
              color="primary"
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={rowCount > 0 && numSelected === rowCount}
              onChange={onSelectAllClick}
              inputProps={{
                "aria-label": "select all items",
              }}
            />
          </TableCell>
        )}
        {expandRow && <TableCell sx={{ width: "10px" }}></TableCell>}
        {columns.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={
              headCell?.center ? "center" : headCell?.numeric ? "right" : "left"
            }
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
            sx={{
              ...headerCellStyle,
              ...headCell.headerCellStyle,
              width: headCell.width,
            }}
          >
            {headCell.sortable ? (
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : "asc"}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.name || headCell.label}
                {orderBy === headCell.id ? (
                  <Box component="span" sx={visuallyHidden}>
                    {order === "desc"
                      ? "sorted descending"
                      : "sorted ascending"}
                  </Box>
                ) : null}
              </TableSortLabel>
            ) : (
              headCell.name || headCell.label
            )}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
  columns: PropTypes.array.isRequired,
  headerCellStyle: PropTypes.object,
  headerRowStyle: PropTypes.object,
  checkBoxSelected: PropTypes.bool,
  expandRow: PropTypes.bool,
};

function EnhancedTableToolbar(props) {
  const { numSelected, title, onDelete, onSearch, globalSearch } = props;
  const [searchOpen, setSearchOpen] = React.useState(false);
  const [searchText, setSearchText] = React.useState("");
  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
    onSearch(event.target.value);
  };
  return (
    <Toolbar
      sx={[
        {
          pl: { sm: 2 },
          pr: { xs: 1, sm: 1 },
        },
        numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            ),
        },
      ]}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: "1 1 100%" }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: "1 1 100%" }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          {title}
        </Typography>
      )}
      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton onClick={onDelete}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        globalSearch && (
          <Box display={"flex"}>
            {searchOpen && (
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search..."
                  inputProps={{ "aria-label": "search" }}
                  value={searchText}
                  onChange={handleSearchChange}
                  autoFocus
                  onBlur={() => searchText === "" && setSearchOpen(false)}
                />
              </Search>
            )}
            <Tooltip title="Filter list">
              <IconButton onClick={(e) => setSearchOpen(!searchOpen)}>
                <FilterListIcon />
              </IconButton>
            </Tooltip>
          </Box>
        )
      )}
    </Toolbar>
  );
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
  title: PropTypes.string,
  onDelete: PropTypes.func,
  onSearch: PropTypes.func,
  globalSearch: PropTypes.bool,
};

function MobileRow({
  row,
  columns,
  index,
  isItemSelected,
  labelId,
  onClick,
  bodyCellStyle,
  bodyRowStyle,
  getRowStyle,
  checkBoxSelected,
  expandRow,
  expandComponent,
}) {
  const [open, setOpen] = React.useState(false);
  const [expanded, setExpanded] = React.useState(false);
  const renderCellContent = (row, column, index) => {
    if (column.cell) return column.cell(row, index);
    if (column.selector) return column.selector(row, index);
    return row[column.id];
  };

  return (
    <>
      <TableRow
        hover
        onClick={() => setOpen(!open)}
        role="checkbox"
        aria-checked={isItemSelected}
        tabIndex={-1}
        key={row.id}
        selected={isItemSelected}
        sx={{
          cursor: "pointer",
          ...bodyRowStyle,
          ...(getRowStyle && getRowStyle(row)),
        }}
      >
        {checkBoxSelected && (
          <TableCell padding="checkbox">
            <Checkbox
              color="primary"
              checked={isItemSelected}
              onClick={(e) => {
                e.stopPropagation();
                onClick(e, row.id);
              }}
              inputProps={{
                "aria-labelledby": labelId,
              }}
            />
          </TableCell>
        )}
        <TableCell
          component="th"
          id={labelId}
          scope="row"
          sx={{ width: "50px", fontWeight: "bold" }}
        >
          {index + 1}
        </TableCell>
        <TableCell
          component="th"
          id={labelId}
          scope="row"
          sx={{ p: 1, width: "100%" }}
        >
          {renderCellContent(row, columns[1], index)}
        </TableCell>
        {expandRow && (
          <TableCell
            component="th"
            id={labelId}
            scope="row"
            sx={{ p: 1, width: "50px", ...bodyCellStyle }}
          >
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={(e) => {
                e.stopPropagation();
                setExpanded(!expanded);
              }}
            >
              <KeyboardArrowUp
                sx={(theme) => ({
                  rotate: !expanded ? "180deg" : "0deg",
                  transition: theme.transitions.create(["rotate"], {
                    easing: theme.transitions.easing.easeInOut,
                    duration: theme.transitions.duration.standard,
                  }),
                })}
              />
            </IconButton>
          </TableCell>
        )}
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Table size="small" aria-label="details">
                <TableBody>
                  {columns.slice(1).map((column) => (
                    <TableRow key={column.id}>
                      <TableCell
                        component="th"
                        scope="row"
                        sx={{
                          ...bodyCellStyle,
                          color: "black",
                          fontWeight: "bold",
                        }}
                      >
                        {column.name || column.label}
                      </TableCell>
                      <TableCell align="right" sx={bodyCellStyle}>
                        {renderCellContent(row, column)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

MobileRow.propTypes = {
  row: PropTypes.object.isRequired,
  columns: PropTypes.array.isRequired,
  isItemSelected: PropTypes.bool.isRequired,
  labelId: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  bodyCellStyle: PropTypes.object,
  bodyRowStyle: PropTypes.object,
  getRowStyle: PropTypes.func,
  checkBoxSelected: PropTypes.bool,
  expandRow: PropTypes.bool,
  expandComponent: PropTypes.func,
};

export default function EnhancedTable({
  rows = [],
  columns = [],
  expandRow = false,
  expandComponent,
  tableHeader = true,
  title = "Table",
  defaultSort = "calories",
  defaultOrder = "asc",
  pagination = true,
  rowsPerPageOptions = [5, 10, 15],
  defaultRowsPerPage = 5,
  onDeleteSelected,
  compactStyles = {},
  checkBoxSelected = false,
  getRowStyle,
  globalSearch = true,
  loading = false,
  loadingComponent = null,
  sx,
}) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [order, setOrder] = React.useState(defaultOrder);
  const [orderBy, setOrderBy] = React.useState(defaultSort);
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(defaultRowsPerPage);
  const [expandedRows, setExpandedRows] = React.useState({});
  const [filteredRows, setFilteredRows] = React.useState(rows || []);
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleDeleteSelected = () => {
    if (onDeleteSelected) {
      onDeleteSelected(selected);
    }
    setSelected([]);
  };
  const handleExpandClick = (index) => {
    setExpandedRows((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };
  const handleSearch = (searchText) => {
    if (!searchText) {
      setFilteredRows(rows || []);
      return;
    }

    const lowercasedSearch = searchText.toLowerCase();
    const filtered = rows?.filter((row) => {
      return columns.some((column) => {
        const cellValue = column.selector
          ? column.selector(row)
          : row[column.id];
        return String(cellValue).toLowerCase().includes(lowercasedSearch);
      });
    });
    setFilteredRows(filtered || []);
    setPage(0);
  };
  const renderCellContent = (row, column, index) => {
    if (column.cell) return column.cell(row, index);
    if (column.selector) return column.selector(row, index);
  };
  React.useEffect(() => {
    if (rows) {
      setFilteredRows(rows);
    }
  }, [rows]);

  const visibleRows = React.useMemo(
    () =>
      [...filteredRows]
        .sort(getComparator(order, orderBy))
        .slice(
          pagination ? page * rowsPerPage : 0,
          pagination ? page * rowsPerPage + rowsPerPage : rows.length
        ),
    [order, orderBy, page, rowsPerPage, filteredRows, pagination]
  );

  return (
    <Box sx={sx}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        {tableHeader && (
          <EnhancedTableToolbar
            numSelected={selected.length}
            title={title}
            onDelete={handleDeleteSelected}
            onSearch={handleSearch}
            globalSearch={globalSearch}
          />
        )}
        {loading ? (
          loadingComponent || (
            <Box sx={{ p: 3, display: "flex", justifyContent: "center" }}>
              <CircularProgress
                sx={(theme) => ({
                  color: "#1a90ff",
                  animationDuration: "1000ms",
                  [`& .${circularProgressClasses.circle}`]: {
                    strokeLinecap: "round",
                  },
                  ...theme.applyStyles("dark", {
                    color: "#308fe8",
                  }),
                })}
                size={40}
                thickness={4}
              />
            </Box>
          )
        ) : columns?.length === 0 ||
          !columns ||
          rows?.length === 0 ||
          !rows ||
          filteredRows?.length === 0 ? (
          <BTTypography variant="body2" sx={{ textAlign: "center", p: 3 }}>
            No data available
          </BTTypography>
        ) : (
          <TableContainer sx={{ maxHeight: 700 }}>
            <Table
              aria-labelledby="tableTitle"
              size="small"
              aria-label="a dense table"
              sx={{ overflow: "hidden" }}
              stickyHeader
            >
              {!isMobile && (
                <EnhancedTableHead
                  numSelected={selected.length}
                  order={order}
                  orderBy={orderBy}
                  onSelectAllClick={handleSelectAllClick}
                  onRequestSort={handleRequestSort}
                  rowCount={rows.length}
                  columns={columns}
                  headerCellStyle={compactStyles?.headerCellStyle}
                  headerRowStyle={compactStyles?.headerRowStyle}
                  checkBoxSelected={checkBoxSelected}
                  expandRow={expandRow}
                />
              )}
              <TableBody>
                {visibleRows.map((row, index) => {
                  const isItemSelected = selected.includes(row.id);
                  const labelId = `enhanced-table-checkbox-${index}`;
                  const isExpanded = expandedRows[index] || false;
                  return isMobile ? (
                    <MobileRow
                      key={index}
                      index={index}
                      row={row}
                      columns={columns}
                      isItemSelected={isItemSelected}
                      labelId={labelId}
                      onClick={handleClick}
                      bodyCellStyle={compactStyles?.bodyCellStyle}
                      bodyRowStyle={compactStyles?.bodyRowStyle}
                      getRowStyle={getRowStyle}
                      checkBoxSelected={checkBoxSelected}
                      expandRow={expandRow}
                      expandComponent={expandComponent}
                    />
                  ) : (
                    <React.Fragment key={index}>
                      <TableRow
                        hover
                        role="checkbox"
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        selected={isItemSelected}
                        sx={{
                          ...compactStyles?.bodyRowStyle,
                          ...(getRowStyle && getRowStyle(row)),
                          height: "20px",
                        }}
                      >
                        {checkBoxSelected && (
                          <TableCell padding="checkbox">
                            <Checkbox
                              color="primary"
                              checked={isItemSelected}
                              onClick={(e) => handleClick(e, row?.id)}
                              inputProps={{
                                "aria-labelledby": labelId,
                              }}
                            />
                          </TableCell>
                        )}
                        {expandRow && (
                          <TableCell sx={{ width: "10px" }} padding="checkbox">
                            <IconButton
                              size="small"
                              onClick={() => handleExpandClick(index)}
                            >
                              <KeyboardArrowUp
                                sx={(theme) => ({
                                  rotate: !isExpanded ? "180deg" : "0deg",
                                  transition: theme.transitions.create(
                                    ["rotate"],
                                    {
                                      easing:
                                        theme.transitions.easing.easeInOut,
                                      duration:
                                        theme.transitions.duration.shorter,
                                    }
                                  ),
                                })}
                              />
                            </IconButton>
                          </TableCell>
                        )}
                        {columns.map((column) => (
                          <TableCell
                            key={column.id}
                            component="th"
                            scope="row"
                            align={
                              column?.center
                                ? "center"
                                : column.numeric
                                ? "right"
                                : "left"
                            }
                            padding={column.disablePadding ? "none" : "normal"}
                            sx={{
                              ...compactStyles?.bodyCellStyle,
                              ...column.bodyCellStyle,
                              height: "20px",
                              width: column.width,
                              // overflow: "hidden",
                            }}
                          >
                            {renderCellContent(row, column, index)}
                          </TableCell>
                        ))}
                      </TableRow>
                      {expandRow && isExpanded && (
                        <TableRow>
                          <TableCell
                            colSpan={
                              columns.length +
                              (checkBoxSelected ? 1 : 0) +
                              (expandRow ? 1 : 0)
                            }
                          >
                            {expandComponent && expandComponent({ row })}
                          </TableCell>
                        </TableRow>
                      )}
                    </React.Fragment>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        )}

        {pagination && Array.isArray(rows) && rows.length > 0 && (
          <TablePagination
            rowsPerPageOptions={rowsPerPageOptions}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        )}
      </Paper>
    </Box>
  );
}

EnhancedTable.propTypes = {
  rows: PropTypes.array,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string,
      label: PropTypes.string,
      selector: PropTypes.func,
      cell: PropTypes.func,
      numeric: PropTypes.bool,
      sortable: PropTypes.bool,
      disablePadding: PropTypes.bool,
      width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      headerCellStyle: PropTypes.object,
      bodyCellStyle: PropTypes.object,
    })
  ).isRequired,
  title: PropTypes.string,
  defaultSort: PropTypes.string,
  defaultOrder: PropTypes.oneOf(["asc", "desc"]),
  pagination: PropTypes.bool,
  rowsPerPageOptions: PropTypes.arrayOf(PropTypes.number),
  defaultRowsPerPage: PropTypes.number,
  onDeleteSelected: PropTypes.func,
  getRowStyle: PropTypes.func,
  checkBoxSelected: PropTypes.bool,
  expandComponent: PropTypes.func,
  expandRow: PropTypes.bool,
  globalSearch: PropTypes.bool,
  compactStyles: PropTypes.object,
  tableHeader: PropTypes.bool,
  loading: PropTypes.bool,
  loadingComponent: PropTypes.node,
};
