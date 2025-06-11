import * as React from "react";
import PropTypes from "prop-types";
import { useEffect } from "react";
import {
  alpha,
  useMediaQuery,
  useTheme,
  styled,
  InputBase,
  ButtonGroup,
} from "@mui/material";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableContainer,
  TablePagination,
  TableRow,
  TableSortLabel,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
  ListItemText,
  Checkbox,
  IconButton,
  Paper,
  Tooltip,
  Collapse,
  CircularProgress,
  circularProgressClasses,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { PictureAsPdf, Description, FilterList } from "@mui/icons-material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import { visuallyHidden } from "@mui/utils";
import { KeyboardArrowUp, Search as SearchIcon } from "@mui/icons-material";
import BTTypography from "../BTTypography";
import { jsPDF } from "jspdf";
import { applyPlugin } from "jspdf-autotable";
import * as XLSX from "xlsx";

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
  const {
    numSelected,
    title,
    onDelete,
    onSearch,
    globalSearch,
    onExportPDF,
    onExportExcel,
    columns,
    onToggleColumn,
    visibleColumns,
  } = props;
  const [searchOpen, setSearchOpen] = React.useState(false);
  const [searchText, setSearchText] = React.useState("");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
    onSearch(event.target.value);
  };
  const handleColumnToggle = (columnId) => (event) => {
    event.stopPropagation();
    onToggleColumn(columnId);
  };
  return (
    <Toolbar
      sx={[
        {
          pl: { sm: 2 },
          pr: { xs: 1, sm: 2 },
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
          variant="button"
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
            <DeleteIcon color="error" />
          </IconButton>
        </Tooltip>
      ) : (
        <Box display={"flex"} alignItems={"center"}>
          {searchOpen && (
            <Search>
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
          <ButtonGroup
            variant="contained"
            size="small"
            sx={{ ml: 1, height: "30px", boxShadow: "none" }}
            color="dark"
          >
            {globalSearch && (
              <Tooltip title="Filter list">
                <IconButton onClick={(e) => setSearchOpen(!searchOpen)}>
                  <SearchIcon />
                </IconButton>
              </Tooltip>
            )}
            <Tooltip title="Export as PDF">
              <IconButton onClick={onExportPDF}>
                <PictureAsPdf />
              </IconButton>
            </Tooltip>
            <Tooltip title="Export as Excel">
              <IconButton onClick={onExportExcel}>
                <Description />
              </IconButton>
            </Tooltip>
            <Tooltip title="Visible Columns">
              <IconButton
                aria-controls={open ? "demo-customized-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                size="small"
                onClick={handleClick}
                endIcon={<KeyboardArrowDownIcon />}
              >
                <FilterList />
              </IconButton>
            </Tooltip>
          </ButtonGroup>
        </Box>
      )}

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        PaperProps={{
          style: {
            maxHeight: 400,
            width: 200,
          },
        }}
      >
        <Typography
          variant="subtitle2"
          sx={{ px: 2, py: 1, fontWeight: "bold" }}
        >
          Visible Columns
        </Typography>
        {columns.map((column) => (
          <MenuItem
            key={column.id}
            dense
            onClick={handleColumnToggle(column.id)}
          >
            <Checkbox
              checked={visibleColumns.includes(column.id)}
              onChange={() => handleColumnToggle(column.id)}
              color="secondary"
              size="small"
              sx={{ py: 0 }}
            />
            <ListItemText
              primary={column.name || column.label || column.id}
              sx={{
                "& .css-1236rad-MuiTypography-root": {
                  fontSize: "14px",
                },
              }}
            />
          </MenuItem>
        ))}
      </Menu>
    </Toolbar>
  );
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
  title: PropTypes.string,
  onDelete: PropTypes.func,
  onSearch: PropTypes.func,
  globalSearch: PropTypes.bool,
  columns: PropTypes.array.isRequired,
  onToggleColumn: PropTypes.func.isRequired,
  visibleColumns: PropTypes.array.isRequired,
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
  page,
  rowsPerPage,
}) {
  const [open, setOpen] = React.useState(false);
  const [expanded, setExpanded] = React.useState(false);
  const globalIndex = page * rowsPerPage + index;
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
          {globalIndex + 1}
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
function CustomPaginationActions(props) {
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 0 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        <KeyboardDoubleArrowLeftIcon />
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        <KeyboardArrowUp style={{ transform: "rotate(-90deg)" }} />
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        <KeyboardArrowUp style={{ transform: "rotate(90deg)" }} />
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        <KeyboardDoubleArrowLeftIcon style={{ transform: "rotate(-180deg)" }} />
      </IconButton>
    </Box>
  );
}
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
  rowsPerPageOptions = [20, 50, 100],
  defaultRowsPerPage = 20,
  onDeleteSelected,
  compactStyles = {
    headerCellStyle: {
      padding: "8px",
      fontSize: "12px",
    },
    bodyCellStyle: {
      padding: "6px",
      fontSize: "12px",
    },
    headerRowStyle: {
      height: "20px",
    },
    bodyRowStyle: {
      height: "20px",
    },
  },
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
  const [visibleColumns, setVisibleColumns] = React.useState(
    columns.map((col) => col.id)
  );
  const [searchText, setSearchText] = React.useState("");
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };
  const toggleColumn = (columnId) => {
    setVisibleColumns((prev) =>
      prev.includes(columnId)
        ? prev.filter((id) => id !== columnId)
        : [...prev, columnId]
    );
  };
  const filteredColumns = columns.filter((col) =>
    visibleColumns.includes(col.id)
  );

  const exportToPDF = () => {
    applyPlugin(jsPDF);
    try {
      const doc = new jsPDF({
        orientation: "landscape",
        unit: "mm",
        format: "a4",
      });

      const tableTitle = title || "Table";
      const pageWidth = doc.internal.pageSize.getWidth();
      const margin = 14; // Left and right margin in mm
      const availableWidth = pageWidth - margin * 2;

      // Prepare data for export
      const exportData = filteredRows.map((row) => {
        return columns.map((column) => {
          let computedValue;

          if (column?.value) {
            computedValue = column.value(row);
          } else if (column.selector) {
            computedValue = column.selector(row);
          } else if (column.cell) {
            computedValue = column.cell(row);
          } else {
            computedValue = row[column.id];
          }

          return computedValue != null ? String(computedValue) : "";
        });
      });

      const headers = filteredColumns.map(
        (column) => column.name || column.label || column.id
      );

      // Calculate column widths
      const columnCount = headers.length;
      let columnWidths = [];

      if (columnCount > 0) {
        // Option 1: Equal distribution
        // columnWidths = new Array(columnCount).fill(availableWidth / columnCount);

        // Option 2: Content-based width calculation
        columnWidths = headers.map((header, colIndex) => {
          // Get all cell values for this column
          const columnValues = exportData.map((row) => row[colIndex]);
          // Include header in width calculation
          const allValues = [header, ...columnValues];

          // Find longest text in the column
          const longestText = allValues.reduce((a, b) =>
            a.length > b.length ? a : b
          );

          // Calculate width based on text length (adjust multiplier as needed)
          const baseWidth = longestText.length * 1.5;
          // Ensure minimum and maximum widths
          return Math.min(Math.max(baseWidth, 20), availableWidth / 2);
        });

        // Normalize widths to fit available space
        const totalCalculatedWidth = columnWidths.reduce((a, b) => a + b, 0);
        const scaleFactor = availableWidth / totalCalculatedWidth;
        columnWidths = columnWidths.map((width) => width * scaleFactor);
      }

      // Add title
      doc.text(tableTitle, margin, 15);

      // Generate table with dynamic column widths
      doc.autoTable({
        head: [headers],
        body: exportData,
        startY: 20,
        margin: { left: margin, right: margin },
        styles: {
          fontSize: 8,
          overflow: "linebreak",
          valign: "middle",
          cellPadding: 2,
        },
        headStyles: {
          fillColor: [41, 128, 185],
          textColor: 255,
          fontStyle: "bold",
        },
        columnStyles: columnWidths.reduce((styles, width, index) => {
          styles[index] = { cellWidth: width };
          return styles;
        }, {}),
        tableWidth: "auto",
        pageBreak: "auto",
      });

      // Save the PDF
      doc.save(
        `${tableTitle.replace(/\s+/g, "_")}_${new Date()
          .toISOString()
          .slice(0, 10)}.pdf`
      );
    } catch (error) {
      alert(`Error generating PDF. Please try again.${error}`);
    }
  };

  const exportToExcel = () => {
    const tableTitle = title || "Table";
    // Prepare data for export
    const headers = filteredColumns.map((column) => ({
      header: column.name || column.label || column.id,
      key: column.id,
    }));

    // Create an array of objects with the correct structure
    const exportData = filteredRows.map((row) => {
      const rowData = {};
      columns.forEach((column) => {
        const key = column.id;

        // Priority 1: column.value (if it's a function)
        if (column?.value) {
          rowData[key] = column.value(row);
        }
        // Priority 2: column.selector
        else if (column.selector) {
          rowData[key] = column.selector(row);
        }
        // Priority 3: column.cell
        else if (column.cell) {
          rowData[key] = column.cell(row);
        }
        // Priority 4: row[column.id] (fallback)
        else {
          rowData[key] = row[column.id];
        }

        // Ensure null/undefined becomes an empty string (optional)
        if (rowData[key] == null) {
          rowData[key] = "";
        }
      });
      return rowData;
    });
    // Create worksheet with headers
    const worksheet = XLSX.utils.json_to_sheet(exportData, {
      header: headers.map((h) => h.key), // Use the column ids as keys
    });
    // If you want to customize the header names in Excel
    XLSX.utils.sheet_add_aoa(worksheet, [headers.map((h) => h.header)], {
      origin: "A1",
    });
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    XLSX.writeFile(
      workbook,
      `${tableTitle.replace(/\s+/g, "_")}_${new Date()
        .toISOString()
        .slice(0, 10)}.xlsx`
    );
  };
  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n);
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

  const lowercasedSearch = searchText?.toLowerCase();

  const filteredRows = rows?.filter((row) => {
    return columns.some((column) => {
      const cellValue = column.selector ? column.selector(row) : row[column.id];
      return String(cellValue).toLowerCase().includes(lowercasedSearch);
    });
  });

  const renderCellContent = (row, column, index) => {
    const globalIndex = page * rowsPerPage + index;
    if (column.cell) return column.cell(row, globalIndex);
    if (column.selector) return column.selector(row, globalIndex);
    return row[column.id];
  };
  useEffect(() => {
    if (searchText?.length > 0) {
      setPage(0);
    }
  }, [searchText]);
  const visibleRows = React.useMemo(
    () =>
      [...(filteredRows || [])]
        .sort(getComparator(order, orderBy))
        .slice(
          pagination ? page * rowsPerPage : 0,
          pagination ? page * rowsPerPage + rowsPerPage : filteredRows?.length
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
            onSearch={setSearchText}
            globalSearch={globalSearch}
            onExportPDF={exportToPDF}
            onExportExcel={exportToExcel}
            columns={columns}
            onToggleColumn={toggleColumn}
            visibleColumns={visibleColumns}
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
          <TableContainer sx={{ maxHeight: 700, pl: 2, pr: 2 }}>
            <Table
              aria-labelledby="tableTitle"
              size="small"
              aria-label="a dense table"
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
                  columns={filteredColumns}
                  headerCellStyle={compactStyles?.headerCellStyle}
                  headerRowStyle={compactStyles?.headerRowStyle}
                  checkBoxSelected={checkBoxSelected}
                  expandRow={expandRow}
                />
              )}
              <TableBody>
                {visibleRows.map((row, index) => {
                  const isItemSelected = selected.includes(row);
                  const labelId = `enhanced-table-checkbox-${index}`;
                  const isExpanded = expandedRows[index] || false;
                  return isMobile ? (
                    <MobileRow
                      key={index}
                      index={index}
                      rowsPerPage={rowsPerPage}
                      page={page}
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
                              onClick={(e) => handleClick(e, row)}
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
                        {filteredColumns.map((column) => (
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
                            sx={{ p: 0 }}
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
            component="div"
            rowsPerPageOptions={rowsPerPageOptions}
            count={filteredRows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            ActionsComponent={CustomPaginationActions} // Use custom actions
            sx={{
              "& .MuiTablePagination-toolbar": {
                minHeight: "30px",
                padding: "0 8px",
              },
              "& .MuiTablePagination-selectLabel": { fontSize: "0.90rem" },
              "& .MuiTablePagination-displayedRows": { fontSize: "0.90rem" },
              "& .MuiInputBase-root": { fontSize: "0.90rem" },
              "& .MuiMenuItem-root": { fontSize: "0.90rem", minHeight: "32px" },
            }}
            SelectProps={{
              MenuProps: {
                PaperProps: {
                  sx: { "& .MuiMenuItem-root": { fontSize: "0.90rem" } },
                },
              },
            }}
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
