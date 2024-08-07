import { Grid, Typography } from "@mui/material";
import React from "react";
import WorkCard from "../Cards/WorkCard";

const cardsData = [
  <WorkCard heading={"Frontend"} des={"Otis Kit Pro"} img={"123.jfif"} />,
  <WorkCard
    heading={"Fullstack"}
    des={"Portfolio"}
    img={"portfolio-webflow-free.png"}
  />,
];

const Works = () => {
  return (
    <Grid id={"Projects"} container mt={10}>
      <Grid
        item
        xs={12}
        md={12}
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Typography
          fontFamily="Syne, sans-serif"
          fontSize={"16px"}
          color={"#77777d"}
        >
          WORKS
        </Typography>
        <Typography
          fontFamily="Syne, sans-serif"
          fontSize={"50px"}
          fontWeight={500}
        >
          Creative Portfolio
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Grid
          container
          spacing={5}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            px: { md: 20 },
            py: { md: 8 },
          }}
        >
          {cardsData.map((item, index) => (
            <Grid
              item
              xs={12}
              md={4}
              key={index}
              sx={{
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
              }}
            >
              {item}
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Works;
