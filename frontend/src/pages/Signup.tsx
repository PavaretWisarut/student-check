import React, { useState } from "react";
import {
  Container,
  Avatar,
  Box,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import { amber } from "@mui/material/colors";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import instance from "../api/axiosinstance";
import Swal from "sweetalert2";
import { Link , useNavigate } from "react-router-dom";

function Signup() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstname: "",
    lastname: "",
    age: 0,
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const resetForm = () => {
    setFormData({
      email: "",
      password: "",
      firstname: "",
      lastname: "",
      age: 0,
    });
  };

  const registerSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await instance.post("auth/register", formData).then((response) => {
        console.log(response.data);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Register Successfully Redirect To login Page",
          showConfirmButton: false,
          timer: 3000,
        });
        resetForm()
      })
      navigate("/")
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <React.Fragment>
      <Container maxWidth="xs">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: 600,
            mt: 20,
          }}
        >
          <Avatar sx={{ bgcolor: amber[500], mb: 1 }}>
            <AppRegistrationIcon />
          </Avatar>
          <Typography variant="h5">Sign Up</Typography>
          <form onSubmit={registerSubmit}>
            <TextField
              required
              label="Email Address"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              name="email"
              type="email"
              sx={{ mt: 2 }}
            />
            <TextField
              required
              label="Password"
              value={formData.password}
              onChange={handleChange}
              fullWidth
              name="password"
              type="password"
              sx={{ mt: 2 }}
            />
            <TextField
              required
              label="Firstname"
              value={formData.firstname}
              onChange={handleChange}
              fullWidth
              name="firstname"
              type="text"
              sx={{ mt: 2 }}
            />
            <TextField
              required
              label="Lastname"
              value={formData.lastname}
              onChange={handleChange}
              fullWidth
              name="lastname"
              type="text"
              sx={{ mt: 2 }}
            />
            <TextField
              required
              label="Age"
              value={formData.age < 0 ? 0 : formData.age}
              onChange={handleChange}
              fullWidth
              name="age"
              type="number"
              sx={{
                marginBottom: 2,
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
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
              }}
            >
              <Button
                component={Link}
                to="/"
                variant="contained"
                fullWidth
                sx={{ mr: 2 }}
              >
                Cancel
              </Button>

              <Button type="submit" variant="contained" fullWidth>
                Sign Up
              </Button>
            </Box>
          </form>
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default Signup;
