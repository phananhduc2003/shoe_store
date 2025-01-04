import { Box, Grid, Menu, MenuItem, Typography } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
// import { useAuth } from "../../context/AuthContext";

import { useState } from "react";
import DarkMode from "../../theme/DarkMode";
import logo from "../../assets/images/logo.svg";
import { useNavigate } from "react-router-dom";

const wrapper = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  width: "100%",
  height: "60px",
  backgroundColor: "background.default",
  boxShadow: 4,
  zIndex: 1200,
};

function Header() {
  const purposes = ["Running", "Football", "Casual", "Outdoor", "Winter"];

  const brands = ["Nike", "Adidas", "Puma", "Converse", "Vans"];
  // const authContext = useAuth();

  // const isAuthenticated = authContext.isAuthenticated;

  const [anchorElExplore, setAnchorElExplore] = useState(null);
  const [anchorElBrands, setAnchorElBrands] = useState(null);

  const navigate = useNavigate(); // Hook navigate để điều hướng

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

  const handleNavigation = (path) => {
    navigate(path); // Điều hướng tới đường dẫn được truyền vào
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
                onClick={() => handleNavigation("/")} // Điều hướng đến Home
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
                  color: anchorElExplore ? "text.secondary" : "inherit",
                  "&:hover": {
                    color: "text.secondary",
                  },
                }}
              >
                Explore
              </Box>
              <Menu
                disablePortal
                disableScrollLock
                anchorEl={anchorElExplore}
                open={Boolean(anchorElExplore)}
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
              >
                <Grid container>
                  {purposes.map((category) => (
                    <Grid item xs={6} key={category}>
                      <MenuItem
                        onClick={() => handleNavigation(`/product/${category}`)}
                        sx={{
                          fontSize: "14px",
                          fontWeight: 500,
                          justifyContent: "center",
                        }}
                      >
                        {category}
                      </MenuItem>
                    </Grid>
                  ))}
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
                disablePortal
                disableScrollLock
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
              >
                <Grid container>
                  {brands.map((brand) => (
                    <Grid item xs={6} key={brand}>
                      <MenuItem
                        onClick={() => handleNavigation(`/product/${brand}`)} // Điều hướng đến từng brand
                        sx={{
                          fontSize: "14px",
                          fontWeight: 500,
                          justifyContent: "center",
                        }}
                      >
                        {brand}
                      </MenuItem>
                    </Grid>
                  ))}
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
                        color: "text.secondary",
                      },
                    }}
                    onClick={() => handleNavigation("/login")} // Điều hướng tới Login
                  >
                    Sign Up
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
                    onClick={() => handleNavigation("/login")} // Điều hướng tới Login
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
