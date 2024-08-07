import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const HeroBanner = () => {
  return (
    <Grid id={"Home"} container spacing={2} px={"7%"} py={"5%"} mt={2}>
      <Grid item xs={12}>
        <Box
          sx={{
            backgroundColor: "#e6eaee",
            maxWidth: "100%",
            height: { xs: "100vh", sm: "50vh" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            objectFit: "cover",
            objectPosition: "0px 0%",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            boxSizing: "border-box",
            borderRadius: "1rem",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography
              sx={{
                fontSize: "80px",
                fontWeight: "500",
                textTransform: "uppercase",
                fontFamily: "Syne,sans-serif",
              }}
            >
              I'M{" "}
              <span
                style={{
                  color: "transparent",
                  WebkitTextStroke: "1px",
                  WebkitTextStrokeColor: "ActiveBorder",
                }}
              >
                Sohaib
              </span>{" "}
              Ali
            </Typography>
            <Box
              sx={{
                bgcolor: "#f5f5f5",
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                maxWidth: "auto",
                maxHeight: "auto",
              }}
            >
              <Box>
                <Typography
                  sx={{
                    fontWeight: "400",
                    fontSize: "16px",
                    fontFamily: "Syne,sans-serif",
                  }}
                >
                  Frontend
                </Typography>
              </Box>
              <FiberManualRecordIcon sx={{ fontSize: "small" }} />
              <Box>
                <Typography
                  sx={{
                    fontWeight: "400",
                    fontSize: "16px",
                    fontFamily: "Syne,sans-serif",
                  }}
                >
                  Backend
                </Typography>
              </Box>
              <FiberManualRecordIcon sx={{ fontSize: "small" }} />
              <Box>
                <Typography
                  sx={{
                    fontWeight: "400",
                    fontSize: "16px",
                    fontFamily: "Syne,sans-serif",
                  }}
                >
                  DataBase
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default HeroBanner;
