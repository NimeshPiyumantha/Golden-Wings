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

const activeLink = "border-b-2 cursor-pointer text-'#ff6b81' ";
const normalLink = "cursor-pointer";

function Header() {
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
    <AppBar position="static" style={{ background: "#7bed9f",borderRadius: '16px' }}>
      <Container maxWidth="md">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 9,
              display: { xs: "none", md: "flex" },
              fontFamily: "poppines",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "#ffa502",
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
              color="inherit"
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
                to={"/home"}
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                <Typography textAlign="center" pt={1} pr={2} pl={2}>
                  Home
                </Typography>
              </NavLink>

              <NavLink
                to={"/places"}
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                <Typography textAlign="center" pt={1} pr={2} pl={2}>
                  Places
                </Typography>
              </NavLink>

              <NavLink
                to={"/gallery"}
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                <Typography textAlign="center" pt={1} pr={2} pl={2}>
                  Gallery
                </Typography>
              </NavLink>

              <NavLink
                to={"/blog"}
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                <Typography textAlign="center" pt={1} pr={2} pl={2}>
                  Blog
                </Typography>
              </NavLink>

              <NavLink
                to={"/contact"}
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                <Typography textAlign="center" pt={1} pr={2} pl={2}>
                  Contact
                </Typography>
              </NavLink>
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "poppines",
              fontWeight: 700,
              fontSize: "18px",
              letterSpacing: ".3rem",
              color: "#ffa502",
              textDecoration: "none",
            }}
          >
            Golden Wings
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <NavLink
              to={"/home"}
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <Button
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "#ff6b81",
                  fontWeight: 700,
                  display: "block",
                }}
              >
                <h4>Home</h4>
              </Button>
            </NavLink>

            <NavLink
              to={"/places"}
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <Button
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "#ff6b81",
                  fontWeight: 700,
                  display: "block",
                }}
              >
                <h4>Places</h4>
              </Button>
            </NavLink>

            <NavLink
              to={"/gallery"}
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <Button
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "#ff6b81",
                  fontWeight: 700,
                  display: "block",
                }}
              >
                <h4>Gallery</h4>
              </Button>
            </NavLink>

            <NavLink
              to={"/blog"}
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <Button
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "#ff6b81",
                  fontWeight: 700,
                  display: "block",
                }}
              >
                <h4>Blog</h4>
              </Button>
            </NavLink>

            <NavLink
              to={"/contact"}
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <Button
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "#ff6b81",
                  fontWeight: 700,
                  display: "block",
                }}
              >
                <h4>Contact</h4>
              </Button>
            </NavLink>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
