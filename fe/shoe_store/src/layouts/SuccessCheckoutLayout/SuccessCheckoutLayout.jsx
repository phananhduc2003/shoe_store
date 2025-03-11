import PropTypes from "prop-types";

import { Box } from "@mui/material";

function SuccessCheckoutLayout({ children }) {
  return (
    <>
      <Box>
        <Box>{children}</Box>
      </Box>
    </>
  );
}
SuccessCheckoutLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default SuccessCheckoutLayout;
