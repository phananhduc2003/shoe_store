import { Box, Grid, Stack, Typography } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import CopyrightIcon from "@mui/icons-material/Copyright";

function Footer() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          padding: "50px 40px",
          marginBottom: "30px",
        }}
      >
        <Box sx={{ width: "100%", mb: 5 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={3}>
              <Stack spacing={2}>
                <Typography sx={{ fontWeight: 700 }}>Resources</Typography>
                <Typography sx={{ cursor: "pointer", color: "text.secondary" }}>
                  Find A Store
                </Typography>
                <Typography sx={{ cursor: "pointer", color: "text.secondary" }}>
                  Become A Member
                </Typography>
                <Typography sx={{ cursor: "pointer", color: "text.secondary" }}>
                  Send Us Feedback
                </Typography>
                <Typography sx={{ cursor: "pointer", color: "text.secondary" }}>
                  Find A Store
                </Typography>
                <Typography sx={{ cursor: "pointer", color: "text.secondary" }}>
                  Become A Member
                </Typography>
                <Typography sx={{ cursor: "pointer", color: "text.secondary" }}>
                  Send Us Feedback
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Stack spacing={2}>
                <Typography sx={{ fontWeight: 700 }}>Help</Typography>
                <Typography sx={{ cursor: "pointer", color: "text.secondary" }}>
                  Get Help
                </Typography>
                <Typography sx={{ cursor: "pointer", color: "text.secondary" }}>
                  Order Status
                </Typography>
                <Typography sx={{ cursor: "pointer", color: "text.secondary" }}>
                  Delivery
                </Typography>
                <Typography sx={{ cursor: "pointer", color: "text.secondary" }}>
                  Returns
                </Typography>
                <Typography sx={{ cursor: "pointer", color: "text.secondary" }}>
                  Payment Options
                </Typography>
                <Typography sx={{ cursor: "pointer", color: "text.secondary" }}>
                  Contact Us
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Stack spacing={2}>
                <Typography sx={{ fontWeight: 700 }}>About Us</Typography>
                <Typography sx={{ cursor: "pointer", color: "text.secondary" }}>
                  About Us
                </Typography>
                <Typography sx={{ cursor: "pointer", color: "text.secondary" }}>
                  News
                </Typography>
                <Typography sx={{ cursor: "pointer", color: "text.secondary" }}>
                  Careers
                </Typography>
                <Typography sx={{ cursor: "pointer", color: "text.secondary" }}>
                  Investors
                </Typography>
                <Typography sx={{ cursor: "pointer", color: "text.secondary" }}>
                  Sustainability
                </Typography>
                <Typography sx={{ cursor: "pointer", color: "text.secondary" }}>
                  Report a Concern
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
              >
                <LanguageIcon sx={{ mr: 1, color: "gray" }} />
                <Typography>Vietnam</Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <CopyrightIcon />
          <Typography>2025 Us, Inc. All rights reserved</Typography>
        </Box>
      </Box>
    </>
  );
}

export default Footer;
