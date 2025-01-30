import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  TableContainer,
  Dialog,
  DialogTitle,
  DialogContent,
  Grid2 as Grid,
  List,
  ListItem,
  Menu,
  MenuItem,
} from "@mui/material";
import Header from "./components/Header";
import BTBox from "../BTBox";
import BTTypography from "../BTTypography";

const Calendar = ({ width, height, droppable = true }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [draggedEventId, setDraggedEventId] = useState(null);
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);
  const [menuEvents, setMenuEvents] = useState([]);
  const [isResizing, setIsResizing] = useState(false); // "start" or "end"
  const [draggedOverCell, setDraggedOverCell] = useState(null);
  const [startOfWeek, setStartOfWeek] = useState(() => {
    const today = new Date();
    return new Date(today.setDate(today.getDate() - today.getDay())); // Start of current week (Sunday)
  });
  const [tabValue, setTabValue] = useState("month");
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Conference with team leader and work together",
      startDate: "2024-12-01T09:00", // 9:00 AM
      endDate: "2024-12-01T12:00", // 12:00 PM
      color: "#FF5733",
    },
    {
      id: 2,
      title: "Vacation",
      startDate: "2024-12-15T00:00", // All-day event
      endDate: "2024-12-15T23:59", // All-day event
      color: "#33FF57",
    },
    {
      id: 3,
      title: "Cricket",
      startDate: "2024-12-20T14:00", // 2:00 PM
      endDate: "2024-12-20T16:00", // 4:00 PM
      color: "#33FF57",
    },
  ]);

  const formatDateISO = (date) => {
    var date = new Date(date),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  };
  const handleDateClick = (e, cellDate) => {
    const formattedDate = formatDateISO(cellDate);
    const eventsForDate = events.filter(
      (event) => event.startDate === formattedDate
    );
    setMenuAnchorEl(e.currentTarget);
    setMenuEvents(eventsForDate);
  };
  const handleMenuClose = () => {
    setMenuAnchorEl(null);
    setMenuEvents([]);
  };
  // Drag start
  const handleDragOver = (cellDate) => {
    setDraggedOverCell(formatDateISO(cellDate));
  };

  const handleDragLeave = () => {
    setDraggedOverCell(null); // Reset highlight when dragging leaves the cell
  };
  const handleDragStart = (eventId) => {
    setDraggedEventId(eventId);
  };
  // Drag drop
  const handleDrop = (newDate) => {
    const draggedEvent = events.find((event) => event.id === draggedEventId);
    if (!draggedEvent) return;

    const oldStartDate = new Date(draggedEvent.startDate);
    const oldEndDate = new Date(draggedEvent.endDate);
    const newStartDate = new Date(formatDateISO(newDate));

    // Calculate the event duration
    const duration = (oldEndDate - oldStartDate) / (1000 * 60 * 60 * 24); // in days
    // Update the event's dates
    const updatedEvent = {
      ...draggedEvent,
      startDate: formatDateISO(newDate),
      endDate: new Date(newStartDate.getTime() + duration * 86400000)
        .toISOString()
        .split("T")[0],
    };
    // Update the events state
    setEvents((prevEvents) =>
      prevEvents.map((event) =>
        event.id === draggedEventId ? updatedEvent : event
      )
    );
    setDraggedEventId(null);
  };
  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  );
  const lastDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  );
  const daysInMonth = lastDayOfMonth.getDate();
  const startDay = firstDayOfMonth.getDay();

  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const currentMonth = monthNames[currentDate.getMonth()];
  const currentYear = currentDate.getFullYear();
  const isDateInRange = (date, startDate) => {
    const d = new Date(date).setHours(0, 0, 0, 0);
    const start = new Date(startDate).setHours(0, 0, 0, 0);
    return d === start;
  };

  const calculateEventDuration = (startDate, endDate) => {
    const start = new Date(startDate); // Convert startDate to Date object
    const end = new Date(endDate); // Convert endDate to Date object
    start.setHours(0, 0, 0, 0);
    end.setHours(0, 0, 0, 0);
    const durationInMillis = end - start; // Subtract dates to get duration in milliseconds
    const durationInDays = durationInMillis / (1000 * 60 * 60 * 24); // Convert milliseconds to days

    return durationInDays;
  };
  const changeMonth = (direction) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() + direction);
    setCurrentDate(newDate);
  };
  const handleWeekNavigation = (direction) => {
    setStartOfWeek((prev) => {
      const newDate = new Date(prev);
      newDate.setDate(newDate.getDate() + direction * 7); // Move 7 days forward or backward
      return newDate;
    });
  };

  const createCalendarCells = () => {
    const totalCells = 6 * 7; // 6 rows and 7 columns
    let calendarCells = [];
    let rows = [];
    let dayCounter = 1;
    const MAX_EVENT = 2;
    // Calculate the previous month's days
    const prevMonthDays = startDay; // Number of days from the previous month that need to be shown
    // Calculate the next month's days to be shown in the calendar
    const nextMonthDays = 6 * 7 - (startDay + daysInMonth);

    // Calculate previous month's last date
    let prevMonthDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      0
    );
    prevMonthDate = prevMonthDate.getDate() - prevMonthDays + 1;

    // Calculate next month's date
    let nextMonthDate = 1;

    for (let i = 0; i < totalCells; i++) {
      let currentDay = null;
      let cellDate = null;

      // Handle the previous month's days (if any)
      if (i < startDay) {
        currentDay = prevMonthDate;
        prevMonthDate++;
        cellDate = new Date(
          currentDate.getFullYear(),
          currentDate.getMonth() - 1,
          currentDay
        );
      }

      // Handle current month's days
      else if (dayCounter <= daysInMonth) {
        currentDay = dayCounter;
        cellDate = new Date(
          currentDate.getFullYear(),
          currentDate.getMonth(),
          currentDay
        );
        dayCounter++;
      }

      // Handle the next month's days (if any)
      else {
        currentDay = nextMonthDate;
        nextMonthDate++;
        cellDate = new Date(
          currentDate.getFullYear(),
          currentDate.getMonth() + 1,
          currentDay
        );
      }

      // Check if it's a previous or next month's date
      const eventsForDay = events.filter((event) =>
        isDateInRange(cellDate, event.startDate)
      );
      const isNextMonth = cellDate.getMonth() !== currentDate.getMonth();

      rows.push(
        <TableCell
          key={i}
          onDragOver={(e) => {
            e.preventDefault();
            handleDragOver(cellDate);
          }}
          onDragLeave={handleDragLeave}
          onDrop={() => {
            handleDrop(cellDate);
            handleDragLeave();
          }}
          sx={{
            backgroundColor: isNextMonth
              ? "#f0f8ff"
              : formatDateISO(cellDate) === formatDateISO(currentDate)
              ? "#f0f8ff"
              : formatDateISO(cellDate) === draggedOverCell
              ? "#f0f8ff"
              : "#f9f9f9",
            border: "1px solid #ccc",
            width: { xs: "60px", sm: "80px", md: "80px" },
            height: { xs: "60px", sm: "80px", lg: "100px", xl: "100px" },
            padding: { xs: "4px", sm: "6px" },
            fontSize: { xs: "0.75rem", sm: "0.875rem" },
            verticalAlign: "top",
          }}
        >
          <BTBox sx={{ position: "relative", minHeight: "100%" }}>
            <BTTypography
              variant="body2"
              sx={{ display: "flex", flexDirection: "row-reverse" }}
            >
              {currentDay}
            </BTTypography>

            <BTBox position="absolute" left={0} right={0}>
              {eventsForDay.slice(0, MAX_EVENT).map((event, index) => {
                const duration = calculateEventDuration(
                  event.startDate,
                  event.endDate
                );

                return (
                  <BTBox
                    draggable={droppable}
                    onDragStart={(e) => {
                      if (isResizing) {
                        e.preventDefault();
                        return;
                      }
                      handleDragStart(event?.id);
                    }}
                    onClick={
                      currentDay ? () => handleDateClick(cellDate) : null
                    }
                    key={event.id}
                    position="absolute"
                    left={0}
                    top={index === 0 ? 0 : `${25 * index}px`}
                    right={{
                      xs: `${duration * -50}px`,
                      sm: `${duration * -100}px`,
                      md: `${duration * -135}px`,
                      lg: `${duration * -170}px`,
                      xl: `${duration * -225}px`,
                    }}
                    sx={{
                      backgroundColor: event.color,
                      color: "#fff",
                      fontSize: "0.75rem",
                      cursor: "pointer",
                      display: { xs: "none", sm: "block" },
                      padding: "2px 4px",
                      marginBottom: 1,
                      borderRadius: "4px",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textAlign: "left",
                    }}
                  >
                    <span>{event.title}</span>
                    <BTBox
                      position="absolute"
                      right="0"
                      top="0"
                      bottom="0"
                      width="4px"
                      bgColor="dark"
                      sx={{
                        cursor: "e-resize",
                        zIndex: 2,
                      }}
                      onMouseDown={(e) => {
                        e.stopPropagation();
                        setIsResizing(true);

                        const startX = e.clientX;
                        const cellWidth = e.target.closest("td").offsetWidth;
                        const originalEndDate = new Date(event.endDate);

                        const handleMouseMove = (e) => {
                          const deltaX = e.clientX - startX;
                          const daysMoved = Math.round(deltaX / cellWidth);

                          const newEndDate = new Date(originalEndDate);
                          newEndDate.setDate(
                            originalEndDate.getDate() + daysMoved
                          );

                          if (newEndDate >= new Date(event.startDate)) {
                            setEvents((prevEvents) =>
                              prevEvents.map((ev) =>
                                ev.id === event.id
                                  ? {
                                      ...ev,
                                      endDate: newEndDate
                                        .toISOString()
                                        .split("T")[0],
                                    }
                                  : ev
                              )
                            );
                          }
                        };
                        const handleMouseUp = () => {
                          setIsResizing(false); // Stop resizing
                          document.removeEventListener(
                            "mousemove",
                            handleMouseMove
                          );
                          document.removeEventListener(
                            "mouseup",
                            handleMouseUp
                          );
                        };

                        document.addEventListener("mousemove", handleMouseMove);
                        document.addEventListener("mouseup", handleMouseUp);
                      }}
                    />
                  </BTBox>
                );
              })}
              <BTBox position="absolute" boxSizing="border-box" top={"50px"}>
                {eventsForDay.length >= 3 && (
                  <BTTypography
                    variant="caption"
                    sx={{
                      cursor: "pointer",
                    }}
                    onClick={(e) => {
                      handleDateClick(e, cellDate);
                    }}
                  >
                    See more...
                  </BTTypography>
                )}
              </BTBox>
            </BTBox>
          </BTBox>
        </TableCell>
      );

      if ((i + 1) % 7 === 0) {
        calendarCells.push(
          <TableRow key={calendarCells.length}>{rows}</TableRow>
        );
        rows = [];
      }
    }

    return calendarCells;
  };
  const formatWeekRange = (startDate) => {
    const options = { month: "short", day: "numeric" };
    const start = new Date(startDate);
    const end = new Date(startDate);
    end.setDate(start.getDate() + 6);

    const startDateFormatted = start.toLocaleDateString("en-US", options);
    const endDateFormatted = end.toLocaleDateString("en-US", options);

    return `${startDateFormatted} – ${endDateFormatted}, ${start.getFullYear()}`;
  };
  const WeekCalendar = () => {
    const timeSlots = Array.from({ length: 48 }, (_, i) => {
      const hour = Math.floor(i / 2);
      const minutes = i % 2 === 0 ? "00" : "30";
      const ampm = hour < 12 ? "AM" : "PM";
      const displayHour = hour % 12 === 0 ? 12 : hour % 12;
      return {
        time: `${displayHour}:${minutes} ${ampm}`,
        display: minutes === "00", // Show time text only for full hours
      };
    });

    const weekDates = Array.from({ length: 7 }, (_, i) => {
      const date = new Date(startOfWeek);
      date.setDate(startOfWeek.getDate() + i);
      return date;
    });

    return (
      <BTBox sx={{ overflowX: "auto" }}>
        <Table>
          {/* Table Header */}
          <TableHead>
            <TableRow>
              {/* Empty top-left corner */}
              <TableCell
                sx={{
                  width: "50px",
                  textAlign: "center",
                  border: "1px solid #ccc",
                }}
              ></TableCell>
              {weekDates.map((date, index) => (
                <TableCell
                  key={index}
                  align="center"
                  sx={{
                    fontWeight: 400,
                    backgroundColor: "#e0e0e0",
                    border: "1px solid #ccc",
                    padding: 0,
                    fontSize: { xs: "0.75rem", sm: "0.875rem", md: "1rem" },
                  }}
                >
                  {weekDays[date.getDay()]}{" "}
                  {date.toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  })}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          {/* Table Body */}
          <TableBody>
            {timeSlots.map(({ time, display }, rowIndex) => (
              <TableRow key={rowIndex}>
                {/* Time Column */}
                <TableCell
                  sx={{
                    fontSize: "12px",
                    fontWeight: 200,
                    textAlign: "center",
                    padding: 0,
                    backgroundColor: "#f9f9f9",
                    border: "1px solid #ccc",
                  }}
                >
                  {display ? time : ""}
                </TableCell>

                {/* Calendar Cells for Each Day */}
                {weekDates.map((_, colIndex) => (
                  <TableCell
                    key={colIndex}
                    sx={{
                      border: "1px solid #ccc",
                      backgroundColor: "#fff",
                    }}
                  >
                    {/* Placeholder for event or time slot */}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </BTBox>
    );
  };
  const monthCalendar = () => {
    return (
      <BTBox sx={{ overflowX: "auto", maxWidth: "100%" }}>
        <Table sx={{ borderCollapse: "collapse" }}>
          {/* Table Header */}
          <TableHead>
            <TableRow>
              {weekDays.map((day, index) => (
                <TableCell
                  key={index}
                  align="center"
                  sx={{
                    fontWeight: 400,
                    backgroundColor: "#e0e0e0",
                    border: "1px solid #ccc",
                    padding: 0,
                    fontSize: { xs: "0.75rem", sm: "0.875rem", md: "1rem" },
                  }}
                >
                  {day}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>{createCalendarCells()}</TableBody>
        </Table>
      </BTBox>
    );
  };
  const renderContent = () => {
    if (tabValue === "day") {
      return null;
    } else if (tabValue === "week") {
      return WeekCalendar();
    } else {
      return monthCalendar();
    }
  };

  
  return (
    <Header
      currentMonthYear={
        tabValue === "month"
          ? `${currentMonth} ${currentYear}`
          : formatWeekRange(startOfWeek)
      }
      changeMonth={tabValue === "month" ? changeMonth : handleWeekNavigation}
      setCurrentDate={setCurrentDate}
      height={height}
      setTabValue={setTabValue}
      tabValue={tabValue}
      width={width}
    >
      {" "}
      {renderContent()}
      <Menu
        sx={{ width: 280, maxWidth: "100%" }}
        anchorEl={menuAnchorEl}
        open={Boolean(menuAnchorEl)}
        aria-hidden="true"
        onClose={handleMenuClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        {menuEvents.length > 0 ? (
          menuEvents.map((event, index) => (
            <MenuItem
              key={index}
              sx={{ fontSize: "15px" }}
              draggable
              onDragStart={() => setDraggedEventId(event.id)}
            >
              {event.title}
            </MenuItem>
          ))
        ) : (
          <MenuItem>No events</MenuItem>
        )}
      </Menu>
    </Header>
  );
};

export default Calendar;
