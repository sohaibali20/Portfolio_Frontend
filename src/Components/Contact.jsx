import { Box, Grid, Typography, TextField, Button } from "@mui/material";
import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import { useFormik } from "formik";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import axios from "axios";
// import * as Yup from "yup";

// const validationSchema = Yup.object({
//   fullName: Yup.string().required("Full Name is required"),
//   email: Yup.string()
//     .email("Invalid email format")
//     .required("Email is required"),
//   message: Yup.string().required("Message is required"),
// });

const Contact = () => {
  // const submit = async(e)=>{
  //     e.preventDefault()
  //     try {
  //       await axios.post("http://localhost:8000/api/contact/submit", fullName,email,message)
  //     }
  //     catch (e) {
  //      console.log(e);
  //     }
  // }

  // const formik = useFormik({
  //   initialValues: {
  //     fullName: "",
  //     email: "",
  //     message: "",
  //   },
  //   // validationSchema: validationSchema,
  //   // onSubmit: (values) => {
  //   //   console.log(values);
  //   // },
  // });

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      message: "",
    },
    // validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        await axios.post("http://localhost:8000/api/contact/submit", values);
      } catch (e) {
        console.log(e);
      }
    },
  });
  return (
    <Grid id={"Contact"} container mt={10}>
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
      <Grid
        container
        gap={4}
        display={"flex"}
        justifyContent={"flex-start"}
        alignItems={"center"}
        xs={12}
        py={6}
        sx={{ px: { md: 15, xs: 5 } }}
      >
        <Grid
          item
          sx={{ borderRadius: "0.5rem", px: "15px", bgcolor: "#e6eaee" }}
          xs={12}
          sm={5}
          md={4}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"start"}
          alignItems={"start"}
        >
          <Box
            p={5}
            gap={2}
            display={"flex"}
            justifyContent={"start"}
            alignItems={"start"}
          >
            <Box gap={1} display={"flex"} flexDirection={"column"}>
              <LocationOnIcon />
              <Typography
                fontFamily={"Syne,sans-serif"}
                fontSize={"20px"}
                fontWeight={500}
                color={"#1d1d26"}
              >
                Our Office:
              </Typography>
              <Typography
                fontFamily={"Syne,sans-serif"}
                fontSize={"16px"}
                fontWeight={500}
                color={"#77777d"}
              >
                Islamabad, Pakistan
              </Typography>
            </Box>
          </Box>

          <Box
            p={5}
            gap={2}
            display={"flex"}
            justifyContent={"start"}
            alignItems={"start"}
          >
            <Box gap={1} display={"flex"} flexDirection={"column"}>
              <CallIcon />
              <Typography
                fontFamily={"Syne,sans-serif"}
                fontSize={"20px"}
                fontWeight={500}
                color={"#1d1d26"}
              >
                Contact Number:
              </Typography>
              <Typography
                fontFamily={"Syne,sans-serif"}
                fontSize={"16px"}
                fontWeight={500}
                color={"#77777d"}
              >
                +92 306 1661304
              </Typography>
            </Box>
          </Box>

          <Box
            p={5}
            gap={2}
            display={"flex"}
            justifyContent={"start"}
            alignItems={"start"}
          >
            <Box gap={1} display={"flex"} flexDirection={"column"}>
              <EmailIcon />
              <Typography
                fontFamily={"Syne,sans-serif"}
                fontSize={"20px"}
                fontWeight={500}
                color={"#1d1d26"}
              >
                Email Us:
              </Typography>
              <Typography
                fontFamily={"Syne,sans-serif"}
                fontSize={"16px"}
                fontWeight={500}
                color={"#77777d"}
              >
                sohaibalix@mail.com
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item md={7}>
          <Box p={2}>
            <form onSubmit={formik.handleSubmit}>
              <Grid container spacing={5}>
                <Grid item xs={12} sm={6}>
                  {/* <Typography fontSize={"16px"} fontFamily={"Syne,sans-serif"} fontWeight={500} color={"#77777d"}>
                Full Name
            </Typography> */}
                  <TextField
                    fullWidth
                    id="fullName"
                    name="fullName"
                    label="Full Name"
                    value={formik.values.fullName}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.fullName && Boolean(formik.errors.fullName)
                    }
                    //   helperText={formik.touched.fullName && formik.errors.fullName}
                    helperText="Enter Your Name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  {/* <Typography fontSize={"16px"} fontFamily={"Syne,sans-serif"} fontWeight={500} color={"#77777d"}>
                Email Address
            </Typography> */}
                  <TextField
                    fullWidth
                    id="email"
                    name="email"
                    label="Email Address"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    //   helperText={formik.touched.email && formik.errors.email}
                    helperText="Enter Your E-mail"
                  />
                </Grid>
                <Grid item xs={12}>
                  {/* <Typography fontSize={"16px"} fontFamily={"Syne,sans-serif"} fontWeight={500} color={"#77777d"}>
                Message
            </Typography> */}
                  <TextField
                    fullWidth
                    id="message"
                    name="message"
                    label="Message"
                    multiline
                    rows={4}
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.message && Boolean(formik.errors.message)
                    }
                    //   helperText={formik.touched.message && formik.errors.message}
                    helperText="Enter Your Message"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    sx={{
                      p: "20px",
                      bgcolor: "Black",
                      border: "solid",
                      borderWidth: "1px",
                      borderColor: "black",
                      "&:hover": {
                        color: "black",
                        bgcolor: "white",
                        border: "solid",
                        borderWidth: "1px",
                        borderColor: "black",
                      },
                    }}
                    variant="contained"
                    fullWidth
                    type="submit"
                  >
                    Send Me Message
                    <MailOutlineIcon sx={{ ml: "5px" }} />
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Contact;
