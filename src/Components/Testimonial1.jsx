import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { reviews } from "./../Cards/Review1";
import Quote from "../assets/blockquote.svg";
import "./../index.css";
import { Grid, Typography } from "@mui/material";

const Testimonial1 = () => {
  return (
    <Grid
      id={"testimonials"}
      container
      sx={{ bgcolor: "#e6eaee", padding: 10 }}
      spacing={1}
      mt={10}
      py={8}
    >
      <Grid
        item
        xs={12}
        md={12}
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Typography
          fontFamily="Syne, sans-serif"
          fontSize={"16px"}
          color={"#77777d"}
        >
          TESTINOMIALS
        </Typography>
        <Typography
          fontFamily="Syne, sans-serif"
          fontSize={"50px"}
          fontWeight={500}
        >
          What clients say!
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <section className="testimonial-container">
          <div className="slider-container">
            <blockquote>
              <img className="top-quote quote" src={Quote} alt="quote" />
              <img className="bottom-quote quote" src={Quote} alt="quote" />
            </blockquote>

            <Splide
              options={{
                perPage: 1,
                autoplay: true,
                speed: 1000,
                rewind: true,
                rewindByDrag: true,
              }}
            >
              {reviews.map((review) => (
                <SplideSlide key={review.id}>
                  <img className="review-img" src={review.image} alt="" />
                  <div className="content">
                    <p className="text">{review.text}</p>
                    <div className="info">
                      <div className="rating">
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9734;</span>
                      </div>
                      <p className="user">{review.name}</p>
                    </div>
                  </div>
                </SplideSlide>
              ))}
            </Splide>
          </div>
        </section>
      </Grid>
    </Grid>
  );
};

export default Testimonial1;
