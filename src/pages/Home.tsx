import React from "react";
import Styled from "../styles/pageStyle/home.styled";
import Container from "../components/ui/Container";
import { Testimonial } from "../components/ui/PageSlider";

const Home = () => {
  const imageCommonUrl =
    "https://qa-assets.moncvparfait.fr/blobimages/mpintl-lp";
  return (
    <Styled.TestimonialSection>
      <Container>
        <Testimonial
          customClass="arrow-top dot-top custom-arrows"
          settings={{
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
          }}
          quotes_img={`${imageCommonUrl}/mfr/images/quote.svg`}
          testimonialContent={[
            {
              quotesReq: true,
              reviewerData: {
                src: `${imageCommonUrl}/mfr/mfr01/images/reviewer1.png`,
                width: "388",
                height: "432",
                objectFit: "contain",
                alt: "Lcuky Man",
              },
              userName: "Lcuky Man",
              reviewRating: "5",
              ratingDetails: {
                src: `${imageCommonUrl}/mfr/images/stars-icon.png`,
                height: "18",
                width: "96",
                layout: "fixed",
                alt: "star rating",
              },
              trustpilot: {
                src: `${imageCommonUrl}/mfr/images/trustpilot-star.png`,
                height: "25",
                width: "102",
                layout: "fixed",
                alt: "trustpilot alt",
              },
              userComment:
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore explicabo illo, mollitia voluptates nihil ratione vel dolorum, est nesciunt enim soluta voluptatibus omnis eligendi in fuga voluptas sed. Eveniet, minus.",
            },
            {
              quotesReq: true,
              reviewerData: {
                src: `${imageCommonUrl}/mfr/mfr01/images/reviewer2.png`,
                width: "326",
                height: "416",
                objectFit: "contain",
                alt: "Cathy Mathews",
              },
              userName: "Cathy Mathews",
              reviewRating: "5",
              ratingDetails: {
                src: `${imageCommonUrl}/mfr/images/stars-icon.png`,
                height: "18",
                width: "96",
                layout: "fixed",
                alt: "star rating",
              },
              trustpilot: {
                src: `${imageCommonUrl}/mfr/images/trustpilot-star.png`,
                height: "25",
                width: "102",
                layout: "fixed",
                alt: "trustpilot alt",
              },
              userComment:
                " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore explicabo illo, mollitia voluptates nihil ratione vel dolorum, est nesciunt enim soluta voluptatibus omnis eligendi in fuga voluptas sed. Eveniet, minus.",
            },
          ]}
          arrow="long_arrow"
        ></Testimonial>
      </Container>
    </Styled.TestimonialSection>
  );
};

export default Home;
