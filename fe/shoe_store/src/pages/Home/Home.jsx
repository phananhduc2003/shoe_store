import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function Home() {
  const authContext = useAuth();

  const isAuthenticated = authContext.isAuthenticated;
  return (
    <>
      <Typography variant="subtitle">Home</Typography>
      <Box>
        <Link to="/product">product</Link>
        <Link to="/productDetail">productDetail</Link>
        <Link to="/cart">cart</Link>
      </Box>
    </>
  );
}

export default Home;
