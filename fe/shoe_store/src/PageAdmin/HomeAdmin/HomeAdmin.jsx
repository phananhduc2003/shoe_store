import { Box, Grid, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import SellIcon from "@mui/icons-material/Sell";
import CategoryIcon from "@mui/icons-material/Category";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import TopSellingProducts from "../components/TopSellingProduct";
import RevenueByOrders from "../components/RevenueByOrder";

function HomeAdmin() {
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box sx={{ display: "flex", justifyContent: "flex-end", mr: 5, mb: 4 }}>
          <AccountCircleIcon />
          <Box sx={{ ml: 1 }}>Logout</Box>
        </Box>
        <Box>
          <Grid container rowSpacing={1}>
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",

                  width: "100%",
                  maxWidth: "300px",
                  height: "100%",
                  boxShadow: 4,
                  borderRadius: 4,
                  backgroundColor: "#ffffff",
                }}
              >
                <Typography
                  sx={{
                    textAlign: "center",
                    fontWeight: "bold",
                    fontSize: "26px",
                    mt: 1,
                  }}
                >
                  Top Selling Products
                </Typography>
                <Typography
                  sx={{
                    ml: 2,
                    mt: 1,
                    color: "secondary.light",
                    fontSize: "18px",
                    fontWeight: 700,
                  }}
                >
                  Nike Trail Running Shoes
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    ml: 2,
                    mt: 1,
                    color: "secondary.light",
                    fontSize: "16px",
                    fontWeight: 700,
                  }}
                >
                  <SellIcon />
                  <Box sx={{ ml: 1 }}>1190 sold</Box>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    ml: 2,
                    mt: 1,
                    color: "secondary.light",
                    fontSize: "16px",
                    fontWeight: 700,
                  }}
                >
                  <CategoryIcon />
                  <Box sx={{ ml: 1, mb: 1 }}>Running</Box>
                </Box>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",

                  width: "100%",
                  maxWidth: "300px",
                  height: "100%",
                  boxShadow: 4,
                  borderRadius: 4,
                  backgroundColor: "#ffffff",
                }}
              >
                <Typography
                  sx={{
                    textAlign: "center",
                    fontWeight: "bold",
                    fontSize: "26px",
                    mt: 1,
                  }}
                >
                  Revenue By Orders
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    ml: 2,
                    mt: 1,
                    color: "secondary.light",
                    fontSize: "16px",
                    fontWeight: 700,
                  }}
                >
                  <AttachMoneyIcon />
                  <Box>16.4K</Box>
                </Box>

                <Box
                  sx={{
                    display: "flex",

                    ml: 2,
                    mt: 1,
                    color: "secondary.light",
                    fontSize: "16px",
                    fontWeight: 700,
                  }}
                >
                  <Box sx={{ ml: 1 }}>Total Order: 1012K</Box>
                </Box>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  maxWidth: "300px",
                  height: "100%",
                  boxShadow: 4,
                  borderRadius: 4,
                  backgroundColor: "#ffffff",
                }}
              >
                <Typography
                  sx={{
                    textAlign: "center",
                    fontWeight: "bold",
                    fontSize: "26px",
                    mt: 1,
                  }}
                >
                  User List
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    ml: 2,
                    mt: 1,
                    color: "secondary.light",
                    fontSize: "16px",
                    fontWeight: 700,
                  }}
                >
                  <Box sx={{ ml: 1 }}>Users: 1024</Box>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    ml: 2,
                    mt: 1,
                    color: "secondary.light",
                    fontSize: "16px",
                    fontWeight: 700,
                  }}
                >
                  <Box sx={{ ml: 1 }}>Admin: 1</Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Grid
          container
          spacing={3} // Khoảng cách giữa các phần tử
          sx={{
            width: "100%",
            justifyContent: "center", // Căn giữa các phần tử
            my: 4,
          }}
        >
          <Grid item xs={12} sm={6} md={6}>
            <TopSellingProducts />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <RevenueByOrders />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default HomeAdmin;
