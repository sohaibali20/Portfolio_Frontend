import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import Divider from '@mui/material/Divider';


const Experience = () => {
  return (
    <Grid id={"Resume"} container sx={{ bgcolor: "#e6eaee" }} spacing={1} mt={10} py={8}>
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
          EXPERIENCE
        </Typography>
        <Typography
          fontFamily="Syne, sans-serif"
          fontSize={"50px"}
          fontWeight={500}
        >
          Professional Resume
        </Typography>
      </Grid>
      <Grid container gap={4} display={"flex"} justifyContent={"center"} xs={12} px={3} py={6}>
        <Grid
          item
          sx={{ borderWidth: "2px", borderRadius:"0.5rem", borderStyle:"ridge", px:"30px" }}
          xs={12}
          sm={5}
          md={5}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"start"}
          alignItems={"start"}
        >
          <Box p={5} gap={2} display={"flex"} justifyContent={"start"} alignItems={"start"}>
            <Box>
              <DescriptionOutlinedIcon />
            </Box>
            <Box gap={1} display={"flex"} flexDirection={"column"}>
              <Typography fontFamily={"Syne,sans-serif"} fontSize={"16px"} fontWeight={400} color={"#070707"}>2020 - 2021</Typography>
              <Typography fontFamily={"Syne,sans-serif"} fontSize={"20px"} fontWeight={500} color={"#1d1d26"}>Freelancing</Typography>
              <Typography fontFamily={"Syne,sans-serif"} fontSize={"16px"} fontWeight={500} color={"#77777d"}>Shopify Developer</Typography>
            </Box>
          </Box>
            <Divider flexItem variant="middle"/>
          <Box p={5} gap={2} display={"flex"} justifyContent={"start"} alignItems={"start"}>
            <Box>
              <DescriptionOutlinedIcon />
            </Box>
            <Box gap={1} display={"flex"} flexDirection={"column"}>
            <Typography fontFamily={"Syne,sans-serif"} fontSize={"16px"} fontWeight={400} color={"#070707"}>2021 - 2022</Typography>
              <Typography fontFamily={"Syne,sans-serif"} fontSize={"20px"} fontWeight={500} color={"#1d1d26"}>Techlogics</Typography>
              <Typography fontFamily={"Syne,sans-serif"} fontSize={"16px"} fontWeight={500} color={"#77777d"}>FrontEnd Developer</Typography>
            </Box>
          </Box>
          {/* <Divider flexItem variant="middle"/>
          <Box p={5} gap={2} display={"flex"} justifyContent={"start"} alignItems={"start"}>
            <Box>
              <DescriptionOutlinedIcon />
            </Box>
            <Box gap={1} display={"flex"} flexDirection={"column"}>
              <Typography fontFamily={"Syne,sans-serif"} fontSize={"16px"} fontWeight={400} color={"#070707"}>2021 - Present</Typography>
              <Typography fontFamily={"Syne,sans-serif"} fontSize={"20px"} fontWeight={500} color={"#1d1d26"}>Text to be edited</Typography>
              <Typography fontFamily={"Syne,sans-serif"} fontSize={"16px"} fontWeight={500} color={"#77777d"}>Web Designer</Typography>
            </Box>
          </Box> */}
        </Grid>
        <Grid
          item
          sx={{ borderWidth: "2px", borderRadius:"0.5rem", borderStyle:"ridge", px:"30px" }}
          xs={12}
          sm={5}
          md={5}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"start"}
          alignItems={"start"}
        >
          <Box p={5} gap={2} display={"flex"} justifyContent={"start"} alignItems={"start"}>
            <Box>
              <DescriptionOutlinedIcon />
            </Box>
            <Box gap={1} display={"flex"} flexDirection={"column"}>
              <Typography fontFamily={"Syne,sans-serif"} fontSize={"16px"} fontWeight={400} color={"#070707"}>2022 - 2023</Typography>
              <Typography fontFamily={"Syne,sans-serif"} fontSize={"20px"} fontWeight={500} color={"#1d1d26"}>Futurenostics</Typography>
              <Typography fontFamily={"Syne,sans-serif"} fontSize={"16px"} fontWeight={500} color={"#77777d"}>BackEnd Developer</Typography>
            </Box>
          </Box>
          <Divider flexItem variant="middle"/>
          <Box p={5} gap={2} display={"flex"} justifyContent={"start"} alignItems={"start"}>
            <Box>
              <DescriptionOutlinedIcon />
            </Box>
            <Box gap={1} display={"flex"} flexDirection={"column"}>
              <Typography fontFamily={"Syne,sans-serif"} fontSize={"16px"} fontWeight={400} color={"#070707"}>2023 - Present</Typography>
              <Typography fontFamily={"Syne,sans-serif"} fontSize={"20px"} fontWeight={500} color={"#1d1d26"}>Zaytrics</Typography>
              <Typography fontFamily={"Syne,sans-serif"} fontSize={"16px"} fontWeight={500} color={"#77777d"}>MERN Stack Developer</Typography>
            </Box>
          </Box>
          {/* <Divider flexItem variant="middle"/>
          <Box p={5} gap={2} display={"flex"} justifyContent={"start"} alignItems={"start"}>
            <Box>
              <DescriptionOutlinedIcon />
            </Box>
            <Box gap={1} display={"flex"} flexDirection={"column"}>
              <Typography fontFamily={"Syne,sans-serif"} fontSize={"16px"} fontWeight={400} color={"#070707"}>2021 - Present</Typography>
              <Typography fontFamily={"Syne,sans-serif"} fontSize={"20px"} fontWeight={500} color={"#1d1d26"}>Text to be edited</Typography>
              <Typography fontFamily={"Syne,sans-serif"} fontSize={"16px"} fontWeight={500} color={"#77777d"}>Web Designer</Typography>
            </Box>
          </Box> */}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Experience;
