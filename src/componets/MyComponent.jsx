import * as React from "react";
import Navbar from "./Navbar";
import { Box } from "@mui/material";
import LogoImg from "../img/LogoImg.png";
import Start from "./Start";
import About from "./About";
import BackgroundHero from "../img/BackgroundHero.png";
import Map from "./Map";

const backgroundStyle = {
  backgroundImage: `url(${BackgroundHero})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  padding: "40px",
  overflow: "hidden",
};

function MyComponent() {
  const Location = {
    lat: "-34.59228029501882",
    lng: "-58.42277343359694",
  };

  return (
    <>
      <Navbar />
      <Box sx={backgroundStyle}>
        <Box>
          <img
            style={{ width: "650px" }}
            loading="lazy"
            srcSet={LogoImg}
            className="img-3"
            alt=" "
          />
        </Box>
      </Box>
      <Start />

      <About />
      <Map lat={Location.lat} lng={Location.lng} markerText="Localidad" />
    </>
  );
}

export default MyComponent;
