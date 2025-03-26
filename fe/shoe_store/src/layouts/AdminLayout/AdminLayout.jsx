import PropTypes from "prop-types";

import { Box } from "@mui/material";
import SideBar from "../../components/SideBar";

function AdminLayout({ children }) {
  return (
    <>
      <Box
        sx={{ display: "flex", minHeight: "100vh", backgroundColor: "#DFE5E7" }}
      >
        <SideBar />
        <Box sx={{ ml: "260px", width: "100%", mt: 3 }}>{children}</Box>
      </Box>
    </>
  );
}
AdminLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default AdminLayout;
