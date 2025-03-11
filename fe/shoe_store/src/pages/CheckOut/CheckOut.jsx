import {
  Box,
  Button,
  Card,
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import PaymentIcon from "@mui/icons-material/Payment";
import CurrencyRubleIcon from "@mui/icons-material/CurrencyRuble";
import GoogleIcon from "@mui/icons-material/Google";
import { useEffect, useState } from "react";
import { ApiCartUser } from "../../apiService/ApiCartUser";
import { ApiTotalItem } from "../../apiService/ApiTotalItem";
import { useParams } from "react-router-dom";
import { CheckOutApi } from "../../apiService/CheckoutApi";
import { EmptyCartApi } from "../../apiService/EmptyCartApi";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const { idUser } = useParams();

  const navigate = useNavigate();

  const [paymentMethod, setPaymentMethod] = useState("card");

  const [DataCartUsers, setDataCartUser] = useState([]);
  const [totalItems, setTotalItem] = useState();

  useEffect(() => {
    retrieveProduct();
    retrieveTotalItem();
  }, []);

  const retrieveProduct = () => {
    ApiCartUser(idUser)
      .then((response) => {
        setDataCartUser(response.data);
      })
      .catch((error) => console.log(error));
  };

  // useEffect(() => retrieveTotalItem(), []);
  const retrieveTotalItem = () => {
    ApiTotalItem(idUser)
      .then((response) => {
        setTotalItem(response.data);
      })
      .catch((error) => console.log(error));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Kiểm tra giỏ hàng có sản phẩm không
    if (DataCartUsers.length === 0) {
      alert("Giỏ hàng của bạn đang trống!");
      return;
    }

    const items = DataCartUsers.map((product) => ({
      productId: product.product.id, // ID sản phẩm
      quantity: product.quantity, // Số lượng sản phẩm
      price: product.product.price, // Giá sản phẩm (có thể cần nếu muốn tính lại tổng)
    }));

    const formData = {
      name: e.target.name.value,
      address: e.target.address.value,
      email: e.target.email.value,
      phoneNumber: e.target.phoneNumber.value,
      paymentMethod: paymentMethod,
      nameOnCard: paymentMethod === "card" ? e.target.nameOnCard.value : null,
      cardNumber: paymentMethod === "card" ? e.target.cardNumber.value : null,
      expiryDate: paymentMethod === "card" ? e.target.expiryDate.value : null,
      cvv: paymentMethod === "card" ? e.target.cvv.value : null,
      subtotal: totalItems,
      shipping: "Free",
      total: totalItems,
      items: items, // sửa từ "item" thành "items"
    };

    // Gọi API checkout
    CheckOutApi(idUser, formData)
      .then((response) => {
        console.log("Checkout successful", response);
        // Sau khi checkout thành công, gọi API để làm trống giỏ hàng
        EmptyCartApi(idUser)
          .then((response) => {
            setDataCartUser([]);
            setTotalItem(0);
            console.log("Empty cart successful", response);
            navigate("/successCheckOut");
          })
          .catch((error) => {
            console.error("Error emptying cart", error);
          });
      })
      .catch((error) => {
        console.error("Checkout error", error);
      });
  };

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
        <Box
          component="form"
          onSubmit={handleSubmit}
          method="POST"
          noValidate
          sx={{
            width: "800px",
          }}
        >
          <Grid container>
            <Grid item xs={12} sm={12} md={8}>
              <Box sx={{ width: "80%" }}>
                <Typography sx={{ fontWeight: "500", fontSize: "30px", mb: 5 }}>
                  Delivery
                </Typography>
                <Typography sx={{ fontWeight: "400", fontSize: "20px", mb: 3 }}>
                  Enter your name and address:
                </Typography>
                <TextField
                  // onChange={handlePassword}
                  required
                  fullWidth
                  type="text"
                  id="name"
                  label=" Name"
                  name="name"
                  sx={{
                    mb: 3,
                  }}
                />

                <TextField
                  // onChange={handlePassword}
                  required
                  fullWidth
                  type="text"
                  id="address"
                  label="Address"
                  name="address"
                  autoComplete="Address"
                  sx={{
                    mb: 5,
                  }}
                />
                <Typography sx={{ fontWeight: "400", fontSize: "20px", mb: 3 }}>
                  What is your contact information?
                </Typography>
                <TextField
                  // onChange={handlePassword}
                  required
                  fullWidth
                  type="text"
                  id="email"
                  label="Email"
                  name="email"
                  sx={{
                    mb: 3,
                  }}
                />
                <TextField
                  // onChange={handlePassword}
                  required
                  fullWidth
                  type="text"
                  id="phoneNumber"
                  label="Phone Number"
                  name="phoneNumber"
                  sx={{
                    mb: 5,
                  }}
                />
                <Typography sx={{ fontWeight: "400", fontSize: "20px", mb: 3 }}>
                  Payment
                </Typography>
                <Typography sx={{ fontWeight: "300", fontSize: "16px", mb: 1 }}>
                  How would you like to pay?
                </Typography>

                <FormControl fullWidth component="fieldset">
                  <RadioGroup
                    value={paymentMethod}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  >
                    {/* Credit/Debit Card */}
                    <Card
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        p: 2,
                        mb: 1,
                        boxShadow: "none",
                        border:
                          paymentMethod === "card"
                            ? "3px solid #2196f3"
                            : "1px solid ",
                        cursor: "pointer",
                        backgroundColor:
                          paymentMethod === "card"
                            ? "background.default"
                            : "background.default",
                      }}
                      onClick={() => setPaymentMethod("card")}
                    >
                      <PaymentIcon sx={{ mr: 1, color: "#2196f3" }} />
                      <FormControlLabel
                        value="card"
                        sx={{ ml: 1, color: "text.primary" }}
                        control={<Radio sx={{ display: "none" }} />} // Ẩn Radio Button
                        label="Credit or Debit Card"
                      />
                    </Card>

                    {/* PayPal */}
                    <Card
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        p: 2,
                        mb: 1,
                        boxShadow: "none",

                        border:
                          paymentMethod === "paypal"
                            ? "3px solid #2196f3"
                            : "1px solid ",
                        cursor: "pointer",
                        backgroundColor:
                          paymentMethod === "paypal"
                            ? "background.default"
                            : "background.default",
                      }}
                      onClick={() => setPaymentMethod("paypal")}
                    >
                      <CurrencyRubleIcon sx={{ mr: 1, color: "#0070BA" }} />
                      <FormControlLabel
                        value="paypal"
                        sx={{ ml: 1, color: "text.primary" }}
                        control={<Radio sx={{ display: "none" }} />} // Ẩn Radio Button
                        label="PayPal"
                      />
                    </Card>

                    {/* Google Pay */}
                    <Card
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        p: 2,
                        boxShadow: "none",

                        border:
                          paymentMethod === "gPay"
                            ? "3px solid #2196f3"
                            : "1px solid ",
                        cursor: "pointer",
                        backgroundColor:
                          paymentMethod === "gPay"
                            ? "background.default"
                            : "background.default",
                      }}
                      onClick={() => setPaymentMethod("gPay")}
                    >
                      <GoogleIcon sx={{ mr: 1, color: "#2196f3" }} />
                      <FormControlLabel
                        value="gPay"
                        sx={{ ml: 1, color: "text.primary" }}
                        control={<Radio sx={{ display: "none" }} />} // Ẩn Radio Button
                        label="Google Pay"
                      />
                    </Card>
                  </RadioGroup>
                </FormControl>

                {/* Hiển thị form nhập thông tin thẻ nếu chọn Credit/Debit Card */}
                {paymentMethod === "card" && (
                  <Box>
                    <Typography
                      sx={{ fontWeight: "300", fontSize: "16px", my: 1 }}
                    >
                      Enter your payment details:
                    </Typography>
                    <TextField
                      required
                      fullWidth
                      type="text"
                      id="nameOnCard"
                      label="Name on Card"
                      name="nameOnCard"
                      sx={{ mb: 3 }}
                    />
                    <TextField
                      required
                      fullWidth
                      type="text"
                      id="cardNumber"
                      label="Card Number"
                      name="cardNumber"
                      sx={{ mb: 3 }}
                    />
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-around",
                        mb: 5,
                      }}
                    >
                      <TextField
                        required
                        type="text"
                        id="expiryDate"
                        label="Expiry Date"
                        name="expiryDate"
                      />
                      <TextField
                        required
                        type="text"
                        id="cvv"
                        label="CVV"
                        name="cvv"
                      />
                    </Box>
                  </Box>
                )}
                <Grid item xs={12} sx={{ ml: "5em", mr: "5em" }}>
                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    size="large"
                    sx={{
                      mt: 3,
                      mb: 10,
                      borderRadius: 28,
                      color: "text.primary",
                      minWidth: "170px",
                      backgroundColor: "primary.main",
                    }}
                  >
                    Place Order
                  </Button>
                </Grid>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <Typography sx={{ fontWeight: "500", fontSize: "30px", mb: 5 }}>
                Order Summary
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  pb: 3,
                }}
              >
                <Typography sx={{ fontWeight: 400, fontSize: "16px" }}>
                  Subtotal
                </Typography>
                <Typography sx={{ fontWeight: 400, fontSize: "16px" }}>
                  {totalItems}₫
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
                <Typography sx={{ fontWeight: 400, fontSize: "16px" }}>
                  Delivery/Shipping
                </Typography>
                <Typography sx={{ fontWeight: 400, fontSize: "16px" }}>
                  Free
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  borderBottom: "1px solid #ccc",
                  py: 2,
                  mb: 2,
                }}
              >
                <Typography sx={{ fontWeight: 500, fontSize: "16px" }}>
                  Total
                </Typography>
                <Typography sx={{ fontWeight: 500, fontSize: "16px" }}>
                  {totalItems}₫
                </Typography>
              </Box>

              <Box>
                {DataCartUsers.map((DataCartUser, index) => (
                  <Card
                    key={index}
                    sx={{
                      backgroundColor: "transparent", // Làm trong suốt nếu muốn
                      display: "flex",
                      alignItems: "center",
                      p: 2,
                      mb: 2,
                      borderRadius: 2,
                      boxShadow: "none",
                      border: "1px solid #ddd",
                    }}
                  >
                    <img
                      src={DataCartUser.product.image}
                      alt={DataCartUser.product.name}
                      style={{
                        width: 90,
                        height: "auto",
                        objectFit: "cover",
                        borderRadius: 5,
                        marginRight: 15,
                      }}
                    />
                    <Box sx={{ flex: 1 }}>
                      <Typography sx={{ fontSize: "14px", fontWeight: 500 }}>
                        {DataCartUser.product.name}
                      </Typography>
                      <Typography sx={{ fontSize: "12px", color: "gray" }}>
                        Qty {DataCartUser.quantity}
                      </Typography>

                      <Typography
                        sx={{ fontSize: "14px", fontWeight: 500, mt: 1 }}
                      >
                        {DataCartUser.product.price}
                      </Typography>
                    </Box>
                  </Card>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default Checkout;
