import { Box } from "@mui/material";
import PropTypes from "prop-types";

function Menu({ children }) {
  return <Box>{children}</Box>;
}

Menu.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Menu;
