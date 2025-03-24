import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types";

function TitleDashBoard({ title, textDescription }) {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          maxWidth: "300px",
          height: "100%",
          padding: 5,
          boxShadow: 4,
          borderRadius: 2,
          backgroundColor: "#ffffff",
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: "700", py: 2 }}>
          {title}
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{ textAlign: "center", color: "text.secondary" }}
        >
          {textDescription}
        </Typography>
      </Box>
    </>
  );
}
TitleDashBoard.propTypes = {
  title: PropTypes.string,
  textDescription: PropTypes.string,
};

export default TitleDashBoard;
