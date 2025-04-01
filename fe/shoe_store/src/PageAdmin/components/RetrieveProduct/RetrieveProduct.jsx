import {
  Box,
  Button,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { ApiPostProduct } from "../../../apiServiceAdmin/ApiPostProduct";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { ApiPutProduct } from "../../../apiServiceAdmin/ApiPutProduct";
import { ApiProductDetailForListItems } from "../../../apiServiceAdmin/ApiProductDetailForListItems";

function RetrieveProduct() {
  const [DataDetailProduct, setDataDetailProduct] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [brandId, setBrandId] = useState("");
  const [categoryId, setCategoryId] = useState("");

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => handleGetInfoProduct(), [id]);

  const handleGetInfoProduct = () => {
    if (id != -1) {
      ApiProductDetailForListItems(id)
        .then((response) => {
          setDataDetailProduct(response.data);
          setName(response.data.name);
          setDescription(response.data.description);
          setImage(response.data.image);
          setPrice(response.data.price);
          setQuantity(response.data.quantity);
          setBrandId(response.data.brandId);
          setCategoryId(response.data.categoryId);
        })
        .catch((error) => console.log(error));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      description: e.target.description.value,
      image: e.target.image.value,
      price: parseFloat(e.target.price.value),
      quantity: parseInt(e.target.quantity.value, 10),
      brandId: parseInt(e.target.brandId.value, 10),
      categoryId: parseInt(e.target.categoryId.value, 10),
    };

    if (id == -1) {
      ApiPostProduct(formData)
        .then((response) => {
          console.log("Product added successfully:", response.data);
          navigate("/homeAdmin/listItems");
        })
        .catch((error) => {
          console.error("Error adding product:", error);
        });
    } else {
      ApiPutProduct(id, formData)
        .then(() => {
          console.log("Product updated successfully");
          navigate("/homeAdmin/listItems");
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          mt: 2,
        }}
      >
        <Box
          sx={{
            fontWeight: "bold",
            fontSize: "30px",
            mb: 3,
            color: "secondary.main",
          }}
        >
          RetrieveListProduct
        </Box>

        <Box
          component="form"
          onSubmit={handleSubmit}
          method="POST"
          noValidate
          sx={{
            width: "1100px",
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={6} sm={6} md={6}>
              <TextField
                required
                fullWidth
                type="text"
                id="name"
                label=" Name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                sx={{
                  mb: 3,
                }}
              />
            </Grid>
            <Grid item xs={6} sm={6} md={6}>
              <TextField
                required
                fullWidth
                type="text"
                id="description"
                label=" Description"
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                sx={{
                  mb: 3,
                }}
              />
            </Grid>

            <Grid item xs={6} sm={6} md={6}>
              <TextField
                required
                fullWidth
                type="text"
                id="image"
                label=" Image"
                name="image"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                sx={{
                  mb: 3,
                }}
              />
            </Grid>
            <Grid item xs={6} sm={6} md={6}>
              <TextField
                required
                fullWidth
                type="number"
                id="price"
                label=" Price"
                name="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                sx={{
                  mb: 3,
                }}
              />
            </Grid>

            <Grid item xs={6} sm={6} md={6}>
              <TextField
                required
                fullWidth
                type="number"
                id="quantity"
                label=" Quantity"
                name="quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                sx={{
                  mb: 3,
                }}
              />
            </Grid>

            <Grid item xs={6} sm={6} md={6}>
              <RadioGroup
                row
                name="brandId"
                value={brandId}
                onChange={(e) => setBrandId(e.target.value)}
              >
                <FormControlLabel value="1" control={<Radio />} label="Nike" />
                <FormControlLabel
                  value="2"
                  control={<Radio />}
                  label="Adidas"
                />
                <FormControlLabel value="3" control={<Radio />} label="Puma" />
                <FormControlLabel
                  value="4"
                  control={<Radio />}
                  label="Converse"
                />
                <FormControlLabel value="5" control={<Radio />} label="Vans" />
              </RadioGroup>
            </Grid>

            <Grid item xs={6} sm={6} md={6}>
              <RadioGroup
                row
                name="categoryId"
                value={categoryId}
                onChange={(e) => setCategoryId(e.target.value)}
              >
                <FormControlLabel
                  value="1"
                  control={<Radio />}
                  label="Running"
                />
                <FormControlLabel
                  value="2"
                  control={<Radio />}
                  label="Football"
                />
                <FormControlLabel
                  value="3"
                  control={<Radio />}
                  label="Casual"
                />
                <FormControlLabel
                  value="4"
                  control={<Radio />}
                  label="Outdoor"
                />
                <FormControlLabel
                  value="5"
                  control={<Radio />}
                  label="Winter"
                />
              </RadioGroup>
            </Grid>

            <Grid item xs={12} sx={{ ml: "5em", mr: "5em" }}>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Button
                  type="submit"
                  variant="contained"
                  width="50%"
                  size="large"
                  sx={{
                    display: "flex",
                    mt: 3,
                    mb: 10,
                    borderRadius: 28,
                    color: "secondary.main",
                    minWidth: "170px",
                    backgroundColor: "primary.main",
                  }}
                >
                  {id === -1 ? "Add Product" : "Update Product"}
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default RetrieveProduct;
