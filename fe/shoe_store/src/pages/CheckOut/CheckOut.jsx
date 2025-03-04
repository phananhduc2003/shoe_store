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
import { useState } from "react";

function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState("card");

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
        <Box
          component="form"
          // onSubmit={handleSubmit}
          method="POST"
          // noValidate
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
                  id="firstName"
                  label="First Name"
                  name="firstName"
                  sx={{
                    mb: 3,
                  }}
                />
                <TextField
                  // onChange={handlePassword}
                  required
                  fullWidth
                  type="text"
                  id="lastName"
                  label="Last Name"
                  name="lastName"
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
                    Sign in
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
                  15236₫
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
                  123₫
                </Typography>
              </Box>

              <Box>
                {[
                  {
                    img: "https://secure-images.nike.com/is/image/DotCom/DH3158_100?v=cc74bdb5c6c48cd097ec1b2bced80ba4",
                    name: "Nike Court Vision Low Next Nature Women's Shoes",
                    qty: 1,
                    size: "EU 39",
                    price: "1,909,000₫",
                  },
                  {
                    img: "https://secure-images.nike.com/is/image/DotCom/DH3158_100?v=cc74bdb5c6c48cd097ec1b2bced80ba4",
                    name: "Nike Pegasus 41 Women's Road Running Shoes",
                    qty: 1,
                    size: "EU 39",
                    price: "3,829,000₫",
                  },
                ].map((item, index) => (
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
                      src={item.img}
                      alt={item.name}
                      style={{
                        width: 80,
                        height: 80,
                        objectFit: "cover",
                        borderRadius: 5,
                        marginRight: 15,
                      }}
                    />
                    <Box sx={{ flex: 1 }}>
                      <Typography sx={{ fontSize: "14px", fontWeight: 500 }}>
                        {item.name}
                      </Typography>
                      <Typography sx={{ fontSize: "12px", color: "gray" }}>
                        Qty {item.qty}
                      </Typography>
                      <Typography sx={{ fontSize: "12px", color: "gray" }}>
                        Size {item.size}
                      </Typography>
                      <Typography
                        sx={{ fontSize: "14px", fontWeight: 500, mt: 1 }}
                      >
                        {item.price}
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
