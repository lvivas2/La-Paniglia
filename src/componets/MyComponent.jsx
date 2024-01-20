import * as React from "react";
import Navbar from "./Navbar";
import { Box, Typography } from "@mui/material";
import HeroImg from "../img/HeroImg.jpeg";
import LogoImg from "../img/LogoImg.png";

const backgroundStyle = {
  backgroundImage: `url(${HeroImg})`,
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
  boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.6)",
  overflow: "hidden",
};

function MyComponent() {
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
      <div className="div-11">
        <Box
          id="inicio"
          sx={{
            width: "100%",
            maxWidth: "100%",
            marginTop: { xs: "40px", md: 0 },
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridTemplateRows: {
              md: "auto auto auto",
              xs: "auto auto auto auto",
            },
            gridTemplateAreas: {
              xs: `"titel titel" "contend contend" "imgOne imgOne" "imgTwe imgTwe"`,
              md: `"titel titel" "contend imgOne" "imgTwe imgTwe" `,
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
            Bean Scene is a coffee shop that provides you with quality coffee
            that helps boost your productivity and helps build your mood. Having
            a cup of coffee is good, but having a cup of real coffee is greater.
            There is no doubt that you will enjoy this coffee more than others
            you have ever tasted.
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
        <div id="nosotros" className="div-18">
          <div className="div-19">
            <div className="column-3">
              <div className="div-20">
                <div className="div-21">
                  Get a chance to have an
                  <br />
                  Amazing morning
                </div>
                <div className="div-22">
                  We are giving you are one time opportunity to
                  <br />
                  experience a better life with coffee.
                </div>
              </div>
              <div className="div-23" />
            </div>
            <div className="column-4">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets%2Fed8b2ea899284c0685a527cf3cea6f83%2F02a4ae419e5b449588e49fa47b320f7f?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2Fed8b2ea899284c0685a527cf3cea6f83%2F02a4ae419e5b449588e49fa47b320f7f?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2Fed8b2ea899284c0685a527cf3cea6f83%2F02a4ae419e5b449588e49fa47b320f7f?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2Fed8b2ea899284c0685a527cf3cea6f83%2F02a4ae419e5b449588e49fa47b320f7f?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2Fed8b2ea899284c0685a527cf3cea6f83%2F02a4ae419e5b449588e49fa47b320f7f?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2Fed8b2ea899284c0685a527cf3cea6f83%2F02a4ae419e5b449588e49fa47b320f7f?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2Fed8b2ea899284c0685a527cf3cea6f83%2F02a4ae419e5b449588e49fa47b320f7f?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2Fed8b2ea899284c0685a527cf3cea6f83%2F02a4ae419e5b449588e49fa47b320f7f"
                className="img-6"
                alt=" "
              />
            </div>
          </div>
        </div>
        <div className="div-24">Our coffee perfection feedback</div>
        <div className="div-25">
          Our customers has amazing things to say about us
        </div>
        <div className="div-26">
          <div className="div-27">
            <div className="column-5">
              <div className="div-28">
                {/* <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/38bedfe218c271d280bec63044d86c18153c7b98122f8edfc5a6ad027581bd74?apiKey=ed8b2ea899284c0685a527cf3cea6f83&"
                  className="img-7"
                  alt=" "
                /> */}
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets%2Fed8b2ea899284c0685a527cf3cea6f83%2Fa20dd3582556458685b180d830dcf996?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2Fed8b2ea899284c0685a527cf3cea6f83%2Fa20dd3582556458685b180d830dcf996?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2Fed8b2ea899284c0685a527cf3cea6f83%2Fa20dd3582556458685b180d830dcf996?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2Fed8b2ea899284c0685a527cf3cea6f83%2Fa20dd3582556458685b180d830dcf996?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2Fed8b2ea899284c0685a527cf3cea6f83%2Fa20dd3582556458685b180d830dcf996?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2Fed8b2ea899284c0685a527cf3cea6f83%2Fa20dd3582556458685b180d830dcf996?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2Fed8b2ea899284c0685a527cf3cea6f83%2Fa20dd3582556458685b180d830dcf996?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2Fed8b2ea899284c0685a527cf3cea6f83%2Fa20dd3582556458685b180d830dcf996"
                  className="img-8"
                  alt=" "
                />
              </div>
            </div>
            <div className="column-6">
              <div className="div-29">
                <div className="div-30">
                  <div className="div-31">
                    <div className="div-32">“</div>
                    <div className="div-33">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset.....
                    </div>{" "}
                    <div className="div-34">Jonny Thomas</div>{" "}
                    <div className="div-35">Project Manager</div>
                  </div>{" "}
                  {/* <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/b5423c5afa826358373d1fe7393e1776cb19df8a570af6badee69820530d7d54?apiKey=ed8b2ea899284c0685a527cf3cea6f83&"
                    className="img-9"
                    alt=" "
                  /> */}
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        <div id="contactos" className="div-36">
          <div className="div-37">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6f262545d7aeb47e3de79eb8339387e995dc746c69077b609cebd61dc4266f9e?apiKey=ed8b2ea899284c0685a527cf3cea6f83&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f262545d7aeb47e3de79eb8339387e995dc746c69077b609cebd61dc4266f9e?apiKey=ed8b2ea899284c0685a527cf3cea6f83&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f262545d7aeb47e3de79eb8339387e995dc746c69077b609cebd61dc4266f9e?apiKey=ed8b2ea899284c0685a527cf3cea6f83&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f262545d7aeb47e3de79eb8339387e995dc746c69077b609cebd61dc4266f9e?apiKey=ed8b2ea899284c0685a527cf3cea6f83&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f262545d7aeb47e3de79eb8339387e995dc746c69077b609cebd61dc4266f9e?apiKey=ed8b2ea899284c0685a527cf3cea6f83&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f262545d7aeb47e3de79eb8339387e995dc746c69077b609cebd61dc4266f9e?apiKey=ed8b2ea899284c0685a527cf3cea6f83&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f262545d7aeb47e3de79eb8339387e995dc746c69077b609cebd61dc4266f9e?apiKey=ed8b2ea899284c0685a527cf3cea6f83&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f262545d7aeb47e3de79eb8339387e995dc746c69077b609cebd61dc4266f9e?apiKey=ed8b2ea899284c0685a527cf3cea6f83&"
              className="img"
              alt=" "
            />{" "}
            <div className="div-38">
              <div className="div-39">
                <div className="div-40">La Paniglia</div>{" "}
                <div className="div-41">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </div>
              </div>
              <div className="div-48">
                <div className="div-49">Contactanos</div>
                <div className="div-50">Gascon 1530 - Palermo</div>
                <div className="div-51">+1 202-918-2132</div>
                <div className="div-52">info@lapaniglia.com.ar</div>
                <div className="div-53">www.lapaniglia.com.ar</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/fd9408354f49b5d059a773b4d207f36dde262a729aeda38340d829a7b3465bf0?apiKey=ed8b2ea899284c0685a527cf3cea6f83&"
                  className="img-10"
                  alt=" "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .div {
          display: flex;
          flex-direction: column;
          position: relative;
          margin-top: 20px;
          height: 200px;
        }
        .img {
          position: absolute;
          inset: 0;
          height: 100%;
          width: 100%;
          object-fit: cover;
          object-position: center;
        }
        .div-4 {
          align-self: stretch;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          gap: 20px;
          margin: 0px 100px 1px 10px;
          max-width: 100%;
        }
        @media (max-width: 991px) {
          .div-4 {
            
            margin-right: 10px;
            flex-wrap: wrap;
          }
        }
        .img-2 {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 100%;
          margin-left: 20px;
          min-height: 20px;
          min-width: 20px;
          overflow: hidden;
          max-width: 105px;
        }
        .div-5 {
          align-self: center;
          display: flex;
          align-items: flex-start;
          justify-content: flex-start;
          gap: 10px;
          overflow: hidden;
          margin: 0%;
        }
        
        @media (max-width: 991px) {
          .div-5 {
            flex-wrap: wrap; /* Allow items to wrap to the next line on smaller screens */
            justify-content: flex-start; /* Align items to the start on smaller screens */
          }
        }
        
        .div-6 {
          color: #fff;
          align-self: center;
          font: 500 14px Playfair Display, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-7 {
          color: #fff;
          align-self: start;
          font: 500 14px Playfair Display, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-8 {
          color: #fff;
          align-self: stretch;
          font: 500 14px Playfair Display, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        }
        .img-3 {
          aspect-ratio: 0.5;
          object-fit: cover;
          object-position: left;
          width: 100%;
          margin-top: 0px;
          min-height: 20px;
          min-width: 0px;
          overflow: hidden;
          max-width: 999px;
        }
        .div-10 {
          display: flex;
          flex-direction: column;
          position: relative;
          margin-top: 20px;
          height: auto;
          padding-bottom: 30px;
        }
        .div-11 {
          background-color: rgba(209, 188, 172, 1);
          display: flex;
          flex-direction: column;
        }
        .div-13 {
          gap: 20px;
          display: flex;
        }
        @media (max-width: 991px) {
          .div-13 {
            flex-direction: column;
            align-items: stretch;
            gap: 0px;
          }
        }
        .column {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 59%;
          margin-left: 0px;
        }
        @media (max-width: 991px) {
          .column {
            width: 100%;
          }
        }
        .div-14 {
          display: flex;
          margin-top: 84px;
          flex-grow: 1;
          flex-direction: column;
        }
        @media (max-width: 991px) {
          .div-14 {
            max-width: 100%;
            margin-top: 40px;
          }
        }
        .div-15 {
          display: flex;
          flex-direction: column;
          padding: 0 1px 0 80px;
        }
        @media (max-width: 991px) {
          .div-15 {
            max-width: 100%;
            padding: 0px;
          }
        }
        
        .div-17 {
          color: #707070;
          margin: 51px 0 0 13px;
          font: 400 20px/34px Playfair Display, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-17 {
            max-width: 100%;
            margin: 10px;
          }
        }
        .img-4 {
          aspect-ratio: 0.84;
          object-fit: contain;
          object-position: center;
          width: 100%;
          min-height: 20px;
          min-width: 20px;
          overflow: hidden;
          max-width: 74px;
          margin: 20px 0 0 auto;
        }
        .column-2 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 41%;
          margin-left: 20px;
        }
        @media (max-width: 991px) {
          .column-2 {
            width: auto;
          }
        }
        .img-5 {
          aspect-ratio: 1;
          object-fit: contain;
          object-position: center;
          width: 100%;
          overflow: hidden;
          max-width: 571px;
        }
        @media (max-width: 991px) {
          .img-5 {
            max-width: 100%;
            margin-top: 40px;
          }
        }
        .div-18 {
          background-color: var(--coffee, #603809);
          align-self: stretch;
          margin-top: 81px;
          width: auto;
          background-image: url(https://cdn.builder.io/api/v1/image/assets%2Fed8b2ea899284c0685a527cf3cea6f83%2F6e151654b3214afd931a554e3e623280);
          background-repeat: no-repeat;
          background-position: center;
          background-size: cover;
          overflow: hidden;
        }
        @media (max-width: 991px) {
          .div-18 {
            max-width: 100%;
            margin-top: 40px;
          }
        }
        .div-19 {
          gap: 20px;
          display: flex;
          width: 100%;
        }
        
        @media (max-width: 991px) {
          .div-19 {
            flex-direction: column;
            align-items: stretch;
            gap: 0px;
            width: 100%; 
          }
          .div-19 img{
            width: 100%;
          }
        }
        
        .column-3 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 55%;
          margin-left: 0px;
        }
        
        @media (max-width: 991px) {
          .column-3 {
            width: 100%;
            margin-left: 0; 
          }
        }
        
        .div-20 {
          display: flex;
          flex-direction: column;
          align-items: start;
          margin: auto 0;
        }
        @media (max-width: 991px) {
          .div-20 {
            max-width: 100%;
            margin-top: 40px;
          }
        }
        .div-21 {
          color: #fff;
          align-self: stretch;
          font: 700 54px Playfair Display, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-21 {
            max-width: 100%;
            font-size: 40px;
          }
        }
        .div-22 {
          color: #fff;
          align-self: stretch;
          margin-top: 36px;
          font: 400 20px/34px Playfair Display, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-22 {
            max-width: 100%;
          }
        }
        .div-23 {
          display: flex;
          flex-direction: column;
          position: relative;
          margin-top: 20px;
          height: auto;
          padding-bottom: 30px;
        }
        .column-4 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 45%;
          margin-left: 20px;
        }
        @media (max-width: 991px) {
          .column-4 {
            width: 100%;
          }
        }
        .img-6 {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 100%;
          margin-top: 20px;
          min-height: 20px;
          min-width: 20px;
          overflow: hidden;
        }
        .div-24 {
          color: rgba(66, 96, 92, 1);
          align-self: center;
          margin-top: 98px;
          font: 700 54px Playfair Display, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-24 {
            max-width: 100%;
            font-size: 40px;
            margin-top: 40px;
          }
        }
        .div-25 {
          color: #707070;
          text-align: center;
          align-self: center;
          margin-top: 29px;
          font: 400 20px/170% Playfair Display, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-25 {
            max-width: 100%;
          }
        }
        .div-26 {
          align-self: stretch;
          margin-top: 50px;
          width: 100%;
        }
        @media (max-width: 991px) {
          .div-26 {
            max-width: 100%;
            margin-top: 40px;
          }
        }
        .div-27 {
          gap: 20px;
          display: flex;
        }
        @media (max-width: 991px) {
          .div-27 {
            flex-direction: column;
            align-items: stretch;
            gap: 0px;
          }
        }
        .column-5 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 28%;
          margin-left: 0px;
        }
        @media (max-width: 991px) {
          .column-5 {
            width: 100%;
          }
        }
        .div-28 {
          display: flex;
          margin-top: 221px;
          flex-grow: 1;
          flex-direction: column;
          align-items: center;
        }
        @media (max-width: 991px) {
          .div-28 {
            max-width: 100%;
            margin-top: 0px;
          }
        }
        .img-7 {
          aspect-ratio: 1;
          object-fit: contain;
          object-position: center;
          width: 82px;
          overflow: hidden;
          max-width: 100%;
        }
        .img-8 {
          aspect-ratio: 1;
          object-fit: contain;
          object-position: center;
          width: 100%;
          overflow: hidden;
          align-self: stretch;
          margin: 51px 0 0 -4px;
        }
        @media (max-width: 991px) {
          .img-8 {
            max-width: 100%;
            margin-top: 40px;
          }
        }
        .column-6 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 72%;
          margin-left: 20px;
        }
        @media (max-width: 991px) {
          .column-6 {
            width: auto;
            margin: 10px;
          }
        }
        .div-29 {
          display: flex;
          flex-grow: 1;
          flex-direction: column;
        }
        @media (max-width: 991px) {
          .div-29 {
            max-width: 100%;
          }
        }
        .div-30 {
          z-index: 1;
          display: flex;
          padding-right: 9px;
          justify-content: space-between;
          gap: 0px;
        }
        @media (max-width: 991px) {
          .div-30 {
            max-width: 100%;
            flex-wrap: wrap;
            padding: 0px;
          }
        }
        .div-31 {
          border: 1px solid rgba(249, 192, 106, 0.42);
          background-color: rgba(160, 183, 167, 1);
          display: flex;
          flex-grow: 1;
          flex-basis: 0%;
          flex-direction: column;
          padding: 46px 80px 46px 32px;
        }
        @media (max-width: 991px) {
          .div-31 {
            max-width: 100%;
            padding: 0 20px;
          }
        }
        .div-32 {
          color: rgba(66, 96, 92, 1);
          align-self: stretch;
          margin-right: 31px;
          font: 700 220px/51% Playfair Display, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-32 {
            max-width: 100%;
            margin-right: 10px;
            font-size: 40px;
          }
        }
        .div-33 {
          color: rgba(255, 255, 255, 1);
          text-align: center;
          align-self: center;
          margin-top: 38px;
          max-width: 866px;
          font: 600 18px/36px Playfair Display, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-33 {
            max-width: 100%;
          }
        }
        .div-34 {
          color: rgba(66, 96, 92, 1);
          align-self: center;
          margin-top: 51px;
          font: 700 32px Playfair Display, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-34 {
            margin-top: 40px;
          }
        }
        .div-35 {
          color: rgba(66, 96, 92, 1);
          text-align: center;
          margin: 16px 0 35px;
          font: 400 20px/170% Playfair Display, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .img-9 {
          aspect-ratio: 1;
          object-fit: contain;
          object-position: center;
          width: 82px;
          overflow: hidden;
          align-self: start;
          margin-top: 221px;
          max-width: 100%;
        }
        @media (max-width: 991px) {
          .img-9 {
            margin-top: 40px;
          }
        }
        .div-36 {
          background-color: #442808;
          align-self: stretch;
          display: flex;
          width: 100%;
          flex-direction: column;
          justify-content: center;
        }
        @media (max-width: 991px) {
          .div-36 {
            max-width: 100%;
          }
        }
        .div-37 {
          disply: flex;
          flex-direction: column;
          background-blend-mode: overlay;
          overflow: hidden;
          position: relative;
          display: flex;
          min-height: 492px;
          width: 100%;
          justify-content: center;
          align-items: center;
          background-color: rgba(160, 183, 167, 1);
          padding: 0px 0px 50px;
        }
        @media (max-width: 991px) {
          .div-37 {
            max-width: 100%;
          }
        }
        .div-38 {
          position: relative;
          display: flex;
          width: 100%;
          max-width: 1147px;
          align-items: start;
          justify-content: space-between;
          gap: 20px;
          margin: 0px 0 22px;
        }
        @media (max-width: 991px) {
          .div-38 {
            max-width: 100%;
            flex-wrap: wrap;
            margin-top: 40px;
            flex-direction:column;
          }
        }
        .div-39 {
          display: flex;
          flex-grow: 1;
          flex-basis: 0%;
          flex-direction: column;
          align-items: start;
        }
        .div-40 {
          color: #fff;
          align-self: stretch;
          font: 400 54px Clicker Script, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-40 {
            font-size: 40px;
          }
        }
        .div-41 {
          color: #fff;
          align-self: stretch;
          margin-top: 41px;
          font: 400 14px/22px Playfair Display, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-41 {
            margin-top: 40px;
          }
        }
        .img-10 {
          aspect-ratio: 6.5;
          object-fit: contain;
          object-position: center;
          width: 156px;
          overflow: hidden;
          margin-top: 35px;
          max-width: 100%;
        }
        .div-42 {
          display: flex;
          flex-basis: 0%;
          flex-direction: column;
        }
        .div-43 {
          color: #fff;
          font: 700 26px Playfair Display, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-44 {
          color: #fff;
          margin-top: 77px;
          font: 400 18px/42px Playfair Display, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-44 {
            margin-top: 40px;
          }
        }
        .div-45 {
          display: flex;
          flex-basis: 0%;
          flex-direction: column;
        }
        .div-46 {
          color: #fff;
          white-space: nowrap;
          font: 700 26px Playfair Display, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-46 {
            white-space: initial;
          }
        }
        .div-47 {
          color: #fff;
          margin-top: 71px;
          font: 400 18px/42px Playfair Display, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-47 {
            margin-top: 40px;
          }
        }
        .div-48 {
          display: flex;
          flex-grow: 1;
          flex-basis: 0%;
          flex-direction: column;
          width: 100%;
          align-items: center;
        }
        .div-49 {
          color: #fff;
          font: 700 26px Playfair Display, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-50 {
          color: #fff;
          margin-top: 20px;
          font: 400 18px Playfair Display, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-50 {
            margin-top: 20px;
          }
        }
        .div-51 {
          color: #fff;
          margin-top: 20px;
          font: 400 18px Playfair Display, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-52 {
          color: #fff;
          margin-top: 20px;
          font: 400 18px Playfair Display, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-53 {
          color: #fff;
          margin-top: 20px;
          font: 400 18px Playfair Display, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
      `}</style>
    </>
  );
}

export default MyComponent;
