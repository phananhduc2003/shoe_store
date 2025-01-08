import PropTypes from "prop-types";

import { Box } from "@mui/material";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const wrapper = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  minHeight: "100vh",
};

const content = {
  width: "100%",

  minHeight: "calc(100vh - 60px )",
  marginTop: "60px",
};

function DefaultLayout({ children }) {
  return (
    <>
      <Box sx={wrapper}>
        <Header />
        <Box sx={content}>{children}</Box>
        <Footer />
      </Box>
    </>
  );
}
DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default DefaultLayout;
