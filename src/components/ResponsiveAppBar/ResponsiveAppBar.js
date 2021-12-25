import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import logo from "./logo3.png";
import { useState, useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import { useNavigate } from "react-router";
import { NavLink, Outlet } from "react-router-dom";
import { LoginBar } from "../Login/Login";

//const settings = ["Profile", "Account", "Dashboard", "Logout"];

const ResponsiveAppBar = ({ pages, isUser, isAdmin }) => {
  let activeStyle = {
    backgroundColor: "#FFFFFF",
    color: "#000000",
    textDecoration: "none",
    textShadow: "0 0 1px #010101",
    boxShadow: "1px 1px 0px 1px grey",
  };
  let inActiveStyle = { textDecoration: "none", color: "#FFFFFF" };
  const { user, setUser } = useContext(UserContext);
  const [beta3, setBeta3] = useState(false);

  const navigate = useNavigate();

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

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

  const handleBeat3Change = (f) => {
    setBeta3(f);
  };
  return (
    <>
      {" "}
      <AppBar
        sx={{
          backgroundColor: `${
            user.type && user.type === "admin" ? "#111111" : "#263e69"
          }`,
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {" "}
            <Box
              noWrap
              sx={{
                m: "0.7vw",
                mr: "2vw",
                display: { xs: "none", md: "flex" },
              }}
            >
              {" "}
              <Tooltip title=" Home Page" placement="top">
                <img
                  alt="Logo"
                  src={logo}
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate("/")}
                />
              </Tooltip>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              {user.type && user.type === "admin" ? (
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  <MenuItem key={"Create Flight"} onClick={handleCloseNavMenu}>
                    <NavLink
                      to="/CreateFlight"
                      style={({ isActive }) =>
                        isActive
                          ? {
                              textDecoration: "none",
                              fontWeight: "bold",
                              color: "#000000",
                            }
                          : {
                              textDecoration: "none",
                              color: "#000000",
                            }
                      }
                    >
                      Create Flight
                    </NavLink>
                  </MenuItem>
                </Menu>
              ) : (
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  <MenuItem key={"Reserve Flight"} onClick={handleCloseNavMenu}>
                    <NavLink
                      to="/ReservedFlights"
                      state={{ id: user.id }}
                      style={({ isActive }) =>
                        isActive
                          ? {
                              textDecoration: "none",
                              fontWeight: "bold",
                              color: "#000000",
                            }
                          : {
                              textDecoration: "none",
                              color: "#000000",
                            }
                      }
                    >
                      <Typography>Reserve Flight</Typography>
                    </NavLink>
                  </MenuItem>
                </Menu>
              )}
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            >
              <Tooltip title=" Home Page" placement="right">
                <img
                  alt="Logo"
                  src={logo}
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate("/")}
                />
              </Tooltip>
            </Typography>
            {user.type && user.type === "admin" ? (
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", md: "flex" },
                }}
              >
                <NavLink
                  to="/CreateFlight"
                  height={"100%"}
                  style={({ isActive }) =>
                    isActive
                      ? {
                          ...activeStyle,
                          mx: "1vw",
                          height: "10vh",
                          fontWeight: "bold",
                          alignItems: "center",
                          display: "flex",
                        }
                      : {
                          ...inActiveStyle,
                          mx: "1vw",
                          height: "10vh",
                          alignItems: "center",
                          fontWeight: "bold",
                          display: "flex",
                        }
                  }
                >
                  <Typography px={"1vw"}>Create Flight</Typography>
                </NavLink>
              </Box>
            ) : (
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", md: "flex" },
                }}
              >
                <NavLink
                  to="/ReservedFlights"
                  state={{ id: user.id }}
                  style={({ isActive }) =>
                    isActive
                      ? {
                          ...activeStyle,
                          mx: "1vw",
                          height: "10vh",
                          fontWeight: "bold",
                          alignItems: "center",
                          display: "flex",
                        }
                      : {
                          ...inActiveStyle,
                          mx: "1vw",
                          height: "10vh",
                          alignItems: "center",
                          fontWeight: "bold",
                          display: "flex",
                        }
                  }
                >
                  <Typography px={"1vw"}> Reserved Flights</Typography>
                </NavLink>
              </Box>
            )}
            {user.token ? (
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar src={"AccountCircleOutlinedIcon"} />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem
                    key={"profile"}
                    onClick={() => {
                      navigate("/UserProfile", { replace: true });
                    }}
                  >
                    <Typography textAlign="center">Profile</Typography>
                  </MenuItem>
                  <MenuItem
                    key={"log out"}
                    onClick={() => {
                      setUser({});
                      setBeta3(true);
                      navigate("/login", { replace: true });
                    }}
                  >
                    <Typography textAlign="center">Log out</Typography>
                  </MenuItem>
                </Menu>
              </Box>
            ) : (
              <Box sx={{ flexGrow: 0 }}>
                <Button
                  onClick={() => {
                    setBeta3(true);
                    // navigate("/Login");
                  }}
                >
                  {" "}
                  Login{" "}
                </Button>
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar sx={{ mb: "2.5%" }} />
      {beta3 ? <LoginBar setBeta={handleBeat3Change} /> : <Outlet />}
    </>
  );
};
export default ResponsiveAppBar;
