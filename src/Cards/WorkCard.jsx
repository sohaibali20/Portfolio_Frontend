import {Box, Typography } from "@mui/material";
import React from "react";

const WorkCard = ({heading,des, img}) => {
  return (
    <Box sx={{
        border:"solid",
        borderWidth:"1px",
        borderRadius:"0.5rem",
        borderColor:"lightgrey",
        boxShadow:
            "rgba(0, 0, 0, 0.1) 0rem 0.625rem 0.9375rem -0.1875rem, rgba(0, 0, 0, 0.05) 0rem 0.25rem 0.375rem -0.125rem",
            transform:
              "perspective(999px) rotateX(0deg) translate3d(0px, 0px, 0px)",
              transformOrigin: "50% 10px",
              willChange: "transform, boxShadow",
              transition: "transform 200ms ease-out",
              backfaceVisibility: "hidden",
              opacity: "1",
        "&:hover":{
              transform: "perspective(999px)  translate3d(0px, -4px, 5px)",
              }
    }}>
      <Box
        sx={{
        //   borderRadius: "0.5rem",
          overflow: "hidden",
          background: "white",
          
            
        }}
      >
        <img src={img} alt="img" style={{ width: "100%" }} />
      </Box>
      <Box mt={3}>
        <Typography ml={1}
          sx={{
            fontSize: "16px",
                color: "#77777d",
                fontWeight: "400",
                fontFamily: "Syne,sans-serif",
          }}
        >
          {heading}
        </Typography>
        <Typography ml={1} mt={1} mb={2}
          sx={{
            fontSize: "20px",
                color: "#1d1d26",
                fontWeight: "500",
                fontFamily: "Syne,sans-serif",
                
          }}
        >
          {des}
        </Typography>
      </Box>
    </Box>
  );
};

export default WorkCard;
