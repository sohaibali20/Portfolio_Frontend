import React from "react";
import { Grid, Typography } from "@mui/material";
import ServiceCard from "../Cards/ServiceCard";
import LanguageIcon from "@mui/icons-material/Language";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import StyleIcon from "@mui/icons-material/Style";

const ServicesCard = [
  <ServiceCard
    icon={<LanguageIcon sx={{ color: "#77777d", fontSize: "50px" }} />}
    title={"Frontend Development"}
    subtitle={
      "Developed interactive and responsive user interfaces using HTML, CSS, and JavaScript frameworks like React."
    }
  />,

  <ServiceCard
    icon={<HistoryEduIcon sx={{ fontSize: "50px", color: "#77777d" }} />}
    title={"Backend Development"}
    subtitle={
      "Built robust and scalable server-side applications using Node.js and Express, with a focus on RESTful API development."
    }
  />,

  <ServiceCard
    icon={<StyleIcon sx={{ fontSize: "50px", color: "#77777d" }} />}
    title={"DataBase"}
    subtitle={
      "Implemented NoSQL solutions like MongoDB for flexible and scalable data storage in diverse application scenarios."
    }
  />,
];

const Service = () => {
  return (
    <Grid container spacing={1} mt={10}>
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
          SERVICES
        </Typography>
        <Typography
          fontFamily="Syne, sans-serif"
          fontSize={"50px"}
          fontWeight={500}
        >
          Quality Services
        </Typography>
      </Grid>
      <Grid item>
        <Grid
          container
          spacing={4}
          px={15}
          py={5}
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          {ServicesCard.map((item, index) => (
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

export default Service;
