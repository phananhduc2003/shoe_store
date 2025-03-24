import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { Box } from "@mui/material";

function MenuItem({ title, to }) {
  return (
    <NavLink
      style={{
        marginBottom: "8px",
        width: "100%",
        height: "48px",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        textDecoration: "none",
        columnGap: "11px",
        padding: "12px",
        borderRadius: "12px",
        color: "#ffff",
        fontSize: "18px",
        fontWeight: 500,
      }}
      to={to}
    >
      <Box>{title}</Box>
    </NavLink>
  );
}
MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};
export default MenuItem;
