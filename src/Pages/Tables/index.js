import { IconButton } from "@mui/material";
import EnhancedTable from "../../components/BTTable";
import DashboardLayout from "../../Layouts/Layoutcontainers";
import MoreVertIcon from "@mui/icons-material/MoreVert";
const Tables = () => {
  const columns = [
    {
      id: "id",
      name: "ID",
      selector: (row, index) => index + 1,
      width: "50px",
      numeric: true,
      sortable: true,
    },
    {
      id: "name",
      name: "Name",
      cell: (row) =>
        row.name.length > 20 ? `${row.name.slice(0, 20)}...` : row.name,
      sortable: true,
      width: "350px",
    },
    {
      id: "surname",
      name: "Surname",
      selector: (row) => row.surname,
      sortable: true,
      width: "150px",
    },
    {
      id: "weight",
      name: "Weight (kg)",
      selector: (row) => row.weight.toFixed(2),
      numeric: true,
      sortable: true,
      width: "150px",
    },
    {
      id: "height",
      name: "Height (cm)",
      selector: (row) => row.height,
      numeric: true,
      sortable: true,
      width: "150px",
    },
    {
      id: "age",
      name: "Age",
      selector: (row) => row.age,
      numeric: true,
      sortable: true,
      width: "80px",
    },
    {
      id: "gender",
      name: "Gender",
      selector: (row) => row.gender,
      sortable: true,
      width: "100px",
    },
    {
      id: "email",
      name: "Email",
      cell: (row) =>
        row.email.length > 25 ? `${row.email.slice(0, 25)}...` : row.email,
      width: "250px",
    },
    {
      id: "phone",
      name: "Phone",
      selector: (row) => row.phone,
      width: "200px",
    },
    {
      id: "address",
      name: "Address",
      cell: (row) =>
        row.address.length > 30
          ? `${row.address.slice(0, 30)}...`
          : row.address,
      width: "250px",
    },
    {
      id: "city",
      name: "City",
      selector: (row) => row.city,
      sortable: true,
      width: "150px",
    },
    {
      id: "country",
      name: "Country",
      selector: (row) => row.country,
      sortable: true,
      width: "120px",
    },
    {
      id: "status",
      name: "Status",
      selector: (row) => row.status,
      sortable: true,
      width: "100px",
      cell: (row) => (
        <span
          style={{
            color:
              row.status === "active"
                ? "green"
                : row.status === "pending"
                ? "orange"
                : "red",
            fontWeight: "bold",
          }}
        >
          {row.status}
        </span>
      ),
    },
    {
      id: "joinedDate",
      name: "Joined Date",
      selector: (row) => new Date(row.joinedDate).toLocaleDateString(),
      sortable: true,
      width: "120px",
    },
    {
      id: "actions",
      name: "Actions",
      cell: (row) => (
        <IconButton
          onClick={() => console.log("Action on row:", row)}
          size="small"
        >
          <MoreVertIcon fontSize="small" />
        </IconButton>
      ),
      width: "80px",
      bodyCellStyle: {
        padding: "0px",
      },
      center: true,
    },
  ];

  const generateRandomData = (count) => {
    const firstNames = [
      "John",
      "Jane",
      "Michael",
      "Emily",
      "David",
      "Sarah",
      "Robert",
      "Lisa",
    ];
    const lastNames = [
      "Smith",
      "Johnson",
      "Williams",
      "Brown",
      "Jones",
      "Miller",
      "Davis",
      "Garcia",
    ];
    const cities = [
      "New York",
      "Los Angeles",
      "Chicago",
      "Houston",
      "Phoenix",
      "Philadelphia",
      "San Antonio",
      "San Diego",
    ];
    const countries = [
      "USA",
      "Canada",
      "UK",
      "Australia",
      "Germany",
      "France",
      "Japan",
      "Brazil",
    ];
    const statuses = ["active", "pending", "inactive"];

    return Array.from({ length: count }, (_, i) => ({
      id: i + 1,
      name: `${firstNames[Math.floor(Math.random() * firstNames.length)]} ${
        lastNames[Math.floor(Math.random() * lastNames.length)]
      }`,
      surname: lastNames[Math.floor(Math.random() * lastNames.length)],
      weight: Math.random() * 100 + 50, // 50-150 kg
      height: Math.floor(Math.random() * 60) + 140, // 140-200 cm
      age: Math.floor(Math.random() * 50) + 18, // 18-68 years
      gender: Math.random() > 0.5 ? "Male" : "Female",
      email: `user${i + 1}@example.com`,
      phone: `+1 ${Math.floor(Math.random() * 900000000) + 100000000}`,
      address: `${Math.floor(Math.random() * 1000) + 1} ${
        ["Main", "Oak", "Pine", "Maple", "Cedar"][Math.floor(Math.random() * 5)]
      } St`,
      city: cities[Math.floor(Math.random() * cities.length)],
      country: countries[Math.floor(Math.random() * countries.length)],
      status: statuses[Math.floor(Math.random() * statuses.length)],
      joinedDate: new Date(
        Date.now() - Math.floor(Math.random() * 1000 * 60 * 60 * 24 * 365 * 5)
      ).toISOString(), // 0-5 years ago
    }));
  };

  const rows = generateRandomData(1000); // Generate 100 rows of data

  function handleDelete(selectedIds) {
    console.log("Deleting items with IDs:", selectedIds);
    // Your delete logic here
  }
  const ExpandedComponent = ({ row }) => {
    return JSON.stringify(row);
  };
  const compactStyles = {
    headerCellStyle: {
      padding: "8px",
      fontSize: "0.8125rem",
    },
    bodyCellStyle: {
      padding: "6px",
      fontSize: "0.8125rem",
    },
    headerRowStyle: {
      height: "20px",
    },
    bodyRowStyle: {
      height: "20px",
    },
  };
  return (
    <DashboardLayout>
      <EnhancedTable
        rows={rows}
        // loading={true}
        tableHeader={true}
        columns={columns}
        title="Nutrition"
        defaultSort="carbs"
        pagination={true}
        onDeleteSelected={handleDelete}
        checkBoxSelected={false}
        getRowStyle={(row) => {
          if (row.status === "active") {
            return {
              backgroundColor: "#e8f5e9",
              "&:hover": {
                backgroundColor: "#d0e9d1",
              },
            };
          }
          if (row?.status === "rejected") {
            return {
              backgroundColor: "#fbd1d3",
              "&:hover": {
                backgroundColor: "#d0e9d1",
              },
            };
          }
          if (row.value < 0) {
            return {
              backgroundColor: "#ffebee",
              "&:hover": {
                backgroundColor: "#ffcdd2",
              },
            };
          }
          return {};
        }}
        compactStyles={compactStyles}
        expandComponent={ExpandedComponent}
        expandRow={true}
      />
    </DashboardLayout>
  );
};
export default Tables;
