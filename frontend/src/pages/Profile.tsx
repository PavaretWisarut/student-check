import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { Box, Button, TextField, Typography, Avatar } from "@mui/material";
import avatarthumbnail from "../assets/pictures/AvatarThumnail.jpg";
import instance from "../api/axiosinstance";
import { useTheme } from "@mui/material/styles";
// import { ProfileInterface } from "../ts/Profile-interface"
import useMediaQuery from "@mui/material/useMediaQuery";

function Profile() {
  const theme = useTheme();
  const isMobileOrTablet = useMediaQuery(theme.breakpoints.down("sm"));
  // const Responsive = isMobileOrTablet ? "100%" : "65%";
  const [profile, setProfile] = useState({
    id: "",
    firstname: "",
    lastname: "",
    email: "",
    age: 0,
  });

  useEffect(() => {
    getMyprofile();
  }, []);

  // waiting for api get member by
  const getMyprofile = async () => {
    try {
      const getstudent = await instance.get(
        `/student/getstudents/a6fd31c8-b593-484f-9989-332a461dfb7b`
      );
      setProfile(getstudent.data.data[0]);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

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
                value={profile.firstname}
                onChange={handleChange}
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
                value={profile.lastname}
                onChange={handleChange}
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
                value={profile.age < 0 ? 0 : profile.age}
                onChange={handleChange}
                variant="outlined"
                size="small"
                sx={{
                  width: "auto",
                  ml: 2,
                  mr: 4,
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

              <Typography gutterBottom variant="h5">
                Email
              </Typography>
              <TextField
                type="email"
                name="email"
                variant="outlined"
                onChange={handleChange}
                value={profile.email}
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
              onChange={handleChange}
              value={profile.firstname}
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
              onChange={handleChange}
              value={profile.lastname}
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
              onChange={handleChange}
              value={profile.age < 0 ? 0 : profile.age}
              size="small"
              sx={{
                width: "auto",
                ml: 2,
                textAlign: "center",
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

            <Typography gutterBottom variant="h5">
              Email
            </Typography>
            <TextField
              name="email"
              type="email"
              variant="outlined"
              onChange={handleChange}
              value={profile.email}
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
