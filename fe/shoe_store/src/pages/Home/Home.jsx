import { Box, Grid, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules"; // Sửa import
import "swiper/css";
import "swiper/css/pagination";

import hero1Image from "../../assets/images/1heroImage.jpg";
import hero2Image from "../../assets/images/2heroImage.jpg";
import hero3Image from "../../assets/images/3heroImage.jpg";
import hero4Image from "../../assets/images/4heroImage.jpg";
import hero5Image from "../../assets/images/5heroImage.jpg";

import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import ShowItemShoe from "../../components/ShowItemShoe";
import { ApiListNike } from "../../apiService/ApiListNike";
import { ApiListPurposeRunning } from "../../apiService/ApiListPurposeRunning";

const wrapper = {
  display: "flex",
  flexDirection: "column",
  width: "100%",
};
function Home() {
  const images = [hero1Image, hero2Image, hero3Image, hero4Image, hero5Image];

  const [listNike, setListNike] = useState([]);
  const [purposeRunning, setPurposeRunning] = useState([]);

  useEffect(() => showListNike(), []);

  const showListNike = () => {
    ApiListNike()
      .then((response) => {
        setListNike(response.data);
      })
      .catch((error) => console.log("fair call api", error));
  };

  useEffect(() => showPurposeRunning(), []);

  const showPurposeRunning = () => {
    ApiListPurposeRunning()
      .then((response) => {
        setPurposeRunning(response.data);
      })
      .catch((error) => console.log("fair call api", error));
  };

  return (
    <>
      <Box sx={{ wrapper }}>
        {/* hero Image */}
        <Box sx={{ m: 3 }}>
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            loop={true}
            style={{ width: "100%", height: "100vh" }}
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <Box
                  style={{
                    height: "100vh",
                    backgroundImage: `url(${image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
        {/* cards info */}
        <Box marginTop={18}>
          <Grid container rowSpacing={5}>
            <Grid
              item
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
              xs={12}
              sm={6}
              md={4}
            >
              <Card
                title="WE LOVE OUR CUSTOMERS"
                textDescription="You can check that the height of the boxes adjust when longer text
          like this one is used in one of them"
              />
            </Grid>
            <Grid
              item
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
              xs={12}
              sm={6}
              md={4}
            >
              <Card
                title="BEST PRICES"
                textDescription="You can check that the height of the boxes adjust when longer text like this one is used in one of them."
              />
            </Grid>
            <Grid
              item
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
              xs={12}
              sm={6}
              md={4}
            >
              <Card
                title="100% SATISFACTION GUARANTEED"
                textDescription="Free returns on everything for 3 months."
              />
            </Grid>
          </Grid>
        </Box>
        {/*PaNo title */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: 18,
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              textTransform: "uppercase",
            }}
          >
            Top Picks from Iconic Brands
          </Typography>
        </Box>
        <Box my={18} mx={3}>
          <ShowItemShoe dataApi={listNike} />
        </Box>
        {/*PaNo title */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: 18,
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              textTransform: "uppercase",
              my: 1,
            }}
          >
            Engineered for Every Activity
          </Typography>
        </Box>
        <Box my={18} mx={3}>
          <ShowItemShoe dataApi={purposeRunning} />
        </Box>
      </Box>
    </>
  );
}

export default Home;
