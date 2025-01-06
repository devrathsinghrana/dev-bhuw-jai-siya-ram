import React from "react";
import SliderComponent from "./Slider";
import { Styled } from "../../styles/componentStyle/ui/pageSlider.styled";

interface TestimonialContent {
  userComment: string;
  userName: string;
}

interface TestimonialProps {
  testimonialContent?: TestimonialContent[];
  quotes_img?: string; // Add the appropriate type for your quotes_img
  customClass?: string;
  settings?: object; // Replace with a more specific type if possible
  sliderType?: any;
  trackRightClick?: () => void;
  trackLeftClick?: () => void;
  left_arrow?: React.ReactNode;
  right_arrow?: React.ReactNode;
  arrow?: boolean;
}

export const Testimonial: React.FC<TestimonialProps> = (props) => {
  const DisplayContent: React.FC<TestimonialContent> = ({
    userComment,
    userName,
  }) => {
    return (
      <div className="testimonial-container">
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
        />
      </div>
    );
  });

  return (
    <Styled.Testimonial quotes={props.quotes_img}>
      <Styled.SliderContainer className={props.customClass}>
        <SliderComponent
          slideData={TestimonialData}
          settings={props.settings}
          left_arrow={props.left_arrow}
          right_arrow={props.right_arrow}
          arrow={props.arrow}
        />
      </Styled.SliderContainer>
    </Styled.Testimonial>
  );
};
