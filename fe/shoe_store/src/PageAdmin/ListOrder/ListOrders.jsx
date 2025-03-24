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
import SearchIcon from "@mui/icons-material/Search";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import { useEffect, useState } from "react";
import { ApiListOrder } from "../../apiServiceAdmin/ApiListOrder";

function ListOrders() {
  const [ListRetrieveOrders, setListRetrieveOrders] = useState([]);

  useEffect(() => {
    handleRetrieveOrder();
  }, []);

  const handleRetrieveOrder = () => {
    ApiListOrder()
      .then((res) => {
        setListRetrieveOrders(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(ListRetrieveOrders);
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
            justifyContent: "flex-end",
            alignItems: "center",
            width: "100%",
          }}
        >
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
                <TableCell>Order Id</TableCell>
                <TableCell align="right">Date Order</TableCell>
                <TableCell align="right">Total Price</TableCell>

                <TableCell align="right">Status Order</TableCell>
                <TableCell align="right">Address Shipping</TableCell>
                <TableCell align="right">Payment Method</TableCell>
                <TableCell align="right">Payment Status</TableCell>
                <TableCell align="right">Shipping Status</TableCell>
                <TableCell align="right">User Id</TableCell>
                <TableCell align="right">Tools</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {ListRetrieveOrders.map((ListRetrieveOrder) => (
                <TableRow
                  key={ListRetrieveOrder.id}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                    "&:hover": { backgroundColor: "#FFFFFF" },
                  }}
                >
                  <TableCell component="th" scope="row">
                    {ListRetrieveOrder.id}
                  </TableCell>
                  <TableCell align="right">
                    {ListRetrieveOrder.dateOrder}
                  </TableCell>
                  <TableCell align="right">
                    {ListRetrieveOrder.totalPrice}
                  </TableCell>
                  <TableCell align="right">
                    {ListRetrieveOrder.statusOrder}
                  </TableCell>
                  <TableCell align="right">
                    {ListRetrieveOrder.addressShipping}
                  </TableCell>
                  <TableCell align="right">
                    {ListRetrieveOrder.paymentMethod}
                  </TableCell>
                  <TableCell align="right">
                    {ListRetrieveOrder.paymentStatus}
                  </TableCell>
                  <TableCell align="right">
                    {ListRetrieveOrder.shippingStatus}
                  </TableCell>
                  <TableCell align="right">
                    {ListRetrieveOrder.user.id}
                  </TableCell>
                  <TableCell align="right">
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                      <Button
                        sx={{ mx: 1, fontSize: 10 }}
                        variant="contained"
                        color="error"
                        size="small"
                        startIcon={<DeleteForeverIcon />}
                      >
                        Del
                      </Button>
                      <Button
                        sx={{ mx: 1, fontSize: 10 }}
                        variant="contained"
                        color="warning"
                        size="small"
                        startIcon={<EditIcon />}
                      >
                        Exit
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

export default ListOrders;
