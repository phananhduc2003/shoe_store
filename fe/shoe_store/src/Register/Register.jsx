import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import bg from "../assets/images/signin.svg";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import Stack from "@mui/material/Stack";
import Slide from "@mui/material/Slide";
import { useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";
import { ApiRegister } from "../apiService/ApiRegister";
import { ApiListUsers } from "../apiService/ApiListUsers";

const boxStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "75%",
  height: "70%",
  bgcolor: "background.paper",
  boxShadow: 24,
};

function Register() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [checkUserNames, setCheckUserNames] = useState([]);
  const [messageError, setMessageError] = useState("");
  const [messageSuccess, setMessageSuccess] = useState("");
  const [email, setEmail] = useState("");
  const [open, setOpen] = useState(false);

  // const authContext = useAuth();
  const vertical = "top";
  const horizontal = "right";

  // const userRole = authContext.userRole;

  const handleUsername = (e) => {
    setUsername(e.target.value);
    setOpen(false); // Đóng Snackbar khi người dùng nhập lại
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setOpen(false); // Đóng Snackbar khi người dùng nhập lại
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setOpen(false); // Đóng Snackbar khi người dùng nhập lại
  };

  const handleRegister = async (event) => {
    event.preventDefault();
    const formData = {
      username: username,
      password: password,
      email: email,
    };
    console.log(formData);

    try {
      // Gọi API lấy danh sách người dùng
      const response = await ApiListUsers();
      setCheckUserNames(response.data); // Cập nhật danh sách người dùng

      // Kiểm tra xem username đã tồn tại chưa
      if (response.data.find((user) => user.username === formData.username)) {
        setMessageError("Username already exists");
        setMessageSuccess(""); // Reset thông báo thành công
        setOpen(true); // Mở Snackbar khi có thông báo lỗi
        return;
      } else {
        // Nếu username chưa tồn tại, tiến hành gọi API đăng ký
        const registerResponse = await ApiRegister(formData);
        console.log(registerResponse);
        setMessageSuccess("Registration successful! Go to login page");
        setMessageError(""); // Reset thông báo lỗi
        setOpen(true); // Mở Snackbar khi đăng ký thành công
      }
    } catch (error) {
      console.error("Failed to fetch users:", error);
      setMessageError("An error occurred during registration");
      setMessageSuccess(""); // Reset thông báo thành công
      setOpen(true); // Mở Snackbar khi có lỗi
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  function TransitionLeft(props) {
    return <Slide {...props} direction="left" />;
  }

  return (
    <>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        TransitionComponent={TransitionLeft}
        anchorOrigin={{ vertical, horizontal }}
      >
        {/* Chỉ hiển thị một thông báo tại một thời điểm */}
        {messageError ? (
          <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
            {messageError}
          </Alert>
        ) : messageSuccess ? (
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            {messageSuccess}
          </Alert>
        ) : null}
      </Snackbar>
      <Box sx={boxStyle}>
        <Grid container>
          <Grid item xs={12} sm={12} lg={6}>
            <Box
              sx={{
                backgroundImage: `url(${bg})`,
                backgroundSize: "cover", //Dieu chinh kich thuoc cho anh
                marginTop: "40px",
                marginLeft: "15px",
                marginRight: "15px",
                height: "63vh",
                color: "#f5f5f5",
              }}
            ></Box>
          </Grid>

          <Grid item xs={12} sm={12} lg={6}>
            <Box
              sx={{
                backgroundSize: "cover",
                height: "70vh",
                minHeight: "500px",
                backgroundColor: "#3b33d5",
              }}
            >
              <Container>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Avatar
                    sx={{
                      mt: "35px",
                    }}
                  >
                    <LockOutlinedIcon />
                  </Avatar>
                  <Typography
                    component="h1"
                    variant="h4"
                    sx={{ color: "#ffffff" }}
                  >
                    Register
                  </Typography>
                </Box>
                <Box
                  component="form"
                  onSubmit={handleRegister}
                  method="POST"
                  noValidate
                  sx={{ mt: 2 }}
                >
                  <Grid container spacing={1}>
                    <Grid item xs={12} sx={{ ml: "3em", mr: "3em" }}>
                      <TextField
                        onChange={handleUsername}
                        required
                        fullWidth
                        id="Username"
                        label="Username"
                        name="Username"
                        InputProps={{
                          style: { color: "#ffffff" },
                        }}
                        InputLabelProps={{
                          style: { color: "#ffffff" },
                        }}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                              borderColor: "#ffffff",
                            },
                            "&:hover fieldset": {
                              borderColor: "#ffffff",
                            },
                            "&.Mui-focused fieldset": {
                              borderColor: "#ffffff",
                            },
                          },
                          "& .MuiInputLabel-root.Mui-focused": {
                            color: "#ffffff",
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sx={{ ml: "3em", mr: "3em" }}>
                      <TextField
                        onChange={handleEmail}
                        required
                        fullWidth
                        id="email"
                        label="Email"
                        name="email"
                        InputProps={{
                          style: { color: "#ffffff" },
                        }}
                        InputLabelProps={{
                          style: { color: "#ffffff" },
                        }}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                              borderColor: "#ffffff",
                            },
                            "&:hover fieldset": {
                              borderColor: "#ffffff",
                            },
                            "&.Mui-focused fieldset": {
                              borderColor: "#ffffff",
                            },
                          },
                          "& .MuiInputLabel-root.Mui-focused": {
                            color: "#ffffff",
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sx={{ ml: "3em", mr: "3em" }}>
                      <TextField
                        onChange={handlePassword}
                        required
                        fullWidth
                        type="password"
                        id="password"
                        label="Password"
                        name="password"
                        InputProps={{
                          style: { color: "#ffffff" },
                        }}
                        InputLabelProps={{
                          style: { color: "#ffffff" },
                        }}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                              borderColor: "#ffffff",
                            },
                            "&:hover fieldset": {
                              borderColor: "#ffffff",
                            },
                            "&.Mui-focused fieldset": {
                              borderColor: "#ffffff",
                            },
                          },
                          "& .MuiInputLabel-root.Mui-focused": {
                            color: "#ffffff",
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sx={{ ml: "5em", mr: "5em" }}>
                      <Button
                        type="submit"
                        variant="contained"
                        fullWidth={true}
                        size="large"
                        sx={{
                          mt: "10px",
                          mr: "20px",
                          borderRadius: 28,
                          color: "#ffffff",
                          minWidth: "170px",
                          backgroundColor: "#FF9A01",
                        }}
                      >
                        Register
                      </Button>
                    </Grid>
                    <Grid item xs={12} sx={{ ml: "3em", mr: "3em" }}>
                      <Stack direction="row" spacing={2}>
                        <Typography
                          variant="body1"
                          component="span"
                          style={{ marginTop: "10px", color: "#ffffff" }}
                        >
                          Already have an Account?{" "}
                          <span
                            style={{ color: "#beb4fb", cursor: "pointer" }}
                            onClick={() => {
                              navigate("/login");
                              window.location.reload();
                            }}
                          >
                            Sign in
                          </span>
                        </Typography>
                      </Stack>
                    </Grid>
                  </Grid>
                </Box>
                \
              </Container>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Register;
