import React, { useState, useEffect } from "react";
import {
  DataGrid,
  GridColDef,
  GridValueGetterParams,
  GridCellParams,
} from "@mui/x-data-grid";
import "../App.css";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  Box,
  Button,
  TextField,
  InputAdornment,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import Navbar from "../components/Navbar";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import instance from "../api/axiosinstance";
import { StudentsList } from "../ts/StudentList-interface";

function Studentlist() {
  // const [open, setOpen] = useState(false);
  const [openmodal, setOpenmodal] = useState(false);

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    age: 0,
  });

  const [students, setStudents] = useState([]);

  const getUsers = async () => {
    try {
      const getstudents = await instance.get("/student/getstudents");
      setStudents(getstudents.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const addUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (
        formData.firstname == "" &&
        formData.lastname == "" &&
        formData.email == "" &&
        formData.age == 0
      ) {
        alert("Data Invalid !");
      } else {
        await instance.post("student/addstudent", formData).then((response) => {
          console.log(response.data);
          alert("Add Student Successfully !");
          handleCloseModal();
          getUsers();
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const deleteUser = async (id:string) => {
    console.log(id);
    try {
      await instance.delete(`student/deletestudent/${id}`)
      .then(()=>{
        alert("Delete Student Successfully !")
        getUsers();
      })
    } catch (error) {
        console.log(error);
    }
  };

  useEffect(() => {
    console.log(students);
  }, [students]);

  useEffect(() => {
    getUsers();
  }, []);

  const theme = useTheme();
  const isMobileOrTablet = useMediaQuery(theme.breakpoints.down("md"));
  const gridWidth = isMobileOrTablet ? "100%" : "62%";

  const TextBox_size = useMediaQuery(theme.breakpoints.down("md"));
  const TextboxWidth = TextBox_size ? "50%" : "40%";

  const handleOpenModal = () => {
    setOpenmodal(true);
  };

  const handleCloseModal = () => {
    setFormData({
      firstname: "",
      lastname: "",
      email: "",
      age: 0,
    });
    setOpenmodal(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const columns: GridColDef[] = [
    {
      field: "no",
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
      field: "firstname",
      headerName: "First name",
      width: 130,
      align: "center",
      headerAlign: "center",
      disableColumnMenu: true,
    },
    {
      field: "lastname",
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
      field: "email",
      headerName: "Email",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 250,
      // valueGetter: (params: GridValueGetterParams) =>
      //   `${params.row.firstName || ""} ${params.row.lastName || ""}`,
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

        const id = params.row.id;

        const handleDelete = async (e: React.MouseEvent<HTMLButtonElement>) => {
          e.preventDefault();
          await deleteUser(id);
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

  const rows = students.map((v: StudentsList, k) => ({
    no: k + 1,
    id: v.id,
    firstname: v.firstname,
    lastname: v.lastname,
    age: v.age,
    email: v.email,
  }));

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
        <Typography gutterBottom variant="h4" sx={{ mt: 5 }}>
          Student List
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginTop: 2,
            justifyContent: "center",
            width: "100%",
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
              width: TextboxWidth,
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
            onClick={handleOpenModal}
            sx={{
              backgroundColor: "#F2C94C",
              ":hover": { backgroundColor: "#DFA003" },
            }}
            startIcon={<AddIcon />}
          >
            Add
          </Button>
        </Box>

        {/* Create A Table Data to add student  */}
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
          sx={{ width: gridWidth, overflowX: "auto", mt: 4, fontSize: "1rem" }}
        />

        {/* Create A Table Data to add student  */}

        {/* Create A Modal to add student  */}
        <Dialog
          open={openmodal}
          onClose={handleCloseModal}
          PaperProps={{ style: { width: "500px", height: "450px" } }}
        >
          <DialogTitle
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: 1,
              fontSize: 20,
            }}
          >
            Add Students
          </DialogTitle>
          <form onSubmit={addUser}>
            <DialogContent>
              <TextField
                name="firstname"
                label="Firstname"
                value={formData.firstname}
                onChange={handleChange}
                fullWidth
                sx={{ marginTop: 1 }}
              />
              <TextField
                name="lastname"
                label="Lastname"
                value={formData.lastname}
                onChange={handleChange}
                fullWidth
                sx={{ marginTop: 2 }}
              />
              <TextField
                name="email"
                label="Email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                fullWidth
                sx={{ marginTop: 2 }}
              />
              <TextField
                name="age"
                label="Age"
                type="number"
                value={formData.age}
                onChange={handleChange}
                fullWidth
                sx={{ marginTop: 2 }}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseModal}>Cancel</Button>
              <Button color="primary" type="submit">
                Save
              </Button>
            </DialogActions>
          </form>
        </Dialog>

        {/* Create A Modal to add student  */}
      </Box>
    </div>
  );
}

export default Studentlist;
