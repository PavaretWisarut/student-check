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
import CloseIcon from "@mui/icons-material/Close";
import { StudentsList } from "../ts/StudentList-interface";
import Swal from "sweetalert2";
import Cookies from "universal-cookie";
// import { UserContext } from "../auth/AuthContext";
import { useNavigate } from "react-router-dom";

function Studentlist() {
  // const { user , setUser} = useContext(UserContext);

  const theme = useTheme();
  const isMobileOrTablet = useMediaQuery(theme.breakpoints.down("md"));
  const gridWidth = isMobileOrTablet ? "100%" : "62%";

  const TextBox_size = useMediaQuery(theme.breakpoints.down("md"));
  const TextboxWidth = TextBox_size ? "50%" : "40%";

  const [openmodal, setOpenmodal] = useState(false); //add modal
  const [openEditmodal, setOpenEditmodal] = useState(false); //add modal
  const [openViewmodal, setOpenViewmodal] = useState(false); //add modal

  const [formData, setFormData] = useState({
    id: "",
    firstname: "",
    lastname: "",
    email: "",
    age: 0,
  });

  const [students, setStudents] = useState([]);
  const [textsearch, setTextsearch] = useState("");

  const cookies = new Cookies();
  const navigate = useNavigate();

  const access_token = cookies.get("accesstoken");

  useEffect(() => {
    if (access_token) {
      getUsers();
    } else {
      navigate("/");
    }
  }, [navigate, access_token]);

    /// check access token if not exist return to path /
  if (!access_token) {
    return null;
  }

  const getUsers = async () => {
    try {
      const getstudents = await instance.get(`/student/getstudents`);
      setStudents(getstudents.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getSearchUsers = async (name: string) => {
    try {
      const getstudents = await instance.get(
        `/student/getstudents?name=${name}`
      );
      setStudents(getstudents.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getUserByid = async (id: string) => {
    try {
      const getstudent = await instance.get(`/student/getstudents/${id}`);
      setFormData(getstudent.data.data[0]);
    } catch (error) {
      console.error(error);
    }
  };

  const searchButton = () => {
    getSearchUsers(textsearch);
  };

  const resetsearchButton = () => {
    setTextsearch("");
    getUsers();
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
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Data Invalid !",
          timer: 2000,
        });
        handleCloseAddModal();
      } else {
        await instance.post("student/addstudent", formData).then((response) => {
          console.log(response.data);
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Add Student Successfully",
            showConfirmButton: false,
            timer: 2000,
          });
          // alert("Add Student Successfully !");
          handleCloseAddModal();
          getUsers();
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const updateUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await instance.put("student/updatestudent", formData).then((response) => {
        console.log(response.data);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Edit Student Successfully",
          timer: 2000,
        });
        handleCloseEditModal();
        getUsers();
      });
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUser = async (id: string) => {
    console.log(id);
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You want to delete This Student ?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await instance.delete(`student/deletestudent/${id}`).then(() => {
            Swal.fire("Deleted!", "Deleted Student Successfully", "success");
            getUsers();
          });
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleOpenAddModal = () => {
    setOpenmodal(true);
  };

  const handleCloseAddModal = () => {
    setFormData({
      id: "",
      firstname: "",
      lastname: "",
      email: "",
      age: 0,
    });
    setOpenmodal(false);
  };

  const handleOpenEditModal = (id: string) => {
    setOpenEditmodal(true);
    getUserByid(id);
    console.log(formData);
  };

  const handleCloseEditModal = () => {
    setFormData({
      id: "",
      firstname: "",
      lastname: "",
      email: "",
      age: 0,
    });
    setOpenEditmodal(false);
  };

  const handleOpenViewModal = (id: string) => {
    setOpenViewmodal(true);
    getUserByid(id);
    console.log(formData);
  };

  const handleCloseViewModal = () => {
    setFormData({
      id: "",
      firstname: "",
      lastname: "",
      email: "",
      age: 0,
    });
    setOpenViewmodal(false);
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
        const handleView = async () => {
          const id = params.row.id;
          await handleOpenViewModal(id);
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
        const handleEdit = async () => {
          const id = params.row.id;
          console.log("Edit", params.row.id);
          await handleOpenEditModal(id);
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
            placeholder="Search By Firstname"
            value={textsearch}
            onChange={(e) => setTextsearch(e.target.value)}
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
            onClick={searchButton}
            sx={{
              backgroundColor: "#4F80C0",
              marginLeft: "1%",
            }}
            startIcon={<SearchIcon />}
          >
            Search
          </Button>
          <Button
            variant="contained"
            onClick={resetsearchButton}
            color="error"
            sx={{
              backgroundColor: "#FF6962",
              marginLeft: "0.5%",
              mr: "1%",
            }}
            startIcon={<CloseIcon />}
          >
            Reset
          </Button>
          <Button
            variant="contained"
            onClick={handleOpenAddModal}
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
          onClose={handleCloseAddModal}
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
                value={formData.age < 0 ? 0 : formData.age}
                onChange={handleChange}
                fullWidth
                sx={{
                  marginTop: 2,
                  "& input::-webkit-inner-spin-button, & input::-webkit-outer-spin-button":
                    {
                      "-webkit-appearance": "none",
                      margin: 0,
                    },
                  "& input[type=number]": {
                    "-moz-appearance": "textfield",
                  },
                }}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseAddModal}>Cancel</Button>
              <Button color="primary" type="submit">
                Save
              </Button>
            </DialogActions>
          </form>
        </Dialog>

        {/* Create A Modal to add student  */}

        {/* Create A Modal to Update student  */}

        <Dialog
          open={openEditmodal}
          onClose={handleCloseEditModal}
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
            Edit Students
          </DialogTitle>
          <form onSubmit={updateUser}>
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
                value={formData.age < 0 ? 0 : formData.age}
                onChange={handleChange}
                fullWidth
                sx={{
                  marginTop: 2,
                  "& input::-webkit-inner-spin-button, & input::-webkit-outer-spin-button":
                    {
                      "-webkit-appearance": "none",
                      margin: 0,
                    },
                  "& input[type=number]": {
                    "-moz-appearance": "textfield",
                  },
                }}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseEditModal}>Cancel</Button>
              <Button color="primary" type="submit">
                Save
              </Button>
            </DialogActions>
          </form>
        </Dialog>

        {/* Create A Modal to Update student  */}

        {/* Create A Modal to View student  */}
        <Dialog
          open={openViewmodal}
          onClose={handleCloseViewModal}
          PaperProps={{ style: { width: "500px", height: "425px" } }}
        >
          <DialogTitle
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: 1,
              fontSize: 20,
            }}
          >
            View Student
          </DialogTitle>
          <DialogContent>
            <TextField
              name="firstname"
              label="Firstname"
              value={formData.firstname}
              onChange={handleChange}
              fullWidth
              InputProps={{
                readOnly: true,
              }}
              sx={{ marginTop: 1 }}
            />
            <TextField
              name="lastname"
              label="Lastname"
              value={formData.lastname}
              onChange={handleChange}
              fullWidth
              InputProps={{
                readOnly: true,
              }}
              sx={{ marginTop: 2 }}
            />
            <TextField
              name="email"
              label="Email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              InputProps={{
                readOnly: true,
              }}
              sx={{ marginTop: 2 }}
            />
            <TextField
              name="age"
              label="Age"
              type="number"
              value={formData.age}
              onChange={handleChange}
              fullWidth
              InputProps={{
                readOnly: true,
              }}
              sx={{ marginTop: 2 }}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseViewModal} fullWidth color="primary">
              Cancel
            </Button>
          </DialogActions>
        </Dialog>

        {/* Create A Modal to View student  */}
      </Box>
    </div>
  );
}

export default Studentlist;
