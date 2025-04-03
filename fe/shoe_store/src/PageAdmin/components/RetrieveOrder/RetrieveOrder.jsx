import { Box, Button, Grid, TextField } from "@mui/material";

function RetrieveOrder() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <>
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
            Retrieve List Order
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
                  // value={name}
                  // onChange={(e) => setName(e.target.value)}
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
                  // value={description}
                  // onChange={(e) => setDescription(e.target.value)}
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
                  // value={image}
                  // onChange={(e) => setImage(e.target.value)}
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
                  // value={price}
                  // onChange={(e) => setPrice(e.target.value)}
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
                  // value={quantity}
                  // onChange={(e) => setQuantity(e.target.value)}
                  sx={{
                    mb: 3,
                  }}
                />
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
                    submit
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </>
    </>
  );
}

export default RetrieveOrder;
