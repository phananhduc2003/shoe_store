import { Box, Button, Typography } from "@mui/material";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { Link } from "react-router-dom";

function SuccessCheckOut() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <TaskAltIcon sx={{ width: 80, height: 80, mb: 5 }} />
          <Typography sx={{ fontWeight: 500, fontSize: 42 }}>
            Your payment has been received
          </Typography>
          <Typography>
            Please check your email for a payment confirmation & invoice.
          </Typography>
          <Button
            variant="contained"
            component={Link}
            to="/"
            fullWidth
            size="large"
            sx={{
              mt: 3,
              mb: 10,
              borderRadius: 28,
              color: "text.primary",
              width: 200,
              backgroundColor: "primary.main",
            }}
          >
            Go to Your Home
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default SuccessCheckOut;
