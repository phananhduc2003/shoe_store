import { Box, Grid } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import TitleDashBoard from "../components/TitleDashBoard/TitleDashBoard";
import TopSellingProducts from "../components/TopSellingProducts/TopSellingProducts";
import RevenueByOrders from "../components/RevenueByOrders/RevenueByOrders";

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
              <TitleDashBoard />
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <TitleDashBoard />
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <TitleDashBoard />
            </Grid>
          </Grid>
        </Box>
        <Box>
          <TopSellingProducts />
          <RevenueByOrders />
        </Box>
      </Box>
    </>
  );
}

export default HomeAdmin;
