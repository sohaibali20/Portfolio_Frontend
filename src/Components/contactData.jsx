import React, { useEffect, useState } from "react";
import axios from "axios";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const ContactData = () => {
  const [user, setUser] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/"); // Redirect to login if no token is found
      return;
    }

    axios
      .get("http://localhost:8000/api/contact/getSubmit", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setUser(response.data);
      })
      .catch((err) => {
        console.log(err);
        if (err.response && err.response.status === 401) {
          localStorage.removeItem("token");
          navigate("/"); // Redirect to login if token is invalid
        }
      });
  }, [navigate]);

  return (
    <TableContainer sx={{ px: 20, py: 10, mt:"50" }} component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Email</StyledTableCell>
            <StyledTableCell align="right">Message</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {user.length > 0 ? (
            user.map((users, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell>{users.fullName}</StyledTableCell>
                <StyledTableCell align="right">{users.email}</StyledTableCell>
                <StyledTableCell align="right">{users.message}</StyledTableCell>
              </StyledTableRow>
            ))
          ) : (
            <StyledTableRow>
              <StyledTableCell colSpan={3} align="center">
                No Data Available
              </StyledTableCell>
            </StyledTableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ContactData;
