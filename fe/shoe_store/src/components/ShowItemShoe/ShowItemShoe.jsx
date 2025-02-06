import { Box, Typography, Card, CardMedia, CardContent } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation"; // Import CSS for Navigation
import { Navigation } from "swiper/modules"; // Import Navigation from modules";
import { useRef } from "react";

import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

function ShowItemShoe({ dataApi }) {
  const navigate = useNavigate();

  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  const handleNavigatorProductDetail = (id) => {
    navigate(`/productDetail/${id}`);
  };

  return (
    <Box sx={{ maxWidth: "100%" }}>
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={3}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        style={{
          "--swiper-navigation-size": "20px",
          "--swiper-navigation-color": "black",
        }}
      >
        {dataApi.map((data, index) => (
          <SwiperSlide key={index}>
            <Card
              onClick={() => handleNavigatorProductDetail(data.id)}
              sx={{
                maxWidth: "100%",
                borderRadius: 2,
                boxShadow: 5,
                my: 2,
                cursor: "pointer",
              }}
            >
              <CardMedia
                component="div"
                image={data.image}
                sx={{
                  aspectRatio: "16/9", //key about css img
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <CardContent
                sx={{
                  background: "#f5f5f5",
                  textAlign: "center",
                  padding: "16px",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    fontSize: "1.5rem",
                    letterSpacing: "0.05em",
                    color: "#0F1214",
                  }}
                >
                  {data.name}
                </Typography>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
        {/* Custom prev button */}
        <div
          ref={navigationPrevRef}
          className="swiper-button-prev"
          style={{
            backgroundColor: "#6C7C93",
            borderRadius: "50%",
            width: "30px",
            height: "30px",
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        ></div>
        {/* Custom next button */}
        <div
          ref={navigationNextRef}
          className="swiper-button-next"
          style={{
            backgroundColor: "#6C7C93",
            borderRadius: "50%",
            width: "30px",
            height: "30px",
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        ></div>
      </Swiper>
    </Box>
  );
}

ShowItemShoe.propTypes = {
  dataApi: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default ShowItemShoe;
