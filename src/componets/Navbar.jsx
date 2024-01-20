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
import MenuItem from "@mui/material/MenuItem";
import "../Styled/Styled.css";

const pages = ["inicio", "nosotros", "contactos"];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const ImgLogo =
    "https://cdn.builder.io/api/v1/image/assets%2Fed8b2ea899284c0685a527cf3cea6f83%2Fb73c659ee6e9498595d83dff7270f9e8?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2Fed8b2ea899284c0685a527cf3cea6f83%2Fb73c659ee6e9498595d83dff7270f9e8?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2Fed8b2ea899284c0685a527cf3cea6f83%2Fb73c659ee6e9498595d83dff7270f9e8?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2Fed8b2ea899284c0685a527cf3cea6f83%2Fb73c659ee6e9498595d83dff7270f9e8?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2Fed8b2ea899284c0685a527cf3cea6f83%2Fb73c659ee6e9498595d83dff7270f9e8?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2Fed8b2ea899284c0685a527cf3cea6f83%2Fb73c659ee6e9498595d83dff7270f9e8?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2Fed8b2ea899284c0685a527cf3cea6f83%2Fb73c659ee6e9498595d83dff7270f9e8?width=2000 2000w,";

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AppBar
      component="nav"
      sx={{ background: "#a0b7a77d", backdropFilter: "blur(10px)" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <img
              srcSet={`${ImgLogo} https://cdn.builder.io/api/v1/image/assets%2Fed8b2ea899284c0685a527cf3cea6f83%2Fb73c659ee6e9498595d83dff7270f9e8`}
              alt="LOGO"
              loading="lazy"
              style={{ height: "80px" }}
              href="#app-bar-with-responsive-menu"
            />
          </Box>
          <Box
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <img
              srcSet={`${ImgLogo} https://cdn.builder.io/api/v1/image/assets%2Fed8b2ea899284c0685a527cf3cea6f83%2Fb73c659ee6e9498595d83dff7270f9e8`}
              alt="LOGO"
              loading="lazy"
              style={{ width: "90px" }}
              href="#app-bar-with-responsive-menu"
            />
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "flex-end",
            }}
          >
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
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => {
                  scrollToSection(page.toLowerCase());
                  handleCloseNavMenu();
                }}
                className="btn"
                sx={{
                  color: "white",
                  margin: "0px 25px 0px 25px",
                  noFocus: {
                    outline: "none",
                    boxShadow: "none",
                  },
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
