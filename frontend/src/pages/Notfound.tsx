import React from "react";
import error from "../assets/pictures/Oops! 404 Error with a broken robot-cuate.png";
import { Container, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
function Notfound() {
  return (
    <React.Fragment>
      <div className="background">
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "center",
              mt: 10,
            }}
          >
            <img
              src={error}
              alt="ไม่พบหน้าที่ต้องการ"
              style={{ width: "50%" }}
            ></img>

            <Link to={"/"}>
              <Button
                sx={{
                  mt: 5,
                  backgroundColor: "#2E3136",
                  color: "white",
                  ":hover": {
                    backgroundColor: "#293242",
                    color: "white",
                  },
                }}
                variant="contained"
              >
                Back to Homepage
              </Button>
            </Link>
          </Box>
        </Container>
      </div>
    </React.Fragment>
  );
}

export default Notfound;
