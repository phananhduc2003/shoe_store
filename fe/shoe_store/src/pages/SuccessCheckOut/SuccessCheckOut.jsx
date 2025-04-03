import { Box, Button, Typography } from "@mui/material";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { useLocation, useNavigate } from "react-router-dom";

function SuccessCheckOut() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const message = queryParams.get("message") || "Thanh toán thành công.";
  const navigate = useNavigate();

  const handleNavigateHome = () => {
    navigate("/");
  };

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
            {message}
          </Typography>
          <Typography>
            Cảm ơn bạn đã mua hàng tại hệ thống của chúng tôi.
          </Typography>
          <Button
            variant="contained"
            onClick={handleNavigateHome}
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
            Về trang chủ
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default SuccessCheckOut;
