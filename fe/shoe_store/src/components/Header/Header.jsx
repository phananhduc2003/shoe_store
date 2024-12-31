import { Box, Grid, Menu, MenuItem, Typography } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import { useState } from "react";
import DarkMode from "../../theme/DarkMode";
import logo from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";

const wrapper = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "60px",
  backgroundColor: "background.default",
  boxShadow: 4,
  zIndex: 1200,
};

function Header() {
  const [anchorElExplore, setAnchorElExplore] = useState(null);

  const [anchorElBrands, setAnchorElBrands] = useState(null);

  const handleExploreMouseEnter = (event) => {
    setAnchorElExplore(event.currentTarget);
  };

  const handleExploreMouseLeave = () => {
    setAnchorElExplore(null);
  };

  const handleBrandsMouseEnter = (event) => {
    setAnchorElBrands(event.currentTarget);
  };

  const handleBrandsMouseLeave = () => {
    setAnchorElBrands(null);
  };
  return (
    <>
      <Box sx={wrapper}>
        <Box
          sx={{
            width: "48px",
            height: "48px",
            backgroundImage: `url(${logo})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            marginLeft: 3,
            backgroundColor: "#ffffff",
            borderRadius: "50%",
          }}
        ></Box>
        <Box>
          <Grid
            container
            direction={"row"}
            fontWeight={500}
            lineHeight={"60px"}
          >
            <Grid item sx={{ cursor: "pointer" }}>
              <Box
                sx={{
                  mx: 3,
                  "&:hover": {
                    color: "text.secondary",
                  },
                }}
              >
                Home
              </Box>
            </Grid>
            <Grid
              item
              onMouseEnter={handleExploreMouseEnter}
              onMouseLeave={handleExploreMouseLeave}
              sx={{ cursor: "pointer" }}
            >
              <Box
                sx={{
                  mx: 3,
                  color: anchorElExplore ? "text.secondary" : "inherit", // Giữ màu đỏ nếu menu con mở
                  "&:hover": {
                    color: "text.secondary",
                  },
                }}
              >
                Explore
              </Box>
              <Menu
                anchorEl={anchorElExplore}
                open={anchorElExplore}
                onClose={handleExploreMouseLeave}
                MenuListProps={{
                  onMouseLeave: handleExploreMouseLeave,
                }}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                PaperProps={{
                  sx: {
                    backgroundColor: (theme) =>
                      theme.palette.background.default,
                  },
                }}
                disablePortal
              >
                <Grid container>
                  <Grid item xs={6}>
                    <MenuItem sx={{ justifyContent: "center" }}>
                      Running
                    </MenuItem>
                  </Grid>
                  <Grid item xs={6}>
                    <MenuItem sx={{ justifyContent: "center" }}>
                      Football
                    </MenuItem>
                  </Grid>
                  <Grid item xs={6}>
                    <MenuItem sx={{ justifyContent: "center" }}>
                      Casual
                    </MenuItem>
                  </Grid>
                  <Grid item xs={6}>
                    <MenuItem sx={{ justifyContent: "center" }}>
                      Outdoor
                    </MenuItem>
                  </Grid>
                  <Grid item xs={6}>
                    <MenuItem sx={{ justifyContent: "center" }}>
                      Winter
                    </MenuItem>
                  </Grid>
                </Grid>
              </Menu>
            </Grid>
            <Grid
              item
              onMouseEnter={handleBrandsMouseEnter}
              onMouseLeave={handleBrandsMouseLeave}
              sx={{ cursor: "pointer" }}
            >
              <Box
                sx={{
                  mx: 3,
                  color: anchorElBrands ? "text.secondary" : "inherit", // Giữ màu đỏ nếu menu con mở
                  "&:hover": {
                    color: "text.secondary",
                  },
                }}
              >
                Brands
              </Box>
              <Menu
                anchorEl={anchorElBrands}
                open={Boolean(anchorElBrands)}
                onClose={handleBrandsMouseLeave}
                MenuListProps={{
                  onMouseLeave: handleBrandsMouseLeave,
                }}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                PaperProps={{
                  sx: {
                    backgroundColor: (theme) =>
                      theme.palette.background.default, // Đặt nền từ theme
                  },
                }}
                disablePortal
              >
                <Grid container>
                  <Grid item xs={6}>
                    <MenuItem sx={{ justifyContent: "center" }}>Nike</MenuItem>
                  </Grid>
                  <Grid item xs={6}>
                    <MenuItem sx={{ justifyContent: "center" }}>
                      Adidas
                    </MenuItem>
                  </Grid>
                  <Grid item xs={6}>
                    <MenuItem sx={{ justifyContent: "center" }}>Puma</MenuItem>
                  </Grid>
                  <Grid item xs={6}>
                    <MenuItem sx={{ justifyContent: "center" }}>
                      Converse
                    </MenuItem>
                  </Grid>
                  <Grid item xs={6}>
                    <MenuItem sx={{ justifyContent: "center" }}>Vans</MenuItem>
                  </Grid>
                </Grid>
              </Menu>
            </Grid>
            <Grid item>
              <Box sx={{ mx: 3 }}>News</Box>
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            marginRight: 3,
          }}
        >
          <Grid container spacing={2} alignItems={"center"}>
            <Grid item>
              <DarkMode />
            </Grid>
            <Grid
              item
              sx={{
                color: "text.primary",
                cursor: "pointer",
                "&:hover": {
                  color: "text.secondary",
                },
              }}
            >
              <AddShoppingCartIcon />
            </Grid>
            <Grid item>
              <Grid
                container
                alignItems="center"
                justifyContent="flex-end"
                spacing={1}
              >
                <Grid item>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: 500,
                      cursor: "pointer",
                      "&:hover": {
                        color: "text.secondary", // Đổi màu khi hover
                      },
                    }}
                  >
                    <Link
                      to="/login"
                      style={{
                        textDecoration: "none", // Bỏ gạch chân
                        color: "inherit", // Kế thừa màu chữ từ Typography
                      }}
                    >
                      Sign Up
                    </Link>
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography>|</Typography>
                </Grid>
                <Grid item>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: 500,
                      cursor: "pointer",
                      "&:hover": {
                        color: "text.secondary",
                      },
                    }}
                  >
                    Sign In
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default Header;
