import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { ApiCartUser } from "../../apiService/ApiCartUser";
import { useParams } from "react-router-dom";
import { ApiTotalItem } from "../../apiService/ApiTotalItem";
import { ApiIncreaseItemInCart } from "../../apiService/ApiIncreaseItemInCart";
import { ApiDecreaseItemInCart } from "../../apiService/ApiDecreaseItemInCart";

function Cart() {
  const { idUser } = useParams();

  const [DataCartUser, setDataCartUser] = useState([]);
  const [totalItem, setTotalItem] = useState();
  const [responseIncreaseItem, setResponseIncreaseItem] = useState();
  const [responseDecreaseItem, setResponseDecreaseItem] = useState();

  useEffect(() => retrieveProduct(), []);
  const retrieveProduct = () => {
    ApiCartUser(idUser)
      .then((response) => {
        setDataCartUser(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => retrieveTotalItem(), []);
  const retrieveTotalItem = () => {
    ApiTotalItem(idUser)
      .then((response) => {
        setTotalItem(response.data);
      })
      .catch((error) => console.log(error));
  };

  console.log(responseDecreaseItem + responseIncreaseItem);

  const handleIncreaseItem = (idProduct) => {
    ApiIncreaseItemInCart({ idUser, idProduct })
      .then((response) => {
        setResponseIncreaseItem(response.data);
        retrieveProduct();
        retrieveTotalItem();
      })
      .catch((error) => console.log(error));
  };

  const handleDecreaseItem = (idProduct) => {
    ApiDecreaseItemInCart({ idUser, idProduct })
      .then((response) => {
        setResponseDecreaseItem(response.data);
        retrieveProduct();
        retrieveTotalItem();
      })
      .catch((error) => console.log(error));
  };

  console.log(DataCartUser);

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

              {DataCartUser.map((data) => (
                <Card
                  key={data.id}
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
                      image={data.product.image}
                      alt={data.product.name}
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
                        onClick={() => handleDecreaseItem(data.product.id)}
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
                        {data.quantity}
                      </Typography>
                      <Button
                        onClick={() => handleIncreaseItem(data.product.id)}
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
                          {data.product.name}
                        </Typography>
                        <Typography sx={{ fontWeight: 500, fontSize: "18px" }}>
                          {data.product.price}₫
                        </Typography>
                      </Box>
                      <Typography
                        variant="subtitle1"
                        component="div"
                        sx={{ color: "text.secondary" }}
                      >
                        {data.product.description}
                      </Typography>
                    </CardContent>
                  </Box>
                </Card>
              ))}
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
                    {totalItem}₫
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
                    {totalItem}₫
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
