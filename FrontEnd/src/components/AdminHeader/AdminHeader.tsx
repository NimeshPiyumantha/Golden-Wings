import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import LogoutIcon from "@mui/icons-material/Logout";
import { Stack } from "@mui/material";

const activeLink =
  "border-b-4 cursor-pointer bg-green-300 text-green-800 font-bold border-green-500";
const normalLink = "cursor-pointer";

export default function AdminHeader() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <AppBar
      position="fixed"
      style={{ background: "#f1f2f6", borderRadius: "16px" }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <CatchingPokemonIcon
            sx={{
              display: { xs: "none", md: "flex" },
              mr: 1,
              color: "#16a085",
              fontSize: 40,
            }}
          />

          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/a"
            sx={{
              mr: 9,
              display: { xs: "none", md: "flex" },
              fontFamily: "Ubuntu",
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "#16a085",
              textDecoration: "none",
            }}
          >
            Golden Wings
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="info"
            >
              <MenuIcon />
            </IconButton>
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
              <NavLink
                to={"/a"}
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                <Typography textAlign="center" pt={1} pr={2} pl={2}>
                  Home
                </Typography>
              </NavLink>

              <NavLink
                to={"/apost"}
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                <Typography textAlign="center" pt={1} pr={2} pl={2}>
                  POST
                </Typography>
              </NavLink>

              <NavLink
                to={"/auserMange"}
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                <Typography textAlign="center" pt={1} pr={2} pl={2}>
                  Users
                </Typography>
              </NavLink>

              <NavLink
                to={"/ablogMange"}
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                <Typography textAlign="center" pt={1} pr={2} pl={2}>
                  Blogs
                </Typography>
              </NavLink>

              <NavLink
                to={"/aprofile"}
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                <Typography textAlign="center" pt={1} pr={2} pl={2}>
                  Profile
                </Typography>
              </NavLink>

              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                <Typography textAlign="center" pt={1} pr={2} pl={2}>
                  Logout
                </Typography>
              </NavLink>
            </Menu>
          </Box>
          <CatchingPokemonIcon
            sx={{
              display: { xs: "flex", md: "none" },
              mr: 1,
              color: "#16a085",
            }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "Ubuntu",
              fontWeight: 700,
              fontSize: "18px",
              letterSpacing: ".1rem",
              color: "#16a085",
              textDecoration: "none",
            }}
          >
            Golden Wings
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              height: 65,
            }}
          >
            <NavLink
              to={"/a"}
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <Button
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "#16a085",
                  fontWeight: 700,
                  display: "block",
                }}
              >
                <h4>Home</h4>
              </Button>
            </NavLink>

            <NavLink
              to={"/apost"}
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <Button
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "#16a085",
                  fontWeight: 700,
                  display: "block",
                }}
              >
                <h4>Post</h4>
              </Button>
            </NavLink>

            <NavLink
              to={"/auserMange"}
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <Button
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "#16a085",
                  fontWeight: 700,
                  display: "block",
                }}
              >
                <h4>Users</h4>
              </Button>
            </NavLink>

            <NavLink
              to={"/ablogMange"}
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <Button
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "#16a085",
                  fontWeight: 700,
                  display: "block",
                }}
              >
                <h4>Blogs</h4>
              </Button>
            </NavLink>

            <NavLink
              to={"/aprofile"}
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <Button
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "#16a085",
                  fontWeight: 700,
                  display: "block",
                }}
              >
                <h4>Profile</h4>
              </Button>
            </NavLink>

            <Stack direction="row" spacing={2}>
              <NavLink to={"/"}>
                <Button
                  variant="contained"
                  sx={{
                    m: 1.7,
                    ml: 10,
                    fontFamily: "Ubuntu",
                    border: 1,
                    bgcolor: "gray",
                    fontWeight: 600,
                    borderRadius: 3,
                  }}
                  size="medium"
                  endIcon={<LogoutIcon />}
                >
                  Logout
                </Button>
              </NavLink>
            </Stack>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
