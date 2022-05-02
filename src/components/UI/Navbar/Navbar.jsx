import React from "react";
import { useState } from "react";

import "./Navbar.css";
import medicamento1 from "../../../assets/images/image-slider/working-project-sl-1.png";
import medicamento2 from "../../../assets/images/image-slider/working-project-sl-2.png";
import medicamento3 from "../../../assets/images/image-slider/working-project-sl-3.png";
import SearchIcon from "@mui/icons-material/Search";
// import SidebarSearch from '../components/Search/SidebarSearch';

import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";


import Dropdown from "@mui/icons-material/ArrowDropDown";

import { Link } from "react-router-dom";
import SidebarSearch from "../../Search/SidebarSearch";

const pages = ["Formación", "Actualidad", "Conócenos", "Acceder"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const [showElement, setShowElement] = useState(false);

  const handleMouseEnter = (e) => {
    setShowElement(true);
  };
  const handleMouseLeave = (e) => {
    setShowElement(false);
  };

  return (
    <div id="whole-container">
      <div id="navbar-container">
        <Container maxWidth="xl" id="navbar-container-id">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: "flex", md: "flex" } }}
              style={{ margin: "20px" }}
            > <br />
              <a href="index.html" rel="home" className="main-logo">

              </a>
              <Box
                sx={{ flexGrow: 0, display: { xs: "flex", md: "flex" } }}
                style={{ marginTop: "5px" }}
              >
                <Button sx={{ my: 2, color: "black", display: "block" }} onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}>
                  Medicamentos <Dropdown />

                </Button>
              </Box>
              <Box
                sx={{ flexGrow: 0, display: { xs: "flex", md: "flex" } }}
                style={{ marginTop: "5px" }}
              >
                <Button sx={{ my: 2, color: "black", display: "block" }}>
                  Higiene <Dropdown />{" "}
                </Button>
              </Box>
              {/* <Box sx={{ height: 200, width: 200, display: { xs: 'flex', md: 'flex' }}}></Box> */}
              <Box
                sx={{ flexGrow: 0, display: { xs: "flex", md: "flex" } }}
                style={{ marginTop: "5px" }}
              >
                <Button sx={{ my: 2, color: "black", display: "block" }}>
                  Alimentacion <Dropdown />{" "}
                </Button>
              </Box>
              <Box
                sx={{ flexGrow: 0, display: { xs: "flex", md: "flex" } }}
                style={{ marginTop: "5px" }}
              >
                <Button sx={{ my: 2, color: "black", display: "block" }}>
                  Fungibles <Dropdown />{" "}
                </Button>
              </Box>
            </Typography>
            <Box
              sx={{ flexGrow: 1, display: { xs: "flex", md: "flex" } }}
              style={{ marginTop: "5px" }}
            >
              <Button sx={{ my: 2, color: "black", display: "block" }}>
                <Link
                  to="/conocenos"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Conócenos
                </Link>{" "}
              </Button>
            </Box>
            <Box
              sx={{ flexGrow: 1, display: { xs: "flex", md: "flex" } }}
              style={{ marginTop: "5px" }}
            >
              <Button sx={{ my: 2, color: "black", display: "block" }}>
                <Link
                  to="/formacion"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Formacion
                </Link>{" "}
              </Button>
            </Box>
            <Box
              sx={{ flexGrow: 1, display: { xs: "flex", md: "flex" } }}
              style={{ marginTop: "5px" }}
            >
              <Button sx={{ my: 2, color: "black", display: "block" }}>
                <Link
                  to="/actualidad"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Actualidad
                </Link>{" "}
              </Button>
            </Box>
            <Box
              sx={{ flexGrow: 1, display: { xs: "flex", md: "flex" } }}
              style={{ marginTop: "5px" }}
            >
              <Button sx={{ my: 2, color: "black", display: "block" }}>
                <Link
                  to="/ingresar"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Acceder
                </Link>{" "}
              </Button>
            </Box>
            <div className="search-button">
              {" "}
              <SidebarSearch />
            </div>
          </Toolbar>
        </Container>
      </div>
      {/* <div className="dropdowns">
      {showElement &&
      <Container>
      <Grid container>
        <Grid xs={2} className="first-container">
        <Box id="dropdown-item-1-1"
          sx={{ height: 300, maxWidth: 200 }}
          style={{ backgroundColor: "white", position: "fixed", zIndex: 999, top: 99 }}
        > LOREM IMPSUM DOLOR SIT AMET</Box>
        </Grid>
        <Grid xs={2} className="first-container">
        <Box id="dropdown-item-1-2"
          sx={{ height: 300, maxWidth: 200 }}
          style={{ backgroundColor: "white", position: "fixed", zIndex: 999, top: 99 }}

        > <br></br>
        <h4> Producto destacado </h4>
           <img src={medicamento1} className="imagenes-dropdown"/> </Box>
        </Grid>
      </Grid>
      </Container> }

      </div> */}
    </div>
  );
};
export default Navbar;
