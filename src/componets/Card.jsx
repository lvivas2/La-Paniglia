import { Box, Typography } from "@mui/material";
import IconBolleria from "../img/IconBolleria.svg";
import IconLaminados from "../img/IconLaminados.svg";
import IconCoffe from "../img/IconCoffe.svg";

const styleCarts = {
  contCart: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    background: "#FFF",
    boxShadow: "0px 4px 80px 0px rgba(0, 0, 0, 0.25)",
    flexDirection: "column",
    width: "150px",
    height: "150px",
  },

  contIcon: {
    display: "flex",
    width: "60px",
    height: "60px",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    background: "#D5C7BB",
    boxShadow: "0px 4px 80px 0px rgba(0, 0, 0, 0.25)",
    flexDirection: "column",
  },

  iconCart: {
    height: "60px",
    width: "60px",
    backgroundImage: `url(${IconCoffe})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
  },

  titel: {
    margin: "20px",
    color: "#432010",
    textAlign: "center",
    fontFamily: "Poppins",
    fontSize: "24px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "20px",
    textTransform: "capitalize",
  },

  contend: {
    margin: "10px",
    color: "#432010",
    textAlign: "center",
    fontFamily: "Poppins",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "20px",
  },
};

const cardsData = [
  {
    icon: IconCoffe,
    title: "Cafe",
    content:
      "El café de especialidad es una experiencia sensorial que comienza desde el cultivo hasta la taza.",
  },
  {
    icon: IconBolleria,
    title: "Bolleria",
    content:
      "La bollería es un placer indulgente que abarca una variedad de deliciosos productos horneados, desde bollos esponjosos hasta exquisiteces rellenas.",
  },
  {
    icon: IconLaminados,
    title: "Laminados",
    content:
      "Los laminados son un arte culinario que combina técnica y creatividad para lograr capas finas y crujientes en productos de panadería.",
  },
];

function Card() {
  return (
    <>
      {cardsData.map((card, index) => (
        <Box sx={styleCarts.contCart} key={index}>
          <Box sx={styleCarts.contIcon}>
            <Box
              sx={{
                ...styleCarts.iconCart,
                backgroundImage: `url(${card.icon})`,
              }}
            ></Box>
          </Box>
          <Typography sx={styleCarts.titel}>{card.title}</Typography>
        </Box>
      ))}
    </>
  );
}

export default Card;
