import React from "react";
import { Box, Typography, Link } from "@mui/material";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";

import BackgroundMap from "../img/BackgroundMap.png";

const Map = ({ lat, lng, markerText }) => {
  const mapContainerStyle = {
    width: "65%",
    height: "100%",
    borderRadius: "30px",
  };

  const center = {
    lat: parseFloat(lat),
    lng: parseFloat(lng),
  };

  const styleTextsTitel = {
    justifyContent: "left",
    display: "flex",
    alignContent: "flex-start",
    fontWeight: 300,
    fontSize: "1.5rem",
    alignItems: "center",
    color: "rgba(66, 96, 92, 1)",
  };

  const styleInfo = {
    justifyContent: "left",
    display: "flex",
    margin: "0px 0px 30px 25px",
  };
  return (
    <>
      <Box
        sx={{
          height: "90vh",
          display: "flex",
          padding: "50px",
          backgroundImage: `url(${BackgroundMap})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          flexDirection: "column",
        }}
      >
        <Box sx={{ display: "flex", height: "100%" }}>
          <Box
            sx={{
              height: "100%",
              width: "35%",
              marginRight: "25px",
              justifyContent: "space-evenly",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "40px", md: "44px" },
                  color: "rgba(66, 96, 92, 1)",
                  justifyContent: "left",
                  display: "flex",
                  alignContent: "flex-start",
                  font: "700 54px Playfair Display, -apple-system, Roboto, Helvetica, sans-serif",
                }}
              >
                Visitanos
              </Typography>
              <Box
                sx={{
                  marginLeft: "20px",
                  width: "150px",
                  height: "2px",
                  background: "rgba(66, 96, 92, 1)",
                }}
              ></Box>
            </Box>
            <Typography sx={styleTextsTitel}>
              <LocationOnIcon
                sx={{
                  marginRight: "10px",
                  display: "flex",
                }}
              />
              Location
            </Typography>
            <Typography sx={styleInfo}>
              <Link
                underline="none"
                color="inherit"
                target="_blank"
                sx={{
                  "&:hover": {
                    color: "rgba(66, 96, 92, 1)",
                  },
                }}
                rel="noopener noreferrer"
                href="https://www.google.com/maps/place/Gasc%C3%B3n+1530,+C1181ADD+CABA/@-34.5924349,-58.4253376,17z/data=!3m1!4b1!4m6!3m5!1s0x95bcca7ed212f779:0x7e6ffe5495790fd5!8m2!3d-34.5924393!4d-58.4227627!16s%2Fg%2F11dfh4kz9s?entry=ttu"
              >
                Gascón 1530, PALERMO CABA
              </Link>
            </Typography>
            <Typography sx={styleTextsTitel}>
              <AccessTimeIcon sx={{ marginRight: "10px" }} />
              Open hours
            </Typography>
            <Typography sx={styleInfo}>
              Lunes - Sabados: 9 am - 10 pm
            </Typography>
            <Typography sx={styleTextsTitel}>
              <LocalPhoneIcon sx={{ marginRight: "10px" }} />
              Contacto
            </Typography>
            <Typography sx={styleInfo}>+54 123456789 +54 123456789</Typography>
            <Typography sx={styleTextsTitel}>
              <EmailIcon sx={{ marginRight: "10px" }} />
              Mails
            </Typography>
            <Typography
              sx={{
                justifyContent: "left",
                display: "flex",
                marginLeft: "25px",
              }}
            >
              <Link
                underline="none"
                color="inherit"
                target="_blank"
                sx={{
                  "&:hover": {
                    color: "rgba(66, 96, 92, 1)",
                  },
                }}
                rel="noopener noreferrer"
                href="mailto:info@lapaniglia.com.ar"
              >
                info@lapaniglia.com.ar
              </Link>
            </Typography>
            <Typography
              sx={{
                justifyContent: "left",
                display: "flex",
                marginLeft: "25px",
              }}
            >
              <Link
                underline="none"
                color="inherit"
                target="_blank"
                sx={{
                  "&:hover": {
                    color: "rgba(66, 96, 92, 1)",
                  },
                }}
                rel="noopener noreferrer"
                href="mailto:proveedores@lapaniglia.com.ar"
              >
                proveedores@lapaniglia.com.ar
              </Link>
            </Typography>
          </Box>

          <LoadScript googleMapsApiKey="AIzaSyBWfdt5U_EC-TMBlJmZYJ9-WbHh4fJYdJ8">
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              center={center}
              zoom={20}
            >
              <Marker position={center} />
            </GoogleMap>
          </LoadScript>
        </Box>
      </Box>
    </>
  );
};

export default Map;
