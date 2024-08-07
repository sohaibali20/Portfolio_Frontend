import React, { useState, useContext } from "react";
import { useFormik } from "formik";
import axios from "axios";
import {
  TextField,
  Button,
  Container,
  Box,
  Typography,
  Alert,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./../Context/AuthContext.js"; // Import the AuthContext

const LoginForm = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useContext(AuthContext); // Use the context

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        const response = await axios.post(
          "http://localhost:8000/api/user/login",
          values
        );
        const { token } = response.data;
        login(token); // Call the login function from the context
        setError("");
        navigate("/admin"); // Redirect to /admin
      } catch (err) {
        setError(err.response ? err.response.data.message : "Login failed");
      }
    },
  });

  return (
    <>
      <Container maxWidth="sm">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mt: 8,
          }}
        >
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <form onSubmit={formik.handleSubmit} style={{ width: "100%", mt: 1 }}>
            <TextField
              fullWidth
              id="username"
              name="username"
              label="Username"
              value={formik.values.username}
              onChange={formik.handleChange}
              margin="normal"
              variant="outlined"
            />
            <TextField
              fullWidth
              id="password"
              name="password"
              label="Password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              margin="normal"
              variant="outlined"
            />
            {error && <Alert severity="error">{error}</Alert>}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </Button>
          </form>
        </Box>
      </Container>
    </>
  );
};

export default LoginForm;
