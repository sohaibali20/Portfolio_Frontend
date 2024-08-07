import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const ServiceCard = ({ icon, title, subtitle }) => {
  return (
    <Box
      sx={{
        // "linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232))"
        backgroundColor: "#e6eaee",
        // color: "white",
        border: "solid",
        borderColor: "#e6eaee",
        borderWidth: "1px",
        borderRadius: "10px",
        py: "60px",
        px: "40px",
        "&:hover": {
          border: "solid",
          borderColor: "black",
          borderWidth: "1px",
          transitionBehavior: "normal",
          transitionDuration: "0.5s",
          transitionTimingFunction: "ease",
          transitionDelay: "0s",
          transitionProperty: "all",
        },
      }}
    >
      <Grid
        container
        spacing={2}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"start"}
        alignItems={"start"}
      >
        <Grid item xs={6}>
          {icon}
        </Grid>
        <Grid item gap={1} xs={12}>
          <Typography
            sx={{
              fontFamily: "Syne,sans-serif",
              fontSize: "20px",
              color: "#1d1d26",
            }}
          >
            {title}
          </Typography>

          <Typography
            sx={{
              fontFamily: "Syne,sans-serif",
              fontSize: "16px",
              color: "#77777d",
            }}
          >
            {subtitle}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ServiceCard;
