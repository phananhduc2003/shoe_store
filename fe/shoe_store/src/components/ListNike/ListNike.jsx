import { Box, Typography, Card, CardMedia, CardContent } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation"; // Import CSS for Navigation
import { Navigation } from "swiper/modules"; // Import Navigation from modules";
import { useRef } from "react";

function ListNike() {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  const shoes = [
    {
      name: "PEGASUS 41",
      image:
        "https://bizweb.dktcdn.net/thumb/1024x1024/100/378/584/products/z5703624664632-99fc91984cfac3ff7e30a007739ac5e0.jpg?v=1722915213383",
    },
    {
      name: "VOMERO",
      image:
        "https://bizweb.dktcdn.net/thumb/1024x1024/100/378/584/products/z5703624664632-99fc91984cfac3ff7e30a007739ac5e0.jpg?v=1722915213383",
    },
    {
      name: "V2K",
      image:
        "https://bizweb.dktcdn.net/thumb/1024x1024/100/378/584/products/z5703624664632-99fc91984cfac3ff7e30a007739ac5e0.jpg?v=1722915213383",
    },
    {
      name: "VAPORFLY",
      image:
        "https://bizweb.dktcdn.net/thumb/1024x1024/100/378/584/products/z5703624664632-99fc91984cfac3ff7e30a007739ac5e0.jpg?v=1722915213383",
    },
    {
      name: "DUNKS",
      image:
        "https://bizweb.dktcdn.net/thumb/1024x1024/100/378/584/products/z5703624664632-99fc91984cfac3ff7e30a007739ac5e0.jpg?v=1722915213383",
    },
  ];

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
        {shoes.map((shoe, index) => (
          <SwiperSlide key={index}>
            <Card
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
                image={shoe.image}
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
                  {shoe.name}
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

export default ListNike;
