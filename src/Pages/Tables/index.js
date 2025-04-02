import { IconButton } from "@mui/material";
import EnhancedTable from "../../components/BTTable";
import DashboardLayout from "../../Layouts/Layoutcontainers";
import MoreVertIcon from "@mui/icons-material/MoreVert";
const Tables = () => {
  const rows = [
    {
      id: 1,
      name: "Cupcakedf dfgdgdfg ffffffffffffffffffffffff sdsds",
      sur_name: "Mr KKKKKKKK",
      calories: 305,
      fat: 3.7,
      carbs: 67,
      protein: 4.3,
      wieght: 2.37478787878787878787878787,
      status: "active",
    },
    {
      id: 2,
      name: "Donut dfsdfsdv dfgdfgdfdfgdf gtfd dddddddddddddddddddddddddddd sdsdsds",
      sur_name: "Mr JJJ JJJ ",
      calories: 452,
      fat: 25.0,
      carbs: 51,
      protein: 4.9,
      wieght: 2.3,
      status: "rejected",
    },
    {
      id: 3,
      name: "Eclair fgfgfgfg hhhhhhhhhhhhhhhhhhhhhhhh jkjkjk",
      sur_name: "Mr BBB BBB",
      calories: 262,
      fat: 16.0,
      carbs: 24,
      protein: 6.0,
      wieght: 3.14159265358979323846264338,
      status: "pending",
    },
    {
      id: 4,
      name: "Froyo ghghghgh iiiiiiiiiiiiiiiiiiiiiiii klklkl",
      sur_name: "Mr GG GGGGGGG HHH GGG",
      calories: 159,
      fat: 6.0,
      carbs: 24,
      protein: 4.0,
      wieght: 1.23456789012345678901234567,
      status: "active",
    },
    {
      id: 5,
      name: "Gingerbread jkjkjkjk llllllllllllllllllllllll mnmnmn",
      sur_name: "Mr DD DDD DFd ",
      calories: 356,
      fat: 9.2,
      carbs: 49,
      protein: 3.9,
      wieght: 4.5678901234567890123456789,
      status: "rejected",
    },
    {
      id: 6,
      name: "Honeycomb lmlmlmlm nnnnnnnnnnnnnnnnnnnnnnnn opopop",
      sur_name: "Mr YY Yyy yy ",
      calories: 408,
      fat: 3.2,
      carbs: 87,
      protein: 6.5,
      wieght: 2.71828182845904523536028747,
      status: "pending",
    },
    {
      id: 7,
      name: "Ice Cream nononon pppppppppppppppppppppppp qrqrqr",
      sur_name: "Mr TT Tt TTT ",
      calories: 237,
      fat: 9.3,
      carbs: 37,
      protein: 4.1,
      wieght: 1.61803398874989484820458683,
      status: "active",
    },
    {
      id: 8,
      name: "Jelly Bean popopop qqqqqqqqqqqqqqqqqqqqqqqq rsrsrs",
      sur_name: "Mr GG HH jj jJKKK",
      calories: 375,
      fat: 0.0,
      carbs: 94,
      protein: 0.0,
      wieght: 0.57721566490153286060651209,
      status: "rejected",
    },
    {
      id: 9,
      name: "KitKat qrqrqrqr ssssssssssssssssssssssss tututu",
      calories: 518,
      fat: 26.0,
      carbs: 65,
      protein: 7.0,
      wieght: 1.41421356237309504880168872,
      status: "pending",
    },
    {
      id: 10,
      name: "Lollipop rsrsrsrs tttttttttttttttttttttttt uvuvuv",
      calories: 392,
      fat: 0.2,
      carbs: 98,
      protein: 0.0,
      wieght: 1.73205080756887729352744634,
      status: "active",
    },
    // Continuing the pattern for 90 more rows...
    {
      id: 11,
      name: "Marshmallow tututut uuuuuuuuuuuuuuuuuuuuuuu vwvwvw",
      calories: 318,
      fat: 8.1,
      carbs: 56,
      protein: 2.8,
      wieght: 2.23606797749978969640917366,
      status: "rejected",
    },
    {
      id: 12,
      name: "Nougat uvuvuvu vvvvvvvvvvvvvvvvvvvvvvvv wxwxwx",
      calories: 437,
      fat: 19.7,
      carbs: 62,
      protein: 5.3,
      wieght: 2.64575131106459059050161575,
      status: "pending",
    },
    {
      id: 13,
      name: "Oreo vwvwvwv wwwwwwwwwwwwwwwwwwwwwwww xyxyxy",
      calories: 486,
      fat: 23.0,
      carbs: 69,
      protein: 6.1,
      wieght: 2.82842712474619009760337744,
      status: "active",
    },
    {
      id: 14,
      name: "Pie wxwxwxw xxxxxxxxxxxxxxxxxxxxxxxxx yzyzyz",
      calories: 277,
      fat: 12.5,
      carbs: 37,
      protein: 3.8,
      wieght: 3.16227766016837933199889354,
      status: "rejected",
    },
    {
      id: 15,
      name: "Quiche xyxyxyx yyyyyyyyyyyyyyyyyyyyyyyy zzzzzz",
      calories: 523,
      fat: 27.3,
      carbs: 58,
      protein: 7.4,
      wieght: 1.2599210498948731647672106,
      status: "pending",
    },
    // Continuing this pattern up to 100 rows...
    {
      id: 100,
      name: "Zeppole zzzzzzz aaaaaaaaaaaaaaaaaaaaaaaa bbbbbb",
      calories: 412,
      fat: 18.6,
      carbs: 53,
      protein: 5.7,
      wieght: 2.15443469003188372175929356,
      status: "active",
    },
  ];

  function handleDelete(selectedIds) {
    console.log("Deleting items with IDs:", selectedIds);
    // Your delete logic here
  }
  const ExpandedComponent = ({ row }) => {
    return JSON.stringify(row);
  };
  return (
    <DashboardLayout>
      <EnhancedTable
        rows={rows}
        columns={[
          {
            id: "id",
            name: "ID",
            selector: (row) => row.id,
            width: "50px",
            numeric: true,
            sortable: true,
          },
          {
            id: "name",
            name: "Name",
            // width: "200px",
            cell: (row) =>
              row.name.length > 20 ? row?.name.slice(0, 21) + "..." : row?.name,
            numeric: false,
            sortable: true,
          },
          {
            id: "surname",
            name: "Surname",
            selector: (row) => row?.sur_name,
            sortable: true,
          },
          {
            id: "wieght",
            name: "Weight",
            cell: (row) => row?.wieght,
            numeric: true,
            // width: "100px",
            sortable: true,
          },
          {
            id: "calories",
            name: "Calories",
            cell: (row) => row?.calories,
            numeric: true,
            sortable: true,
          },
          {
            id: "fat",
            name: "Fat(G)",
            cell: (row) => row?.fat,
            numeric: true,
          },
          {
            id: "carbs",
            name: "Carbs",
            cell: (row) => row?.carbs,
            numeric: true,
            sortable: true,
          },
          {
            id: "protin",
            name: "protin",
            cell: (row) => row?.protein,
            numeric: true,
          },
          {
            id: "status",
            name: "Status",
            selector: (row) => row.status,
            numeric: false,
            width: "100px",
          },
          {
            id: "action",
            name: "Action",
            numeric: false,
            cell: (row) => (
              <MoreVertIcon
                fontSize="15px"
                onClick={() => {
                  console.log("row", row);
                }}
              />
            ),
            width: "100px",
            center: true,
          },
        ]}
        title="Nutrition"
        defaultSort="carbs"
        pagination={true}
        onDeleteSelected={handleDelete}
        checkBoxSelected={false}
        headerCellStyle={{
          padding: "8px",
          fontSize: "0.875rem",
        }}
        bodyCellStyle={{
          padding: "8px",
          fontSize: "0.875rem",
        }}
        headerRowStyle={{
          height: "30px",
          backgroundColor: "#f5f5f5",
        }}
        bodyRowStyle={{
          height: "20px",
        }}
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
        expandComponent={ExpandedComponent}
        expandRow={true}
      />
    </DashboardLayout>
  );
};
export default Tables;
