import React from "react";
import Styled from "../styles/pageStyle/home.styled";
import Container from "../components/ui/Container";
import { BannerSlider, Testimonial } from "../components/slider/PageSlider";
import images from "../assets/images";
import ContentItems from "../components/ui/ContentItems";

const Home = () => {
  const { reviewer1, reviewer2 } = images;

  const cData = {
    bannerContent: [
      {
        bannerData: {
          src: reviewer1,
          width: "388",
          height: "432",
          objectFit: "contain",
          alt: "Luc J.",
        },
      },
      {
        bannerData: {
          src: reviewer2,
          width: "388",
          height: "432",
          objectFit: "contain",
          alt: "Tim L.",
        },
      },
    ],
    testimonialContent: [
      {
        reviewerData: {
          src: reviewer1,
          width: "388",
          height: "432",
          objectFit: "contain",
          alt: "Luc J.",
        },
        userName: "Luc J.",
        userComment:
          "Successful experience. My experience with monCVparfait was very conclusive with many returns from employers interested in my CV.",
      },
      {
        reviewerData: {
          src: reviewer2,
          width: "388",
          height: "432",
          objectFit: "contain",
          alt: "Tim L.",
        },
        userName: "Tim L.",
        userComment:
          "Successful experience. My experience with monCVparfait was very conclusive with many returns from employers interested in my CV.",
      },
    ],
    sliderSettings: {
      swipe: true,
      centerMode: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerPadding: "20px",
      responsive: [
        {
          breakpoint: 575,
          settings: {
            centerPadding: 0,
          },
        },
      ],
    },
  };

  return (
    <>
      <Styled.BannerSection>
        <Container>
          <BannerSlider
            customClass="arrow-top dot-top custom-arrows"
            sliderType="banner"
            settings={cData.sliderSettings}
            bannerContent={cData.bannerContent}
            arrow="longArrow"
          />
        </Container>
      </Styled.BannerSection>
      <Styled.TestimonialSection>
        <Container>
          <ContentItems heading={`Thousands of satisfied users`}></ContentItems>
          <Testimonial
            customClass="arrow-top dot-top custom-arrows"
            sliderType="testimonial"
            settings={cData.sliderSettings}
            testimonialContent={cData.testimonialContent}
            arrow="longArrow"
          />
        </Container>
      </Styled.TestimonialSection>
    </>
  );
};

export default Home;
