import { Box, Button, Grid, Typography, keyframes } from "@mui/material";
import React from "react";
import "./../CustomCSS/PulsatingCircle.css";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
// import AssignmentIcon from "@mui/icons-material/Assignment";
import Avatar from "@mui/material/Avatar";

const spin = keyframes`
    0% {
      transform: scale(.33);
    }
    80%, 100% {
      opacity: 0;
    }
`;

const onDownload = () => {
  const link = document.createElement("a");
  link.download = `Sohaib's CV 2023.pdf`;
  link.href = "./Sohaib's CV 2023.pdf";
  link.click();
};

const IntroductionCV = () => {
  return (
    <Grid
      id={"About"}
      container
      spacing={0}
      px={"8%"}
      py={"5%"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Grid item xs={12} sm={12} md={6} px={"3%"}>
        <Box
          sx={{ borderStyle: "ridge", py: "30px", borderRadius: "1rem" }}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Box>
            <Avatar
              alt="Remy Sharp"
              src="sohaib.png"
              sx={{
                width: { xs: "200px", sm: "300px", md: "350px" },
                height: { xs: "200px", sm: "300px", md: "350px" },
              }}
            />
          </Box>
          <Box mt={2}>
            <Typography
              sx={{
                fontSize: "30px",
                color: "#1d1d26",
                textTransform: "capitalize",
                fontWeight: "500",
                fontFamily: "Syne,sans-serif",
                pt: "30px",
              }}
            >
              Sohaib Ali Abbasi
            </Typography>
          </Box>
          <Box
            mt={4}
            sx={{
              borderStyle: "groove",
              borderRadius: "3rem",
              padding: "2%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: "15px",
                color: "#1d1d26",
                textTransform: "capitalize",
                fontWeight: "500",
                fontFamily: "Syne,sans-serif",
                // pt: "30px",
              }}
            >
              Available for Work
            </Typography>
            <Box>
              <Box
                sx={{
                  borderRadius: "100%",
                  backgroundColor: "#08ff14",
                  width: 20,
                  height: 20,
                  animation: `${spin} 1.25s cubic-bezier(0.455, 0.03, 0.515, 0.955) -.4s infinite`,
                }}
              />
            </Box>
          </Box>
          <Box
            gap={3}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            mt={4}
          >
            <FacebookIcon />
            <XIcon />
            <LinkedInIcon />
            <GitHubIcon />
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        <Box
          sx={{ py: "30px" }}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"start"}
          alignItems={"Start"}
        >
          <Box>
            <Typography
              sx={{ fontSize: "55px", fontFamily: "Syne,sans-serif" }}
            >
              Hello, I’m Sohaib Ali, skilled frontend and backend developer with expertise in full-stack development.
            </Typography>
          </Box>
          <Box mt={1}>
            <Button
              onClick={onDownload}
              variant="contained"
              size="large"
              sx={{
                p: "20px",
                bgcolor: "black",
                color: "white",
                "&:hover": {
                  bgcolor: "whitesmoke",
                  color: "black",
                  border: "Highlight",
                  // borderWidth: "1px",
                },
              }}
            >
              DOWNLOAD CV
            </Button>
          </Box>
          <Grid
            container
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            mt={2}
          >
            <Grid item xs={12} sm={6} display={"flex"} alignItems={"start"}>
              <List disablePadding={true}>
                <ListItem disableGutters>
                  <ListItemIcon>
                    <ArrowOutwardIcon />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography
                      sx={{
                        color: "#77777d",
                        fontSize: "16px",
                        fontFamily: "Syne,sans-serif",
                      }}
                    >
                      React Js
                    </Typography>
                  </ListItemText>
                </ListItem>
                <ListItem disableGutters>
                  <ListItemIcon>
                    <ArrowOutwardIcon />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography
                      sx={{
                        color: "#77777d",
                        fontSize: "16px",
                        fontFamily: "Syne,sans-serif",
                      }}
                    >
                      Node Js
                    </Typography>
                  </ListItemText>
                </ListItem>
                <ListItem disableGutters>
                  <ListItemIcon>
                    <ArrowOutwardIcon />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography
                      sx={{
                        color: "#77777d",
                        fontSize: "16px",
                        fontFamily: "Syne,sans-serif",
                      }}
                    >
                      Frontend
                    </Typography>
                  </ListItemText>
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={12} sm={6} display={"flex"} alignItems={"start"}>
              <List disablePadding={true}>
                <ListItem disableGutters>
                  <ListItemIcon>
                    <ArrowOutwardIcon />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography
                      sx={{
                        color: "#77777d",
                        fontSize: "16px",
                        fontFamily: "Syne,sans-serif",
                      }}
                    >
                      Backend
                    </Typography>
                  </ListItemText>
                </ListItem>
                <ListItem disableGutters>
                  <ListItemIcon>
                    <ArrowOutwardIcon />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography
                      sx={{
                        color: "#77777d",
                        fontSize: "16px",
                        fontFamily: "Syne,sans-serif",
                      }}
                    >
                      NoSQL
                    </Typography>
                  </ListItemText>
                </ListItem>
                <ListItem disableGutters>
                  <ListItemIcon>
                    <ArrowOutwardIcon />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography
                      sx={{
                        color: "#77777d",
                        fontSize: "16px",
                        fontFamily: "Syne,sans-serif",
                      }}
                    >
                      SQL
                    </Typography>
                  </ListItemText>
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default IntroductionCV;
