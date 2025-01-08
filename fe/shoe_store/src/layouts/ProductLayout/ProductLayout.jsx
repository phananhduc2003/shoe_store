import PropTypes from "prop-types";

import { Box } from "@mui/material";
import Header from "../../components/Header";

const wrapper = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  minHeight: "100vh",
};

const content = {
  width: "100%",
  flex: 1,
  marginTop: "60px",
  minHeight: "1000px",
};

function ProductLayout({ children }) {
  return (
    <>
      <Box sx={wrapper}>
        <Header />
        <Box sx={content}>{children}</Box>
      </Box>
    </>
  );
}
ProductLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default ProductLayout;
