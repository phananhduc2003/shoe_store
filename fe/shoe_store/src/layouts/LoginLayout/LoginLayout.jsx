import PropTypes from "prop-types";

import { Box } from "@mui/material";

function LoginLayout({ children }) {
  return (
    <>
      <Box>{children}</Box>
    </>
  );
}
LoginLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default LoginLayout;
