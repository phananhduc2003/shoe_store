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
  Pagination,
  TextField,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCallback } from "react";
import { ProductApi } from "../../apiService/ProductApi";

function Product() {
  const location = useLocation();

  const navigate = useNavigate();

  const [selectedPurpose, setSelectedPurpose] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState([]);

  const [currentPage, setCurrentPage] = useState(1); // Trang hiện tại
  const [totalPages, setTotalPages] = useState(0); // Tổng số trang

  const [allProducts, setAllProducts] = useState([]); // Danh sách gốc từ API
  const [filteredProducts, setFilteredProducts] = useState([]); // Danh sách đã lọc từ tìm kiếm
  const [searchKeyword, setSearchKeyword] = useState(""); // Từ khóa tìm kiếm

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

  const ShowProduct = useCallback(() => {
    const brandIds = selectedBrand.join(",");
    const purposeIds = selectedPurpose.join(",");

    ProductApi({ brandIds, purposeIds, page: currentPage - 1, size: 6 })
      .then((response) => {
        const fetchedProducts = response.data.content || [];
        setAllProducts(fetchedProducts);
        setFilteredProducts(fetchedProducts);
        setTotalPages(response.data.totalPages || 0);
      })
      .catch((error) => console.log("Failed to call API", error));
  }, [selectedBrand, selectedPurpose, currentPage]);

  useEffect(() => {
    ShowProduct();
  }, [ShowProduct]);

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
    // Reset trang hiện tại về 1
    setCurrentPage(1);
  };

  const handlePageChange = (event, value) => {
    setCurrentPage(value); // Cập nhật trang hiện tại
  };

  // Debounce cho tìm kiếm
  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (searchKeyword === "") {
        setFilteredProducts(allProducts); // Nếu từ khóa rỗng, hiển thị tất cả
      } else {
        const filtered = allProducts.filter((product) =>
          product.name.toLowerCase().includes(searchKeyword)
        );
        setFilteredProducts(filtered);
      }
    }, 300); // Đợi 300ms sau khi ngừng gõ

    return () => clearTimeout(delayDebounce); // Xóa timeout cũ
  }, [searchKeyword, allProducts]);
  //search
  const handleSearch = (e) => {
    let keyword = e.target.value.toLowerCase().trim(); // Loại bỏ khoảng trắng đầu/cuối
    keyword = keyword.replace(/\s+/g, " "); // Chuyển nhiều khoảng trắng liên tiếp thành 1 khoảng trắng
    setSearchKeyword(keyword);
  };

  const handleNavigatorProductDetail = () => {
    navigate(`/productDetail`);
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
                onChange={handleSearch}
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
                  onChange: {},
                }}
              >
                <SearchIcon />
              </Button>
            </Box>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", py: 4 }}>
            <Grid container spacing={4}>
              {filteredProducts.length > 0 ? (
                filteredProducts.map((filteredProduct) => (
                  <Grid item xs={12} sm={6} md={4} key={filteredProduct.id}>
                    <Card
                      sx={{ boxShadow: 2, borderRadius: 2, bgcolor: "#ffffff" }}
                      onClick={handleNavigatorProductDetail}
                    >
                      <CardMedia
                        component="img"
                        height="300"
                        image={filteredProduct.image}
                        alt={filteredProduct.name}
                        sx={{ objectFit: "contain", padding: 1 }}
                      />
                      <CardContent>
                        <Typography variant="body1" fontWeight="bold">
                          {filteredProduct.name}
                        </Typography>
                        <Typography
                          variant="h6"
                          color="primary.dark"
                          fontWeight="bold"
                          sx={{ marginTop: 1 }}
                        >
                          {filteredProduct.price}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))
              ) : (
                <Typography
                  variant="h6"
                  sx={{
                    textAlign: "center",
                    width: "100%",
                    marginTop: 3,
                    color: "text.secondary",
                  }}
                >
                  Không tìm thấy sản phẩm nào.
                </Typography>
              )}
            </Grid>
            <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
              <Pagination
                count={totalPages} // Tổng số trang từ API
                page={currentPage} // Trang hiện tại
                onChange={handlePageChange} // Hàm xử lý thay đổi trang
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Product;
