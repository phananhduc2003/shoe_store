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
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";
import { ApiListUsers } from "../../apiService/ApiListUsers";

function ListUsers() {
  const [ListRetrieveUsers, setListRetrieveUsers] = useState([]);

  useEffect(() => {
    handleRetrieveUsers();
  }, []);

  const handleRetrieveUsers = () => {
    ApiListUsers()
      .then((res) => {
        setListRetrieveUsers(res.data);
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
            justifyContent: "center",
            fontWeight: "bold",
            fontSize: "30px",
            mb: 2,
            color: "secondary.main",
          }}
        >
          List Users
        </Box>
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
                <TableCell>Name</TableCell>
                <TableCell align="right">UserName</TableCell>
                <TableCell align="right">PassWord</TableCell>

                <TableCell align="right">Email</TableCell>
                <TableCell align="right">Phone</TableCell>
                <TableCell align="right">Address</TableCell>
                <TableCell align="right">Role</TableCell>
                <TableCell align="right">Tools</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {ListRetrieveUsers.map((ListRetrieveUser) => (
                <TableRow
                  key={ListRetrieveUser.id}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                    "&:hover": { backgroundColor: "#FFFFFF" },
                  }}
                >
                  <TableCell component="th" scope="row">
                    {ListRetrieveUser.name}
                  </TableCell>
                  <TableCell align="right">
                    {ListRetrieveUser.username}
                  </TableCell>
                  <TableCell align="right">
                    {ListRetrieveUser.password}
                  </TableCell>

                  <TableCell align="right">{ListRetrieveUser.email}</TableCell>
                  <TableCell align="right">{ListRetrieveUser.phone}</TableCell>
                  <TableCell align="right">
                    {ListRetrieveUser.address}
                  </TableCell>
                  <TableCell align="right">{ListRetrieveUser.role}</TableCell>
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
export default ListUsers;
