import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { ProductApi } from "../../apiService/ProductApi";

function Product() {
  const location = useLocation();
  const [selectedPurpose, setSelectedPurpose] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState([]);
  const [products, setProducts] = useState([]);

  const purposeMapping = {
    Running: 1,
    Football: 2,
    Casual: 3,
    Outdoor: 4,
    Winter: 5,
  };

  const brandMapping = {
    Nike: 1,
    Adidas: 2,
    Puma: 3,
    Converse: 4,
    Vans: 5,
  };
  // Khi `location.state` thay đổi, cập nhật trạng thái ban đầu
  useEffect(() => {
    if (location.state?.purpose) {
      setSelectedPurpose([location.state.purpose]); // Gán ID của purpose
    }
    if (location.state?.brand) {
      setSelectedBrand([location.state.brand]); // Gán ID của brand
    }
  }, [location.state]);

  // Gọi lại API khi `selectedBrand` hoặc `selectedPurpose` thay đổi
  useEffect(() => {
    ShowProduct();
  }, [selectedBrand, selectedPurpose]);

  const ShowProduct = () => {
    const brandIds = selectedBrand.join(","); // Lấy danh sách ID của brand
    const purposeIds = selectedPurpose.join(","); // Lấy danh sách ID của purpose
    console.log("Calling API with:", { brandIds, purposeIds });

    ProductApi({ brandIds, purposeIds }) // Gọi API với các tham số
      .then((response) => {
        console.log("API Response:", response.data);
        setProducts(response.data);
      })
      .catch((error) => console.log("Failed to call API", error));
  };

  const handleCheckboxChange = (e, type) => {
    const { checked, value } = e.target;

    if (type === "purpose") {
      const id = purposeMapping[value]; // Lấy ID từ tên
      setSelectedPurpose((prev) =>
        checked ? [...prev, id] : prev.filter((item) => item !== id)
      );
    } else if (type === "brand") {
      const id = brandMapping[value]; // Lấy ID từ tên
      setSelectedBrand((prev) =>
        checked ? [...prev, id] : prev.filter((item) => item !== id)
      );
    }
  };
  return (
    <>
      <Box sx={{ display: "flex", width: "100%" }}>
        <Box
          sx={{
            position: "fixed",
            left: 0,
            top: 0,
            width: "300px",
            boxShadow: 5,
            height: "100vh",
            bgcolor: "background.paper",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", mt: "60px" }}>
            <Typography
              sx={{
                mt: 3,
                textAlign: "center",
                fontWeight: 700,
                fontSize: "20px",
                color: "primary.main",
              }}
            >
              Category
            </Typography>
            <FormControlLabel
              sx={{ ml: 4.5 }}
              control={<Checkbox />}
              label="All"
            />
            <Box sx={{ mx: 3 }}>
              <FormControl
                sx={{ m: 3 }}
                component="fieldset"
                variant="standard"
              >
                <FormLabel
                  sx={{
                    fontWeight: 500,
                    fontSize: "16px",
                    color: "text.primary",
                  }}
                >
                  Purpose
                </FormLabel>
                <FormGroup sx={{ ml: 3, color: "text.primary" }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={selectedPurpose.includes(
                          purposeMapping["Running"]
                        )}
                        value="Running"
                        onChange={(e) => handleCheckboxChange(e, "purpose")}
                      />
                    }
                    label="Running"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={selectedPurpose.includes(
                          purposeMapping["Football"]
                        )}
                        value="Football"
                        onChange={(e) => handleCheckboxChange(e, "purpose")}
                      />
                    }
                    label="Football"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={selectedPurpose.includes(
                          purposeMapping["Casual"]
                        )}
                        value="Casual"
                        onChange={(e) => handleCheckboxChange(e, "purpose")}
                      />
                    }
                    label="Casual"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={selectedPurpose.includes(
                          purposeMapping["Outdoor"]
                        )}
                        value="Outdoor"
                        onChange={(e) => handleCheckboxChange(e, "purpose")}
                      />
                    }
                    label="Outdoor"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={selectedPurpose.includes(
                          purposeMapping["Winter"]
                        )}
                        value="Winter"
                        onChange={(e) => handleCheckboxChange(e, "purpose")}
                      />
                    }
                    label="Winter"
                  />
                </FormGroup>
              </FormControl>
            </Box>
            <Box sx={{ mx: 3 }}>
              <FormControl
                sx={{ m: 3 }}
                component="fieldset"
                variant="standard"
              >
                <FormLabel
                  sx={{
                    fontWeight: 500,
                    fontSize: "16px",
                    color: "text.primary",
                  }}
                >
                  Brand
                </FormLabel>
                <FormGroup sx={{ ml: 3, color: "text.primary" }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={selectedBrand.includes(brandMapping["Nike"])}
                        value="Nike"
                        onChange={(e) => handleCheckboxChange(e, "brand")}
                      />
                    }
                    label="Nike"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={selectedBrand.includes(brandMapping["Adidas"])}
                        value="Adidas"
                        onChange={(e) => handleCheckboxChange(e, "brand")}
                      />
                    }
                    label="Adidas"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={selectedBrand.includes(brandMapping["Puma"])}
                        value="Puma"
                        onChange={(e) => handleCheckboxChange(e, "brand")}
                      />
                    }
                    label="Puma"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={selectedBrand.includes(
                          brandMapping["Converse"]
                        )}
                        value="Converse"
                        onChange={(e) => handleCheckboxChange(e, "brand")}
                      />
                    }
                    label="Converse"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={selectedBrand.includes(brandMapping["Vans"])}
                        value="Vans"
                        onChange={(e) => handleCheckboxChange(e, "brand")}
                      />
                    }
                    label="Vans"
                  />
                </FormGroup>
              </FormControl>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            ml: "320px",
            mr: 2,
            width: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              mt: 3,
              justifyContent: "space-between",
              backgroundColor: "background.paper",
              height: "60px",
            }}
          >
            <Typography sx={{ textAlign: "center", lineHeight: "60px" }}>
              Tổng số sản phẩm
            </Typography>
            <Box
              sx={{
                display: "flex",
                margin: "auto",
                lineHeight: "60px",
                height: "36px",
                width: "300px",
                borderRadius: 3,
                boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.2)",
                overflow: "hidden",
                mr: 3,
              }}
            >
              <TextField
                variant="outlined"
                placeholder="Search"
                sx={{
                  width: "100%",
                  height: "100%",
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 0,
                    height: "100%",
                    backgroundColor: "#ffffff",
                    paddingRight: 0,
                    color: "#0F1214",
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                  },
                }}
              />
              <Button
                variant="contained"
                sx={{
                  minWidth: "unset",
                  padding: "0 16px",
                  borderRadius: 0,
                  backgroundColor: "primary.main",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "#334296",
                  },
                }}
              >
                <SearchIcon />
              </Button>
            </Box>
          </Box>
          <Box sx={{ py: 4 }}>
            <Grid container spacing={4}>
              {products.map((product) => (
                <Grid item xs={12} sm={6} md={4} key={product.id}>
                  <Card
                    sx={{ boxShadow: 2, borderRadius: 2, bgcolor: "#ffffff" }}
                  >
                    <CardMedia
                      component="img"
                      height="300"
                      image={product.image}
                      alt={product.name}
                      sx={{ objectFit: "contain", padding: 1 }}
                    />
                    <CardContent>
                      <Typography variant="body1" fontWeight="bold">
                        {product.name}
                      </Typography>

                      <Typography
                        variant="h6"
                        color="primary.dark"
                        fontWeight="bold"
                        sx={{ marginTop: 1 }}
                      >
                        {product.price}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Product;
