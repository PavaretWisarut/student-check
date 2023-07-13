import React from "react";
import Navbar from "../components/Navbar";
import {
  Box,
  Button,
  TextField,
  // InputAdornment,
  Typography,
  // Dialog,
  // DialogTitle,
  // DialogContent,
  // DialogActions,
  Avatar,
} from "@mui/material";
import avatarthumbnail from "../assets/pictures/AvatarThumnail.jpg";
// import SearchIcon from "@mui/icons-material/Search";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

function Profile() {
  const theme = useTheme();
  const isMobileOrTablet = useMediaQuery(theme.breakpoints.down("sm"));
  // const Responsive = isMobileOrTablet ? "100%" : "65%";

  return (
    <React.Fragment>
      <Navbar />
      {!isMobileOrTablet ? (
        <>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography gutterBottom variant="h4" sx={{ mt: 5 }}>
              Your Profile
            </Typography>

            <Avatar
              alt="My profile"
              src={avatarthumbnail}
              sx={{ width: "200px", height: "auto", mt: 2 }}
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "auto",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                mb: 2,
                mt: 5,
              }}
            >
              <Typography gutterBottom variant="h5">
                Firstname
              </Typography>
              <TextField
                variant="outlined"
                name="firstname"
                placeholder="Pavaret"
                size="small"
                sx={{
                  width: "auto",
                  ml: 2,
                  mr: 2,
                }}
              />

              <Typography gutterBottom variant="h5">
                Lastname
              </Typography>
              <TextField
                variant="outlined"
                name="lastname"
                placeholder="Wisarut"
                size="small"
                sx={{
                  width: "auto",
                  ml: 2,
                }}
              />
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                mb: 2,
                mt: 5,
              }}
            >
              <Typography gutterBottom variant="h5">
                Age
              </Typography>
              <TextField
                type="number"
                name="age"
                variant="outlined"
                placeholder="24"
                size="small"
                sx={{
                  width: "auto",
                  ml: 2,
                  mr: 4,
                }}
              />

              <Typography gutterBottom variant="h5">
                Email
              </Typography>
              <TextField
                type="email"
                name="email"
                variant="outlined"
                placeholder="Pavaret@gmail.com"
                size="small"
                sx={{
                  width: "auto",
                  ml: 2,
                }}
              />
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                mb: 2,
                mt: 5,
              }}
            >
              <Button
                variant="contained"
                color="error"
                sx={{ mr: 4, width: 100 }}
              >
                Cancel
              </Button>
              <Button variant="contained" color="primary" sx={{ width: 100 }}>
                Save
              </Button>
            </Box>
          </Box>
        </>
      ) : (
        <>
          {/* This is Responsive for mobile size */}

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography gutterBottom variant="h4" sx={{ mt: 5 }}>
              Your Profile
            </Typography>

            <Avatar
              alt="My profile"
              src={avatarthumbnail}
              sx={{ width: "200px", height: "auto", mt: 2 }}
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "auto",
            }}
          >
            <Typography gutterBottom variant="h5">
              Firstname
            </Typography>
            <TextField
              name="firstname"
              variant="outlined"
              placeholder="Pavaret"
              size="small"
              sx={{
                width: "auto",
                ml: 2,
              }}
            />

            <Typography gutterBottom variant="h5">
              Lastname
            </Typography>
            <TextField
              name="lastname"
              variant="outlined"
              placeholder="Wisarut"
              size="small"
              sx={{
                width: "auto",
                ml: 2,
              }}
            />

            <Typography gutterBottom variant="h5">
              Age
            </Typography>
            <TextField
              name="age"
              type="number"
              variant="outlined"
              placeholder="24"
              size="small"
              sx={{
                width: "auto",
                ml: 2,
                textAlign: "center",
              }}
            />

            <Typography gutterBottom variant="h5">
              Email
            </Typography>
            <TextField
              name="email"
              type="email"
              variant="outlined"
              placeholder="Pavaret@gmail.com"
              size="small"
              sx={{
                width: "auto",
                ml: 2,
              }}
            />

            <Button
              variant="contained"
              color="error"
              fullWidth
              sx={{ mt: 2, mb: 2, textAlign: "center" }}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mb: 2 }}
            >
              Save
            </Button>
            {/* </Box> */}
          </Box>
        </>
      )}
    </React.Fragment>
  );
}

export default Profile;
