/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import SliderComponent from "./Slider";
import { Styled } from "../../styles/componentStyle/slider/pageSlider.styled";

interface TestimonialContent {
  userComment: string | TrustedHTML;
  userName?: string;
  reviewerData?: object;
  reviewRating?: string;
  ratingDetails?: object;
  trustpilot?: object;
}

interface TestimonialProps {
  testimonialContent?: TestimonialContent[];
  customClass?: string;
  sliderType?: string;
  settings?: object; // Replace with a more specific type if possible
  left_arrow?: string;
  right_arrow?: string;
  arrow?: string;
}

interface BannerContent {
  bannerData?: object;
}

interface BannerProps {
  bannerContent?: BannerContent[];
  customClass?: string;
  sliderType?: string;
  settings?: object; // Replace with a more specific type if possible
  left_arrow?: string;
  right_arrow?: string;
  arrow?: string;
}

export const Testimonial: React.FC<TestimonialProps> = (props) => {
  const DisplayContent: React.FC<TestimonialContent> = ({
    userComment,
    userName,
    reviewerData,
  }) => {
    return (
      <div className="testimonial-container">
        <img className={`profile-container`} {...reviewerData} />
        <div className="review-container">
          <p
            className="user-comment"
            dangerouslySetInnerHTML={{ __html: userComment }}
          ></p>
          <div className="reviewer-info">
            <span className="user-name">{userName}</span>
          </div>
        </div>
      </div>
    );
  };

  const TestimonialData = props?.testimonialContent?.map((item, index) => {
    return (
      <div className="testimonial-wrapper" key={`testimonial-${index}`}>
        <DisplayContent
          userComment={item.userComment}
          userName={item.userName}
          reviewerData={item.reviewerData}
        />
      </div>
    );
  });

  return (
    <Styled.Testimonial>
      <Styled.SliderContainer className={props.customClass}>
        <SliderComponent
          slideData={TestimonialData}
          settings={props.settings}
          left_arrow={props.left_arrow}
          right_arrow={props.right_arrow}
          arrow={props.arrow}
          sliderType={props.sliderType}
        />
      </Styled.SliderContainer>
    </Styled.Testimonial>
  );
};

export const BannerSlider: React.FC<BannerProps> = (props) => {
  const DisplayContent: React.FC<BannerContent> = ({ bannerData }) => {
    return (
      <div className="banner-container">
        <img className={`banner-container`} {...bannerData} />
      </div>
    );
  };

  const BannerSlides = props?.bannerContent?.map((item, index) => {
    console.log(item);
    return (
      <div className="banner-wrapper" key={`banner-${index}`}>
        <DisplayContent bannerData={item.bannerData} />
      </div>
    );
  });

  return (
    <Styled.Banner>
      <Styled.SliderContainer className={props.customClass}>
        <SliderComponent
          slideData={BannerSlides}
          settings={props.settings}
          left_arrow={props.left_arrow}
          right_arrow={props.right_arrow}
          arrow={props.arrow}
          sliderType={props.sliderType}
        />
      </Styled.SliderContainer>
    </Styled.Banner>
  );
};
