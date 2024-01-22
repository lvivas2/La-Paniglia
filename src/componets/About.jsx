import { Box, Typography } from "@mui/material";
import imgAbout from "../img/imgAbout.png";
import BackImg from "../img/BackImg.jpeg";

function About() {
  return (
    <>
      <Box
        id="nosotros"
        sx={{
          backgroundImage: `url(${BackImg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "100vh",
          display: "grid",
          gridTemplateColumns: "auto auto",
          gridTemplateRows: {
            md: "auto auto",
            xs: "auto auto auto",
          },
          gridTemplateAreas: {
            md: `"titel img" "contend img"`,
            xs: `"titel titel" "contend contend" "img img"`,
          },
        }}
      >
        <Typography
          sx={{
            color: "#fff",
            alignSelf: "stretch",
            font: "700 54px Playfair Display, -apple-system, Roboto, Helvetica, sans-serif",
            maxWidth: "100%",
            fontSize: { xs: "40px", md: "54px" },
            gridArea: "titel",
            alignSelf: "end",
            marginBottom: "20px",
          }}
        >
          Get a chance to have an
        </Typography>
        <Typography
          sx={{
            gridArea: "contend",
            textAlign: "justify",
            alignSelf: "top",
            padding: "0px 20px 0px 20px",
            gridArea: "contend",
          }}
        >
          Amazing morning We are giving you are one time opportunity to
          experience a better life with coffee.
        </Typography>

        <Box
          sx={{
            gridArea: "img",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "end",
          }}
        >
          <img
            style={{ width: "500px" }}
            loading="lazy"
            srcSet={imgAbout}
            alt=" "
          />
        </Box>
      </Box>
    </>
  );
}

export default About;
