import { Box, Divider, Typography } from "@mui/material";
import MenuItem from "./Menu/MenuItem";
import Menu from "./Menu/Menu";
import logo from "../../assets/images/logo.svg";

function SideBar() {
  return (
    <>
      <Box
        sx={{
          position: "fixed",
          left: 0,
          top: 0,
          display: "flex",
          width: "260px",
          height: "100vh",
          backgroundColor: "primary.main",
          flexDirection: "column",
          zIndex: 1000,
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box sx={{ display: "flex", mt: 3 }}>
            <Box
              sx={{
                width: "50px",
                height: "50px",
                backgroundImage: `url(${logo})`,
                backgroundSize: "contain",
                backgroundColor: "secondary.light",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                marginLeft: 3,
                borderRadius: "50%",
              }}
            ></Box>
            <Typography
              sx={{
                position: "relative",
                bottom: "-15px",
                ml: 1,
                fontWeight: 700,
                fontSize: "20px",
                color: "secondary.light",
              }}
            >
              Home ADMIN
            </Typography>
          </Box>
          <Box sx={{ width: "100%", my: 2 }}>
            <Divider sx={{ borderColor: "#fff", borderWidth: 1 }} />
          </Box>
          <Menu
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <MenuItem title="home" to="/homeAdmin" />

            <MenuItem title="listItems" to="/homeAdmin/listItems" />
            <MenuItem title="listOrders" to="/homeAdmin/listOrders" />

            <MenuItem title="listUsers" to="/homeAdmin/listUsers" />
          </Menu>
        </Box>
      </Box>
    </>
  );
}

export default SideBar;
