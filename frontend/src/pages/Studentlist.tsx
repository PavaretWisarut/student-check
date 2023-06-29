import React from "react";
import {
  DataGrid,
  GridColDef,
  GridValueGetterParams,
  GridCellParams,
} from "@mui/x-data-grid";
import "../App.css"
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Box, Button, TextField, InputAdornment } from "@mui/material";
import Navbar from "../components/Navbar";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";

const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "ID",
    width: 70,
    filterable: false,
    hideable: false,
    sortable: false,
    align: "center",
    headerAlign: "center",
    disableColumnMenu: true,
  },
  {
    field: "firstName",
    headerName: "First name",
    width: 130,
    align: "center",
    headerAlign: "center",
    disableColumnMenu: true,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 130,
    align: "center",
    headerAlign: "center",
    disableColumnMenu: true,
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
    align: "center",
    headerAlign: "center",
    disableColumnMenu: true,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    align: "center",
    headerAlign: "center",
    disableColumnMenu: true,
  },
  {
    field: "subject",
    headerName: "Subject",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    align: "center",
    headerAlign: "center",
    disableColumnMenu: true,
  },
  {
    field: "status",
    headerName: "Status",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    align: "center",
    headerAlign: "center",
    disableColumnMenu: true,
  },
  {
    field: "view",
    headerName: "View",
    sortable: false,
    width: 100,
    align: "center",
    headerAlign: "center",
    disableColumnMenu: true,
    renderCell: (params: GridCellParams) => {
      const handleView = () => {
        console.log("Edit", params.row.id);
      };

      return (
        <div>
          <Button
            variant="contained"
            onClick={handleView}
            sx={{
              backgroundColor: "#73C088",
              ":hover": { backgroundColor: "#397D54" },
            }}
            startIcon={<VisibilityIcon />}
          >
            View
          </Button>
        </div>
      );
    },
  },
  {
    field: "edit",
    headerName: "Edit",
    sortable: false,
    width: 100,
    align: "center",
    headerAlign: "center",
    disableColumnMenu: true,
    renderCell: (params: GridCellParams) => {
      const handleEdit = () => {
        console.log("Edit", params.row.id);
      };

      return (
        <div>
          <Button
            variant="contained"
            onClick={handleEdit}
            sx={{
              backgroundColor: "#51C2D5",
              ":hover": { backgroundColor: "D3E0EA" },
            }}
            startIcon={<EditIcon />}
          >
            Edit
          </Button>
        </div>
      );
    },
  },
  {
    field: "delete",
    headerName: "Delete",
    sortable: false,
    width: 100,
    align: "center",
    headerAlign: "center",
    disableColumnMenu: true,
    renderCell: (params: GridCellParams) => {
      const handleDelete = () => {
        // Handle delete action here using params.row.id
        console.log("Delete", params.row.id);
      };

      return (
        <div>
          <Button
            variant="contained"
            onClick={handleDelete}
            sx={{
              backgroundColor: "#FF6962",
              ":hover": { backgroundColor: "red" },
            }}
            startIcon={<DeleteIcon />}
          >
            Delete
          </Button>
        </div>
      );
    },
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id: 10, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

function Studentlist() {
  const theme = useTheme();
  const isMobileOrTablet = useMediaQuery(theme.breakpoints.down("md"));
  const gridWidth = isMobileOrTablet ? "100%" : "65%";
  return (
    <div>
      <Navbar />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginTop: 5,
            justifyContent: "center",
            width: "100%",
            // justifyContent: "space-between",
          }}
        >
          <TextField
            variant="outlined"
            placeholder="Search By Name"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            size="small"
            sx={{
              width: "50%",
            }}
          />

          <Button
            variant="contained"
            // onClick={handleDelete}
            // color = "primary"
            sx={{
              backgroundColor: "#4F80C0",
              // ":hover": { backgroundColor: "#78A3D4" },
              marginLeft: "1%",
              mr: "1%",
            }}
            startIcon={<SearchIcon />}
          >
            Search
          </Button>
          <Button
            variant="contained"
            // onClick={handleDelete}
            sx={{
              backgroundColor: "#F2C94C",
              ":hover": { backgroundColor: "#DFA003" },
            }}
            startIcon={<AddIcon />}
          >
            Add
          </Button>
        </Box>
        {/* <Box
          sx={{
            width: "100%",
            overflowX: "auto",
            height: 400,
            backgroundColor: "white",
            // height: "calc(100vh - 200px)",
            borderRadius: 3,
            mt: 6,
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
          }}
        > */}
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          disableColumnSelector
          sx={{ width: gridWidth, overflowX: "auto" , mt: 4 }}
        />
        {/* </Box> */}
      </Box>
    </div>
  );
}

export default Studentlist;
