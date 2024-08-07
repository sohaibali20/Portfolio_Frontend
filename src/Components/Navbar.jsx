import React, { useContext } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./../Context/AuthContext.js"; // Import the AuthContext

const drawerWidth = 240;
const navItems = ["Home", "About", "Projects", "Resume", "Contact"];

const scrollToSection = (sectionId) => {
  const sectionElement = document.getElementById(sectionId);
  const offset = 128;
  if (sectionElement) {
    const targetScroll = sectionElement.offsetTop - offset;
    sectionElement.scrollIntoView({ behavior: "smooth" });
    window.scrollTo({
      top: targetScroll,
      behavior: "smooth",
    });
  }
};

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();
  const { isLoggedIn, logout } = useContext(AuthContext); // Use the context

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Sohaib Ali
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              onClick={() => {
                scrollToSection(item);
              }}
              sx={{ textAlign: "center" }}
            >
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        elevation={0}
        component="nav"
        sx={{ py: "20px", px: "10px", bgcolor: "white", color: "black" }}
      >
        <Toolbar sx={{ textTransform: "lowercase" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              display: { sm: "none", xs: "flex" },
              justifyContent: "start",
              flexGrow: "1",
            }}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            onClick={() => {
              scrollToSection("Home");
            }}
            fontFamily="Syne, sans-serif"
            fontWeight={600}
            textTransform={"uppercase"}
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              textDecoration: "none",
            }}
          >
            <Link to="/" style={{ textDecoration: "none" }}>
              MY PORTFOLIO
            </Link>
          </Typography>

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button
                key={item}
                sx={{
                  fontSize: "16px",
                  color: "#77777d",
                  textTransform: "capitalize",
                  fontWeight: "500",
                  fontFamily: "Syne,sans-serif",
                }}
                onClick={() => {
                  scrollToSection(item);
                }}
              >
                {item}
              </Button>
            ))}
          </Box>

          {isLoggedIn ? (
            <Button
              sx={{
                bgcolor: "Black",
                "&:hover": {
                  color: "White",
                  bgcolor: "Black",
                },
              }}
              variant="contained"
              onClick={handleLogout}
            >
              Logout
            </Button>
          ) : (
            <Link to="/login" style={{ textDecoration: "none" }}>
              <Button
                sx={{
                  bgcolor: "Black",
                  "&:hover": {
                    color: "White",
                    bgcolor: "Black",
                  },
                }}
                variant="contained"
              >
                Login
              </Button>
            </Link>
          )}
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

Navbar.propTypes = {
  window: PropTypes.func,
};

export default Navbar;
