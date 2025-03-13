import {
  Badge,
  badgeClasses,
  Box,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  styled,
  Typography,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import DarkMode from "../../theme/DarkMode";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useState } from "react";
import logo from "../../assets/images/logo.svg";

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

const CartBadge = styled(Badge)`
  & .${badgeClasses.badge} {
    top: -12px;
    right: -6px;
  }
`;

function Header() {
  const purposeMapping = {
    Running: 1,
    Football: 2,
    Casual: 3,
    Outdoor: 4,
    Winter: 5,
  };

  const brandMapping = {
    Nike: 1,
    Adidas: 2,
    Puma: 3,
    Converse: 4,
    Vans: 5,
  };

  const purposes = ["Running", "Football", "Casual", "Outdoor", "Winter"];
  const brands = ["Nike", "Adidas", "Puma", "Converse", "Vans"];

  const navigate = useNavigate();
  const authContext = useAuth();
  const isAuthenticated = authContext.isAuthenticated;
  const idUser = authContext.idUser;

  const [anchorElExplore, setAnchorElExplore] = useState(null);
  const [anchorElBrands, setAnchorElBrands] = useState(null);

  const handleExploreOpen = (event) => {
    setAnchorElExplore(event.currentTarget);
  };

  const handleExploreClose = () => {
    setAnchorElExplore(null);
  };

  const handleBrandsOpen = (event) => {
    setAnchorElBrands(event.currentTarget);
  };

  const handleBrandsClose = () => {
    setAnchorElBrands(null);
  };

  const handleNavigation = (path, filters = {}) => {
    navigate(path, { state: filters });
    handleExploreClose();
    handleBrandsClose();
  };
  const Logout = () => {
    authContext.Logout();
  };

  const handleCheckCart = () => {
    if (isAuthenticated) {
      navigate(`/cart/${idUser}`);
    } else {
      navigate(`/login`);
    }
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
                  color: "primary.main",
                  fontWeight: 700,
                  "&:hover": {
                    color: "primary.light",
                  },
                }}
                onClick={() => handleNavigation("/")}
              >
                Home
              </Box>
            </Grid>
            <Grid item sx={{ cursor: "pointer" }}>
              <Box
                sx={{
                  mx: 3,
                  fontWeight: 700,
                  color: anchorElExplore ? "primary.main" : "primary.main",
                  "&:hover": {
                    color: "primary.light",
                  },
                }}
                onMouseEnter={handleExploreOpen}
              >
                Explore
              </Box>
              <Menu
                disableScrollLock
                anchorEl={anchorElExplore}
                open={Boolean(anchorElExplore)}
                onClose={handleExploreClose}
                MenuListProps={{
                  onMouseLeave: handleExploreClose,
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
                    ...(anchorElExplore && { inert: true }),
                  },
                }}
              >
                <Grid container>
                  {purposes.map((purpose) => (
                    <Grid item xs={6} key={purpose}>
                      <MenuItem
                        onClick={() =>
                          handleNavigation(`/product/filter`, {
                            purpose: purposeMapping[purpose],
                          })
                        }
                        sx={{
                          fontSize: "14px",
                          fontWeight: 500,
                          justifyContent: "center",
                        }}
                      >
                        {purpose}
                      </MenuItem>
                    </Grid>
                  ))}
                </Grid>
              </Menu>
            </Grid>
            <Grid item sx={{ cursor: "pointer" }}>
              <Box
                sx={{
                  mx: 3,
                  fontWeight: 700,
                  color: anchorElBrands ? "primary.main" : "primary.main",
                  "&:hover": {
                    color: "primary.light",
                  },
                }}
                onMouseEnter={handleBrandsOpen}
              >
                Brands
              </Box>
              <Menu
                disableScrollLock
                anchorEl={anchorElBrands}
                open={Boolean(anchorElBrands)}
                onClose={handleBrandsClose}
                MenuListProps={{
                  onMouseLeave: handleBrandsClose,
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
                    ...(anchorElExplore && { inert: true }),
                  },
                }}
              >
                <Grid container>
                  {brands.map((brand) => (
                    <Grid item xs={6} key={brand}>
                      <MenuItem
                        onClick={() =>
                          handleNavigation(`/product/filter`, {
                            brand: brandMapping[brand],
                          })
                        }
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
              <Box sx={{ mx: 3, color: "primary.main", fontWeight: 700 }}>
                News
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ marginRight: 3 }}>
          <Grid container spacing={2} alignItems={"center"}>
            <Grid item>
              <DarkMode />
            </Grid>
            <Grid
              item
              onClick={handleCheckCart}
              sx={{
                color: "text.primary",
                cursor: "pointer",
                "&:hover": {
                  color: "text.secondary",
                },
              }}
            >
              <IconButton>
                <AddShoppingCartIcon
                  fontSize="small"
                  sx={{ color: "text.primary" }}
                />
                <CartBadge
                  // badgeContent={2}
                  color="primary"
                  overlap="circular"
                />
              </IconButton>
            </Grid>
            <Grid item>
              {!isAuthenticated ? (
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
                      onClick={() => handleNavigation("/login")}
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
                      onClick={() => handleNavigation("/login")}
                    >
                      Sign In
                    </Typography>
                  </Grid>
                </Grid>
              ) : (
                <Grid
                  container
                  alignItems="center"
                  justifyContent="flex-end"
                  spacing={1}
                >
                  <Grid item>
                    <AccountCircleIcon />
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
                      onClick={Logout}
                    >
                      Logout
                    </Typography>
                  </Grid>
                </Grid>
              )}
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default Header;
