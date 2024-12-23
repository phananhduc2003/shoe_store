import PropTypes from "prop-types";

import { Box, Typography } from "@mui/material";

function LoginLayout({ children }) {
  return (
    <>
      <Typography variant="subtitle">LoginLayout</Typography>
      <Box>{children}</Box>
    </>
  );
}
LoginLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default LoginLayout;
