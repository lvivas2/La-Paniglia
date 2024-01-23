import { Box, Typography } from "@mui/material";
import Background from "../img/Background.png";

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
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: {
            md: "auto auto auto",
            xs: "auto auto auto auto",
          },
          gridTemplateAreas: {
            md: `"titel titel" "contend imgOne" "imgTwe imgTwe" `,
            xs: `"titel titel" "contend contend" "imgOne imgOne" "imgTwe imgTwe"`,
          },
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
          Discover the best coffee
        </Typography>
        <p
          style={{
            gridArea: "contend",
            textAlign: "justify",
            alignSelf: "center",
            padding: "20px",
          }}
        >
          Bean Scene is a coffee shop that provides you with quality coffee that
          helps boost your productivity and helps build your mood. Having a cup
          of coffee is good, but having a cup of real coffee is greater. There
          is no doubt that you will enjoy this coffee more than others you have
          ever tasted.
        </p>
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
      </Box>
    </>
  );
}
export default Start;
