import React, { useState } from "react";
import {
  Container,
  Avatar,
  Box,
  Typography,
  TextField,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Button,
  Grid,
  Link as MuiLink,
  // Paper,
} from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Link, useNavigate } from "react-router-dom";
import instance from "../api/axiosinstance";
import Swal from "sweetalert2";
import Cookies from "universal-cookie";
// import { UserContext } from "../auth/AuthContext";

function Login() {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });


  const cookies = new Cookies();
  const navigate = useNavigate();
  // const userContext = useContext(UserContext);

  const loginSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // userContext.setUser(true);
    e.preventDefault();
    instance
      .post("auth/login", loginForm)
      .then((response) => {
        const expires_time = response.data.data.expire_in;
        const access_token = response.data.data.accesstoken;
        const refresh_token = response.data.data.refreshtoken;

        // const expiresInOneMinute = new Date();
        // expiresInOneMinute.setMinutes(expiresInOneMinute.getMinutes() + 1);

        cookies.set("accesstoken", access_token, {
          expires: new Date(expires_time * 1000),
        });

        // cookies.set("accesstoken", access_token, {
        //   expires: expiresInOneMinute,
        // });
        cookies.set("refreshtoken", refresh_token);

        console.log(cookies.get("Mycat"));

        Swal.fire({
          position: "center",
          icon: "success",
          title: "Welcome !",
          text: "Sign in Successfully !",
          showConfirmButton: false,
          timer: 2000,
        });

        setTimeout(() => {
          navigate("/studentlist");
        }, 2000);
      })
      .catch((error) => {
        if (error.response && error.response.status === 400) {
          console.log("Bad Request:", error.response.data);
          Swal.fire({
            icon: "error",
            title: "Not Found !",
            text: "Email doesn't Exist in database",
          });
        } else {
          console.log("Error:", error.message);
        }
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginForm({
      ...loginForm,
      [e.target.name]: e.target.value,
    });
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
            mt: 25,
          }}
        >
          <Avatar sx={{ bgcolor: deepPurple[500], mb: 1 }}>
            <LockOutlinedIcon />
          </Avatar>

          <Typography variant="h5">Sign in</Typography>
          <form onSubmit={loginSubmit}>
            <TextField
              required
              id="Email"
              label="Email Address"
              fullWidth
              value={loginForm.email}
              onChange={handleChange}
              name="email"
              autoComplete="Email"
              autoFocus
              sx={{ mt: 2 }}
            />
            <TextField
              required
              id="Password"
              label="Password"
              fullWidth
              value={loginForm.password}
              onChange={handleChange}
              name="password"
              autoComplete="Password"
              type="password"
              autoFocus
              sx={{ mt: 2 }}
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                width: "100%",
                mb: 2,
              }}
            >
              <FormGroup>
                <FormControlLabel control={<Checkbox />} label="Remember me" />
              </FormGroup>
            </Box>
            {/* <Link to={"/"} style={{ width: "100%" }}> */}
            <Button type="submit" variant="contained" fullWidth>
              Sign in
            </Button>
            {/* </Link> */}
          </form>
          <Grid container sx={{ mt: 2, mb: 8 }}>
            <Grid item xs>
              <MuiLink href="#" target="_blank">
                Forgor Password?
              </MuiLink>
            </Grid>
            <Grid item>
              <MuiLink component={Link} to="/signup">
                Don't have an account? sign up
              </MuiLink>
            </Grid>
          </Grid>
          <Typography
            textAlign="center"
            variant="inherit"
            color="text.secondary"
          >
            Copyright © Student Check Project , Pavaret Wisarut 2023.
          </Typography>
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default Login;
