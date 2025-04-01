import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";
import { ApiListItem } from "../../apiServiceAdmin/ApiListItem";

import { useNavigate } from "react-router-dom";
import { ApiDeleteProduct } from "../../apiServiceAdmin/ApiDeleteProduct";

function ListItems() {
  const [ListRetrieveItems, setListRetrieveItems] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    handleRetrieveList();
  }, []);

  const handleRetrieveList = () => {
    ApiListItem()
      .then((res) => {
        setListRetrieveItems(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(ListRetrieveItems);
  };

  const handleAddProduct = () => {
    navigate("/homeAdmin/retrieveProduct/-1");
  };

  const handleEditProduct = (ProductId) => {
    navigate(`/homeAdmin/retrieveProduct/${ProductId}`);
  };

  const handleDeleteProduct = (ProductId) => {
    // Call the API to delete the product with the given ProductId
    // After deletion, refresh the list of products
    ApiDeleteProduct(ProductId)
      .then(() => {
        handleRetrieveList();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Button
            sx={{ mx: 1, fontSize: 10 }}
            onClick={handleAddProduct}
            variant="contained"
            color="success"
            size="small"
            startIcon={<AddIcon />}
          >
            Add
          </Button>

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
              // onChange={}
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

        <TableContainer>
          <Table sx={{ width: "100%" }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Product ID</TableCell>
                <TableCell>Product Name</TableCell>
                <TableCell align="right">Description</TableCell>
                <TableCell align="right">Image</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right">Quantity</TableCell>
                <TableCell align="right">Brand Name</TableCell>
                <TableCell align="right">Category ID</TableCell>
                <TableCell align="right">Tools</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {ListRetrieveItems.map((ListRetrieveItem) => (
                <TableRow
                  key={ListRetrieveItem.id}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                    "&:hover": { backgroundColor: "#FFFFFF" },
                  }}
                >
                  <TableCell component="th" scope="row">
                    {ListRetrieveItem.id}
                  </TableCell>
                  <TableCell>{ListRetrieveItem.name}</TableCell>
                  <TableCell align="right">
                    {ListRetrieveItem.description}
                  </TableCell>
                  <TableCell align="right">
                    <img
                      src={ListRetrieveItem.image}
                      alt={ListRetrieveItem.name}
                      width="50"
                    />
                  </TableCell>
                  <TableCell align="right">{ListRetrieveItem.price}</TableCell>
                  <TableCell align="right">
                    {ListRetrieveItem.quantity}
                  </TableCell>
                  <TableCell align="right">
                    {ListRetrieveItem.productCategoryBrand.brandName}
                  </TableCell>
                  <TableCell align="right">
                    {ListRetrieveItem.productCategoryBrand.id}
                  </TableCell>
                  <TableCell align="right">
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                      <Button
                        sx={{ mx: 1, fontSize: 10 }}
                        onClick={() => handleDeleteProduct(ListRetrieveItem.id)}
                        variant="contained"
                        color="error"
                        size="small"
                        startIcon={<DeleteForeverIcon />}
                      >
                        Del
                      </Button>
                      <Button
                        sx={{ mx: 1, fontSize: 10 }}
                        onClick={() => handleEditProduct(ListRetrieveItem.id)}
                        variant="contained"
                        color="warning"
                        size="small"
                        startIcon={<EditIcon />}
                      >
                        Edit
                      </Button>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
}

export default ListItems;
