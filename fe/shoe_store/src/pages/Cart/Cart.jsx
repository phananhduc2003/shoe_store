import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

function Cart() {
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
        <Box
          sx={{
            width: "1100px",
          }}
        >
          <Grid container>
            <Grid item xs={12} sm={12} md={8}>
              <Typography
                sx={{ fontWeight: "regular", fontSize: "30px", mb: 3 }}
              >
                Bag
              </Typography>

              <Card
                sx={{
                  display: "flex",
                  marginBottom: 3,
                  borderRadius: 0,
                  borderBottom: "1px solid #ccc", // Đường kẻ ngang dưới cùng
                  bgcolor: "background.default",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      width: { xs: 80, sm: 120, md: 150 },
                      height: "auto",
                      borderRadius: 1,
                    }}
                    image="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,b_rgb:f5f5f5/c4ebefeb-5ddf-4b4f-b6e5-e8bbd94cfada/v2k-run-shoes-Zk2zRL.png"
                    alt="Live from space album cover"
                  />
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    borderRadius="50px"
                    border="2px solid #ccc"
                    sx={{
                      width: "100%",
                      maxWidth: "100px",
                      minWidth: "50px",
                      height: "40px",
                      my: 2,
                    }}
                  >
                    <Button
                      // onClick={() => setCount(count - 1)}

                      sx={{
                        minWidth: "20px",
                        height: "40px",
                        borderRadius: 6,
                        fontSize: "18px",
                        color: "text.primary",
                      }}
                    >
                      –
                    </Button>
                    <Typography
                      variant="h6"
                      sx={{ mx: 2, color: "text.primary" }}
                    >
                      1
                    </Typography>
                    <Button
                      // onClick={() => setCount(count + 1)}
                      sx={{
                        minWidth: "20px",
                        height: "40px",
                        borderRadius: 6,
                        fontSize: "18px",
                        color: "text.primary",
                      }}
                    >
                      +
                    </Button>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                  }}
                >
                  <CardContent>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "100%",
                      }}
                    >
                      <Typography sx={{ fontWeight: 500, fontSize: "20px" }}>
                        Live From Space
                      </Typography>
                      <Typography sx={{ fontWeight: 500, fontSize: "18px" }}>
                        1.000.000₫
                      </Typography>
                    </Box>
                    <Typography
                      variant="subtitle1"
                      component="div"
                      sx={{ color: "text.secondary" }}
                    >
                      Mac Miller
                    </Typography>
                  </CardContent>
                </Box>
              </Card>
              <Card
                sx={{
                  display: "flex",
                  bgcolor: "background.default",
                  borderBottom: "1px solid #ccc",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      width: { xs: 80, sm: 120, md: 150 },
                      height: "auto",
                      borderRadius: 1,
                    }}
                    image="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,b_rgb:f5f5f5/c4ebefeb-5ddf-4b4f-b6e5-e8bbd94cfada/v2k-run-shoes-Zk2zRL.png"
                    alt="Live from space album cover"
                  />
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    borderRadius="50px"
                    border="2px solid #ccc"
                    sx={{
                      width: "100%",
                      maxWidth: "100px",
                      minWidth: "50px",
                      height: "40px",
                      my: 2,
                    }}
                  >
                    <Button
                      // onClick={() => setCount(count - 1)}
                      disableRipple
                      sx={{
                        minWidth: "20px",
                        height: "40px",
                        borderRadius: 6,
                        fontSize: "18px",
                        color: "text.primary",
                      }}
                    >
                      -
                    </Button>
                    <Typography
                      variant="h6"
                      sx={{ mx: 2, color: "text.primary" }}
                    >
                      1
                    </Typography>
                    <Button
                      // onClick={() => setCount(count + 1)}
                      sx={{
                        minWidth: "20px",
                        height: "40px",
                        fontSize: "18px",
                        color: "text.primary",
                        borderRadius: 6,
                      }}
                    >
                      +
                    </Button>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                  }}
                >
                  <CardContent>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "100%",
                      }}
                    >
                      <Typography sx={{ fontWeight: 500, fontSize: "20px" }}>
                        Live From Space
                      </Typography>
                      <Typography sx={{ fontWeight: 500, fontSize: "18px" }}>
                        1.000.000₫
                      </Typography>
                    </Box>
                    <Typography
                      variant="subtitle1"
                      component="div"
                      sx={{ color: "text.secondary" }}
                    >
                      Mac Miller
                    </Typography>
                  </CardContent>
                </Box>
              </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <Box sx={{ marginLeft: 2 }}>
                <Typography
                  sx={{ fontWeight: "regular", fontSize: "30px", mb: 3 }}
                >
                  Summary
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    pb: 3,
                  }}
                >
                  <Typography sx={{ fontWeight: 500, fontSize: "16px" }}>
                    Subtotal
                  </Typography>
                  <Typography sx={{ fontWeight: 500, fontSize: "16px" }}>
                    123842,231
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    borderBottom: "1px solid #ccc",
                    pb: 3,
                  }}
                >
                  <Typography sx={{ fontWeight: 500, fontSize: "16px" }}>
                    Estimated Delivery & Handling
                  </Typography>
                  <Typography sx={{ fontWeight: 500, fontSize: "16px" }}>
                    Free
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    borderBottom: "1px solid #ccc",
                    py: 3,
                  }}
                >
                  <Typography sx={{ fontWeight: 500, fontSize: "16px" }}>
                    Total
                  </Typography>
                  <Typography sx={{ fontWeight: 500, fontSize: "16px" }}>
                    123842,231
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
                  <Button
                    variant="contained"
                    sx={{ width: "80%", height: "60px", borderRadius: 10 }}
                  >
                    Member Checkout
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default Cart;
