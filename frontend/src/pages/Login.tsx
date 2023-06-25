import * as React from "react";
// import "./App.css";
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
} from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      <Container maxWidth="xs">
        <Box
          sx={{
            display: "flex",
            // justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            height: 600,
            mt: 25,
          }}
        >
          <Avatar sx={{ bgcolor: deepPurple[500] , mb: 1}}>
            <LockOutlinedIcon />
          </Avatar>

          <Typography variant="h5">Sign in</Typography>
          <TextField
            required
            id="Email"
            label="Email Address"
            fullWidth
            name="Email"
            autoComplete="Email"
            autoFocus
            sx={{ mt: 2 }}
          />
          <TextField
            required
            id="Password"
            label="Password"
            fullWidth
            name="Password"
            autoComplete="Password"
            type="password"
            autoFocus
            sx={{ mt: 2 }}
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start", // Align FormGroup to the left
              width: "100%",
              mb: 2,
            }}
          >
            <FormGroup>
              <FormControlLabel control={<Checkbox />} label="Remember me" />
            </FormGroup>
          </Box>
          <Link to={"/studentlist"} style={{width : "100%"}} >
            <Button variant="contained" fullWidth>
              Sign in
            </Button>
          </Link>
          <Grid container sx={{ mt: 2, mb: 8 }}>
            <Grid item xs>
              <MuiLink target="_blank">Forgor Password?</MuiLink>
            </Grid>
            <Grid item>
              <MuiLink href="#">Don't have an account? sign up</MuiLink>
            </Grid>
          </Grid>
          <Typography
            textAlign="center"
            variant="inherit"
            color="text.secondary"
          >
            Copyright ©{" "}
            {/* <MuiLink
              href="https://www.google.com"
              target="_blank"
              variant="inherit"
              color="text.primary"
              underline="none"
            >
              {" "}
              Click Here My Website{" "}
            </MuiLink>{" "} */}
            Pavaret Wisarut
            2023.
          </Typography>
        </Box>
      </Container>
    </div>
  );
}

export default Login;
