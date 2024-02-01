import { Box, Typography } from "@mui/material";
import Background from "../img/Background.png";
import IconStart from "../img/IconStart.svg";
import Cart from "./Card";
// import Carousel from "./Carousel";

const constainerCarts = {
  display: "flex",
  justifyContent: "space-between",
  width: "90vw",
  gridArea: "card",
};

function Start() {
  return (
    <>
      <Box
        id="inicio"
        sx={{
          paddingTop: "80px",
          width: "100%",
          backgroundColor: "#F4EFF1",
          backgroundImage: `url(${Background})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          maxWidth: "100%",
          marginTop: { xs: "40px", md: 0 },
          display: "grid",
          gridTemplateRows: {
            md: "auto auto auto auto",
            xs: "auto auto auto auto",
          },
          gridTemplateColumns: {
            md: "1fr",
            xs: "1fr 1fr",
          },
          gridTemplateAreas: {
            xs: `"titel titel" "contend contend" "card card" "imgOne imgOne" "imgTwe imgTwe"`,
          },
          justifyItems: "center",
        }}
      >
        <Typography
          sx={{
            gridArea: "titel",
            margin: { xs: 0, md: "10px" },
            maxWidth: "100%",
            fontSize: { xs: "40px", md: "54px" },
            color: "rgba(66, 96, 92, 1)",
            font: "700 54px Playfair Display, -apple-system, Roboto, Helvetica, sans-serif",
          }}
        >
          Nuestros deliciosos servicios
          <Box
            sx={{
              width: "100%",
              height: "20px",
              backgroundImage: `url(${IconStart})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          ></Box>
        </Typography>
        <Typography
          sx={{
            gridArea: "contend",
            alignSelf: "center",
            padding: "20px",
            maxWidth: "800px",
            marginBottom: "20px",
          }}
        >
          Ofrecemos una colección cuidadosamente seleccionada que muestra las
          características distintivas de los granos procedentes de regiones
          específicas.
        </Typography>

        <Box sx={constainerCarts}>
          <Cart />
        </Box>

        <Box sx={{ gridArea: "imgOne" }}>
          <img
            style={{
              width: "500px",
              margin: 0,
            }}
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets%2Fed8b2ea899284c0685a527cf3cea6f83%2F63201190d80d4deb8ab0b74ab97a6984?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2Fed8b2ea899284c0685a527cf3cea6f83%2F63201190d80d4deb8ab0b74ab97a6984?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2Fed8b2ea899284c0685a527cf3cea6f83%2F63201190d80d4deb8ab0b74ab97a6984?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2Fed8b2ea899284c0685a527cf3cea6f83%2F63201190d80d4deb8ab0b74ab97a6984?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2Fed8b2ea899284c0685a527cf3cea6f83%2F63201190d80d4deb8ab0b74ab97a6984?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2Fed8b2ea899284c0685a527cf3cea6f83%2F63201190d80d4deb8ab0b74ab97a6984?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2Fed8b2ea899284c0685a527cf3cea6f83%2F63201190d80d4deb8ab0b74ab97a6984?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2Fed8b2ea899284c0685a527cf3cea6f83%2F63201190d80d4deb8ab0b74ab97a6984"
            className="img-5"
            alt=" "
          />
        </Box>
        <Box sx={{ gridArea: "imgTwe", width: "100%" }}>
          <img
            style={{ width: "100px" }}
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets%2Fed8b2ea899284c0685a527cf3cea6f83%2F4bd0506d62384871beb4e79c15f6fe82?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2Fed8b2ea899284c0685a527cf3cea6f83%2F4bd0506d62384871beb4e79c15f6fe82?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2Fed8b2ea899284c0685a527cf3cea6f83%2F4bd0506d62384871beb4e79c15f6fe82?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2Fed8b2ea899284c0685a527cf3cea6f83%2F4bd0506d62384871beb4e79c15f6fe82?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2Fed8b2ea899284c0685a527cf3cea6f83%2F4bd0506d62384871beb4e79c15f6fe82?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2Fed8b2ea899284c0685a527cf3cea6f83%2F4bd0506d62384871beb4e79c15f6fe82?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2Fed8b2ea899284c0685a527cf3cea6f83%2F4bd0506d62384871beb4e79c15f6fe82?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2Fed8b2ea899284c0685a527cf3cea6f83%2F4bd0506d62384871beb4e79c15f6fe82"
            alt=" "
          />
        </Box>
        {/* <Carousel /> */}
      </Box>
    </>
  );
}
export default Start;
