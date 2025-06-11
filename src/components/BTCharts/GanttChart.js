import React, { useEffect, useRef, useMemo, useState } from "react";
import { Chart, registerables } from "chart.js";
import "chartjs-adapter-date-fns";
import { Paper, ButtonGroup } from "@mui/material";
import BTTypography from "../BTTypography";
import BTButton from "../BTButton";
import BTInput from "../BTInput";
import BTBox from "../BTBox";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { Tooltip } from "chart.js";
import moment from "moment/moment";
// Register Chart.js components
Chart.register(...registerables);

const MONTH_NAMES = [
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

// Static data for 10 tasks
const generateMockData = () => {
  // Generate 500 users
  const staticUsers = Array.from({ length: 50 }, (_, i) => ({
    u_id: i + 1,
    first_name: `User${i + 1}`,
    last_name: `Lastname${Math.floor(Math.random() * 1000)}`,
  }));

  // Generate tasks (about 5-10 tasks per user)
  const staticTasks = [];
  const statuses = [1, 2, 3, 4]; // Status IDs
  const types = [1, 2]; // Task types

  // Current date and 1 year range
  const startDate = new Date();
  const endDate = new Date();
  endDate.setFullYear(startDate.getFullYear() + 1);

  staticUsers.forEach((user, index) => {
    const taskCount = 5 + Math.floor(Math.random() * 6); // 5-10 tasks per user

    for (let i = 0; i < taskCount; i++) {
      // Random date within 1 year range
      const randomStartDate = new Date(
        startDate.getTime() +
          Math.random() * (endDate.getTime() - startDate.getTime())
      );

      // Duration from 1 to 14 days
      const durationDays = 1 + Math.floor(Math.random() * 14);
      const randomEndDate = new Date(randomStartDate);
      randomEndDate.setDate(randomStartDate.getDate() + durationDays);

      // Random creator (could be same user or different)
      const createdBy = Math.floor(Math.random() * 500) + 1;

      staticTasks.push({
        t_id: staticTasks.length + 1,
        t_name: `Task ${staticTasks.length + 1} for ${user.first_name}`,
        t_datetime: randomStartDate
          .toISOString()
          .replace("T", " ")
          .substring(0, 19),
        t_end_datetime: randomEndDate
          .toISOString()
          .replace("T", " ")
          .substring(0, 19),
        t_assign_to: user.u_id,
        created_by: createdBy,
        t_status: statuses[Math.floor(Math.random() * statuses.length)],
        t_type: types[Math.floor(Math.random() * types.length)],
        p_t_id: null,
      });
    }
  });

  // Status attributes
  const staticAttributes = [
    {
      attr_id: 1,
      attr_label: "Not Started",
      attr_color: "rgba(255, 99, 132, 0.6)",
    },
    {
      attr_id: 2,
      attr_label: "In Progress",
      attr_color: "rgba(54, 162, 235, 0.6)",
    },
    {
      attr_id: 3,
      attr_label: "In Review",
      attr_color: "rgba(255, 206, 86, 0.6)",
    },
    {
      attr_id: 4,
      attr_label: "Completed",
      attr_color: "rgba(75, 192, 192, 0.6)",
    },
  ];

  return { staticUsers, staticTasks, staticAttributes };
};

// Generate the data
const { staticUsers, staticTasks, staticAttributes } = generateMockData();

const GanttChart = ({ height = 200 }) => {
  const chartRef = useRef(null);
  const MIN_DATE = moment().format("YYYY-MM-DD");
  const MAX_DATE = moment().add(5, "days").format("YYYY-MM-DD");
  const [minDate, setMinDate] = useState(MIN_DATE);
  const [maxDate, setMaxDate] = useState(MAX_DATE);
  const [visibleRange, setVisibleRange] = useState({ start: 0, end: 20 }); // Show 20 users at a time
  const containerRef = useRef(null);

  // Process tasks data for chart - only visible portion
  const chartData = useMemo(() => {
    // Get unique users from tasks
    const uniqueUsers = [
      ...new Set(staticTasks.map((task) => task.t_assign_to)),
    ].map((u_id) => {
      const user = staticUsers.find((user) => user.u_id === u_id);
      return user ? `${user.first_name} ${user.last_name}` : "Unassigned";
    });

    // Sort users alphabetically
    uniqueUsers.sort();

    // Get only visible users
    const visibleUsers = uniqueUsers.slice(
      visibleRange.start,
      visibleRange.end
    );

    return {
      datasets: [
        {
          label: "Tasks",
          data: staticTasks
            .filter((task) => {
              const assignedUser = staticUsers.find(
                (user) => user.u_id === task.t_assign_to
              );
              const userLabel = assignedUser
                ? `${assignedUser.first_name} ${assignedUser.last_name}`
                : "Unassigned";
              return visibleUsers.includes(userLabel);
            })
            .map((task) => {
              const assignedUser = staticUsers.find(
                (user) => user.u_id === task.t_assign_to
              );
              const createdUser = staticUsers.find(
                (user) => user.u_id === task.created_by
              );

              return {
                x: [task.t_datetime, task.t_end_datetime],
                y: assignedUser
                  ? `${assignedUser.first_name} ${assignedUser.last_name}`
                  : "Unassigned",
                taskName: task.t_name,
                assigned_user: assignedUser
                  ? `${assignedUser.first_name} ${assignedUser.last_name}`
                  : "Unassigned",
                status: task.t_status,
                created_by: createdUser
                  ? `${createdUser.first_name} ${createdUser.last_name}`
                  : "System",
                task_type: task.t_type,
                id: task.t_id,
              };
            }),
          backgroundColor: (ctx) => {
            return staticAttributes.find(
              (attr) => attr.attr_id === ctx.raw.status
            )?.attr_color;
          },
          borderColor: (ctx) => {
            return staticAttributes.find(
              (attr) => attr.attr_id === ctx.raw.status
            )?.attr_color;
          },
          borderWidth: 1,
          borderSkipped: false,
          borderRadius: 10,
          barPercentage: 0.8,
        },
      ],
    };
  }, [visibleRange]);

  // click on chart
  const handleChartClick = (event) => {
    const chartInstance = chartRef.current;
    if (chartInstance) {
      const xScale = chartInstance.scales.x;
      const elements = chartInstance.getElementsAtEventForMode(
        event,
        "nearest",
        { intersect: true },
        false
      );
      if (elements.length > 0) {
        const datasetIndex = elements[0].datasetIndex;
        const dataIndex = elements[0].index;

        const clickedTask =
          chartInstance.data.datasets[datasetIndex].data[dataIndex];
        console.log("clickedTask", clickedTask);
      } else {
        const check = chartInstance.options.scales.x.time.unit;
        const clickedValue = xScale.getValueForPixel(event.x);
        const selectedDate = new Date(clickedValue).toISOString().split("T")[0];
        if (check !== "hour") {
          chartInstance.options.scales.x.time.unit = "hour";
          chartInstance.options.scales.x.time.displayFormats.hour = "h a";
          chartInstance.options.scales.x.min = `${selectedDate}T00:00:00`;
          chartInstance.options.scales.x.max = `${selectedDate}T24:00:00`;
        } else {
          chartInstance.options.scales.x.time.unit = "day";
          chartInstance.options.scales.x.time.displayFormats.hour = "d";
          chartInstance.options.scales.x.min = minDate;
          chartInstance.options.scales.x.max = maxDate;
        }
        chartInstance.update();
      }
    }
  };
  // Chart configuration

  Tooltip.positioners.myCustomPositioner = function (elements, eventPosition) {
    const tooltip = this;
    const chartArea = tooltip.chart.chartArea;
    const tooltipHeight = tooltip.height || 0;
    const nearBottom = eventPosition.y + tooltipHeight > chartArea.bottom;
    const xOffset = 10;
    return {
      x: eventPosition.x + xOffset,
      y: eventPosition.y,
      xAlign: "center",
      yAlign: nearBottom ? "bottom" : "top",
    };
  };
  const config = useMemo(
    () => ({
      type: "bar",
      data: chartData,
      options: {
        indexAxis: "y",
        scales: {
          x: {
            type: "time",
            position: "top",
            time: {
              unit: "day",
              displayFormats: { day: "MMM d" },
              tooltipFormat: "MMM d, yyyy HH:mm",
            },
            min: minDate,
            max: maxDate,
          },
          y: {
            ticks: {
              autoSkip: false,
            },
          },
        },
        plugins: {
          legend: { display: false },
          tooltip: {
            position: "myCustomPositioner",
            callbacks: {
              label: (context) => {
                return `Type: ${
                  context.raw.task_type === 1 ? "One-time" : "Recurring"
                }`;
              },
              title: (context) => {
                const start = new Date(context[0].raw.x[0]);
                const end = new Date(context[0].raw.x[1]);
                const status = staticAttributes.find(
                  (attr) => attr.attr_id === context[0].raw.status
                );

                return [
                  `Task: ${context[0].raw.taskName}`,
                  `Assigned: ${context[0].raw.assigned_user}`,
                  `Created: ${context[0].raw.created_by}`,
                  `Time: ${start.toLocaleString()} - ${end.toLocaleString()}`,
                  `Status: ${status?.attr_label || "Unknown"}`,
                ];
              },
            },
          },
        },
        onHover: (event, elements) => {
          const chartInstance = chartRef.current;
          if (chartInstance) {
            const canvas = chartInstance.canvas;

            canvas.style.cursor = elements.length > 0 ? "pointer" : "default";
          }
        },
        onClick: handleChartClick,
        responsive: true,
        maintainAspectRatio: false,
      },
    }),
    [chartData, minDate, maxDate]
  );

  // Initialize and update chart
  useEffect(() => {
    let chart;
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    const canvas = document.getElementById("chartCanvas");
    if (canvas) {
      chart = new Chart(canvas, config);
      chartRef.current = chart;
    }

    return () => {
      if (chart) {
        chart.destroy();
      }
    };
  }, [config]);

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
      const scrollRatio = scrollTop / (scrollHeight - clientHeight);
      const totalUsers = [
        ...new Set(staticTasks.map((task) => task.t_assign_to)),
      ].length;
      const visibleCount = 20;
      const maxStart = Math.max(0, totalUsers - visibleCount);
      const newStart = Math.floor(scrollRatio * maxStart);

      setVisibleRange({
        start: newStart,
        end: newStart + visibleCount,
      });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, []);
  const adjustDates = (days) => {
    const newMinDate = new Date(minDate);
    newMinDate.setDate(newMinDate.getDate() + days);
    setMinDate(newMinDate.toISOString().split("T")[0]);

    const newMaxDate = new Date(maxDate);
    newMaxDate.setDate(newMaxDate.getDate() + days);
    setMaxDate(newMaxDate.toISOString().split("T")[0]);
  };

  return (
    <Paper
      elevation={2}
      sx={{
        borderRadius: 2,
        p: 2,
        position: "relative",
        height,
        overflow: "hidden",
      }}
    >
      <BTBox
        mb={2}
        display="flex"
        justifyContent="space-between"
        sx={{ width: "100%" }}
        bgColor={"white"}
        zIndex={99999}
      >
        <BTBox>
          <BTTypography variant="h4" fontWeight="bold">
            {MONTH_NAMES[new Date(maxDate).getMonth()]}{" "}
            {new Date(maxDate).getFullYear()}
          </BTTypography>
        </BTBox>
        <BTBox>
          <BTInput
            type="date"
            size="small"
            label="From"
            value={minDate}
            onChange={(e) => setMinDate(e.target.value)}
            sx={{ mr: 1 }}
          />
          <BTInput
            type="date"
            size="small"
            label="To"
            value={maxDate}
            onChange={(e) => setMaxDate(e.target.value)}
            sx={{ mr: 1 }}
          />
          <ButtonGroup>
            <BTButton
              size="small"
              color="dark"
              variant="contained"
              onClick={() => adjustDates(-7)}
            >
              <ArrowBackIos />
            </BTButton>
            <BTButton
              size="small"
              color="dark"
              variant="contained"
              onClick={() => adjustDates(7)}
            >
              <ArrowForwardIos />
            </BTButton>
          </ButtonGroup>
        </BTBox>
      </BTBox>

      <div
        ref={containerRef}
        style={{
          marginTop: "50px",
          height: `calc(100% - 100px)`,
          position: "relative",
          overflow: "auto",
        }}
      >
        <div
          style={{
            height: `${
              [...new Set(staticTasks.map((task) => task.t_assign_to))].length *
              40
            }px`,
          }}
        >
          <canvas id="chartCanvas" height={height} />
        </div>
      </div>
    </Paper>
  );
};

export default GanttChart;
