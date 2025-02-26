import {
  Alert,
  Box,
  Button,
  Grid,
  Slide,
  Snackbar,
  Typography,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useParams } from "react-router-dom";
import { ApiProductDetail } from "../../apiService/ApiProductDetail";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { ApiAddItemToCart } from "../../apiService/ApiAddItemTocart";

function ProductDetail() {
  const vertical = "top";
  const horizontal = "right";

  const { id } = useParams();
  const authContext = useAuth();
  const isAuthenticated = authContext.isAuthenticated;
  const navigate = useNavigate();
  const idUser = authContext.idUser;

  const [quantityItem, setQuantityItem] = useState(1);
  const [dataProductDetail, setDataProductDetail] = useState([]);
  const [responseAddItemToCart, setResponseAddItemToCart] = useState();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (id) {
      retrieveProduct();
    }
  }, [id]);
  const retrieveProduct = () => {
    ApiProductDetail(id)
      .then((response) => {
        setDataProductDetail(response.data);
      })
      .catch((error) => console.log(error));
  };

  // Hàm xử lý thêm vào giỏ hàng
  const handleAddItemToCart = () => {
    // Kiểm tra idUser và quantityItem
    if (idUser && quantityItem) {
      if (!idUser) {
        console.error("Bạn cần đăng nhập để thêm sản phẩm vào giỏ hàng");
        return;
      }
      ApiAddItemToCart({ idUser, id, quantityItem })
        .then((response) => {
          setResponseAddItemToCart(response.data);
          setOpen(true);
        })
        .catch((error) => console.log(error));
    } else {
      console.error("Thiếu thông tin cần thiết để thêm vào giỏ hàng");
    }
  };

  const handleDecreaseQuantityItem = () => {
    // Decrease quantity but don't allow it to go below 1
    if (quantityItem > 1) {
      setQuantityItem(quantityItem - 1);
    }
  };

  const handleIncreaseQuantityItem = () => {
    // Increase quantity by 1
    setQuantityItem(quantityItem + 1);
  };

  const handleCheckLogin = () => {
    //neu isAuthenticated thi cho add vao cart
    if (isAuthenticated) {
      handleAddItemToCart();
    } else {
      navigate(`/login`);
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
        sx={{ mt: 5 }}
      >
        <Alert
          onClose={handleClose}
          severity="success"
          sx={{
            width: "100%",
            backgroundColor: "primary.light",
            color: "text.primary",
          }}
        >
          {responseAddItemToCart}.
        </Alert>
      </Snackbar>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box sx={{ width: "1200px", mt: 5 }}>
          {dataProductDetail.map((data) => (
            <Grid container spacing={2} key={data.id}>
              <Grid item xs={12} sm={12} md={7}>
                <Box
                  style={{
                    // k cần fix cứng width, heightheight
                    width: "100%",
                    height: "0",
                    paddingTop: "80%", //  Tỷ Lệ 1:1 (Hình vuông)( paddingTop: "56.25%", Tỷ lệ 16:9,  paddingTop: "80%",Tỷ lệ 4:5)

                    backgroundImage: `url(${data.image})`,
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
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      fontSize={"28px"}
                    >
                      {data.name}
                    </Typography>
                    <Typography variant="h6" fontWeight="400" fontSize={"18px"}>
                      {data.price} ₫
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
                        onClick={handleDecreaseQuantityItem}
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
                        {quantityItem}
                      </Typography>
                      <Button
                        onClick={handleIncreaseQuantityItem}
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
                    <Box sx={{ mt: 3 }}>
                      <Button
                        onClick={handleCheckLogin}
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
          ))}
        </Box>
      </Box>
    </>
  );
}

export default ProductDetail;
