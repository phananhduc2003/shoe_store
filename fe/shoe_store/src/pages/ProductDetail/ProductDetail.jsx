import { Box, Button, Grid, Typography } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

function ProductDetail() {
  const image =
    "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/sqj9b8gqy0mofneog6cx/NIKE+ZOOM+VOMERO+5.png";

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box sx={{ width: "1200px", mt: 5 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={7}>
              <Box
                style={{
                  // k cần fix cứng width, heightheight
                  width: "100%",
                  height: "0",
                  paddingTop: "100%", //  Tỷ Lệ 1:1 (Hình vuông)( paddingTop: "56.25%", Tỷ lệ 16:9,  paddingTop: "80%",Tỷ lệ 4:5)

                  backgroundImage: `url(${image})`,
                  backgroundSize: "contain", // Changed from "cover" to "contain"
                  backgroundRepeat: "no-repeat", // Prevents tiling of the image
                  backgroundPosition: "center", // Ensures the image stays centere

                  borderRadius: "16px", // Bo góc 16px
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", // Bóng đổ mềm
                  backgroundColor: "#f5f5f5", // Thêm màu nền để nổi bóng đổ
                }}
              ></Box>
            </Grid>
            <Grid item xs={12} sm={12} md={5}>
              <Box sx={{}}>
                <Box sx={{ padding: 2, height: "100%" }}>
                  <Typography variant="h6" fontWeight="bold" fontSize={"28px"}>
                    name
                  </Typography>
                  <Typography variant="h6" fontWeight="400" fontSize={"18px"}>
                    1,000,000
                  </Typography>
                  <Box sx={{ mt: 8 }}>
                    <Typography sx={{ fontWeight: 500 }}>
                      Select Size
                    </Typography>
                    <Grid container rowSpacing={1} sx={{ mt: 1 }}>
                      <Grid item xs={3} sm={3} md={3}>
                        <Button
                          sx={{
                            width: "88px",
                            height: "48px",
                            color: "text.primary",
                            borderColor: "text.primary",
                          }}
                          variant="outlined"
                        >
                          EU 38
                        </Button>
                      </Grid>
                      <Grid item xs={3} sm={3} md={3}>
                        <Button
                          sx={{
                            width: "88px",
                            height: "48px",
                            color: "text.primary",
                            borderColor: "text.primary",
                          }}
                          variant="outlined"
                        >
                          EU 39
                        </Button>
                      </Grid>
                      <Grid item xs={3} sm={3} md={3}>
                        <Button
                          sx={{
                            width: "88px",
                            height: "48px",
                            color: "text.primary",
                            borderColor: "text.primary",
                          }}
                          variant="outlined"
                        >
                          EU 39.5
                        </Button>
                      </Grid>
                      <Grid item xs={3} sm={3} md={3}>
                        <Button
                          sx={{
                            width: "88px",
                            height: "48px",
                            color: "text.primary",
                            borderColor: "text.primary",
                          }}
                          variant="outlined"
                        >
                          EU 40
                        </Button>
                      </Grid>
                      <Grid item xs={3} sm={3} md={3}>
                        <Button
                          sx={{
                            width: "88px",
                            height: "48px",
                            color: "text.primary",
                            borderColor: "text.primary",
                          }}
                          variant="outlined"
                        >
                          EU 40.5
                        </Button>
                      </Grid>
                      <Grid item xs={3} sm={3} md={3}>
                        <Button
                          sx={{
                            width: "88px",
                            height: "48px",
                            color: "text.primary",
                            borderColor: "text.primary",
                          }}
                          variant="outlined"
                        >
                          EU 41
                        </Button>
                      </Grid>
                      <Grid item xs={3} sm={3} md={3}>
                        <Button
                          sx={{
                            width: "88px",
                            height: "48px",
                            color: "text.primary",
                            borderColor: "text.primary",
                          }}
                          variant="outlined"
                        >
                          EU 42
                        </Button>
                      </Grid>
                      <Grid item xs={3} sm={3} md={3}>
                        <Button
                          sx={{
                            width: "88px",
                            height: "48px",
                            color: "text.primary",
                            borderColor: "text.primary",
                          }}
                          variant="outlined"
                        >
                          EU 43
                        </Button>
                      </Grid>
                      <Grid item xs={3} sm={3} md={3}>
                        <Button
                          sx={{
                            width: "88px",
                            height: "48px",
                            color: "text.primary",
                            borderColor: "text.primary",
                          }}
                          variant="outlined"
                        >
                          EU 43.5
                        </Button>
                      </Grid>
                      <Grid item xs={3} sm={3} md={3}>
                        <Button
                          sx={{
                            width: "88px",
                            height: "48px",
                            color: "text.primary",
                            borderColor: "text.primary",
                          }}
                          variant="outlined"
                        >
                          EU 44
                        </Button>
                      </Grid>
                      <Grid item xs={3} sm={3} md={3}>
                        <Button
                          sx={{
                            width: "88px",
                            height: "48px",
                            color: "text.primary",
                            borderColor: "text.primary",
                          }}
                          variant="outlined"
                        >
                          EU 45
                        </Button>
                      </Grid>
                      <Grid item xs={3} sm={3} md={3}>
                        <Button
                          sx={{
                            width: "88px",
                            height: "48px",
                            color: "text.primary",
                            borderColor: "text.primary",
                          }}
                          variant="outlined"
                        >
                          EU 46
                        </Button>
                      </Grid>
                    </Grid>
                  </Box>
                  <Box sx={{ mt: 5 }}>
                    <Button
                      variant="contained"
                      sx={{ width: "100%", height: "50px", borderRadius: 10 }}
                    >
                      Add to Cart
                    </Button>
                    <Button
                      variant="outlined"
                      sx={{
                        width: "100%",
                        height: "50px",
                        borderRadius: 10,
                        mt: 2,
                      }}
                      endIcon={<FavoriteBorderIcon />}
                    >
                      Favorite
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default ProductDetail;
