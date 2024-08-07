import { Avatar, Box, Typography } from "@mui/material";
import React from "react";

const Review = ({ pic, des, title, subtitle }) => {
  return (
    <Box
      sx={{
        p:"20px",
        gap:"20px",
        borderRadius:"0.5rem",
        borderStyle: "solid",
        borderWidth: "1px",
        borderColor: "lightgrey",
        display: "flex",
        flexDirection:"column",
        justifyContent: "start",
        alignItems: "start",
        "&hover": {
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
      <Avatar alt="Remy Sharp" src={pic} sx={{ width: 56, height: 56 }} />
      <Typography
        fontFamily={"Syne,sans-serif"}
        fontSize={"16px"}
        fontWeight={400}
        color={"#77777d"}
      >
        {des}
      </Typography>

      <Typography
        fontFamily={"Syne,sans-serif"}
        fontSize={"20px"}
        fontWeight={500}
        color={"#1d1d26"}
      >
        {title}
      </Typography>
      <Typography
        fontFamily={"Syne,sans-serif"}
        fontSize={"14px"}
        fontWeight={400}
        color={"#77777d"}
      >
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Review;
