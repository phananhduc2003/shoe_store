import PropTypes from "prop-types";

import { Box } from "@mui/material";

function AdminLayout({ children }) {
  return (
    <>
      <Box>
        <Box>{children}</Box>
      </Box>
    </>
  );
}
AdminLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default AdminLayout;
