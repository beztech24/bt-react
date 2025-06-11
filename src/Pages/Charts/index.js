import DashboardLayout from "../../Layouts/Layoutcontainers";
import GanttChart from "../../components/BTCharts/GanttChart";
const Charts = () => {
  return (
    <DashboardLayout>
      <GanttChart height={800} />
    </DashboardLayout>
  );
};
export default Charts;
