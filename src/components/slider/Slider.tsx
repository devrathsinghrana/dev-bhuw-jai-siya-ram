import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider, { Settings } from "react-slick";
import { forwardRef, ReactNode } from "react";
import { ICONS } from "../../assets/Icons/Icons";

type SliderComponentProps = {
  left_arrow?: string | undefined;
  right_arrow?: string | undefined;
  arrow?: string | undefined;
  slideData: React.ReactNode | ReactNode;
  settings?: object;
  sliderType?: string;
};

type ArrowProps = {
  currentSlide?: number;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
};

const SliderComponent = forwardRef<Slider, SliderComponentProps>(
  (props, ref): JSX.Element => {
    const {
      left_arrow,
      right_arrow,
      arrow,
      slideData,
      settings: customSettings,
    } = props;

    const PreviousArrow = ({
      currentSlide,
      ...rest
    }: ArrowProps): JSX.Element => {
      return (
        <button title="left arrow" {...rest}>
          {left_arrow ? ICONS[left_arrow] : arrow ? ICONS[arrow] : null}
        </button>
      );
    };

    const NextArrow = ({ currentSlide, ...rest }: ArrowProps): JSX.Element => {
      return (
        <button title="right arrow" {...rest}>
          {right_arrow ? ICONS[right_arrow] : arrow ? ICONS[arrow] : null}
        </button>
      );
    };

    const dotsArray = (dots: ReactNode): JSX.Element => {
      const dotArray = Array.isArray(dots) ? dots : [dots];
      return (
        <ul className="slick-dots" style={{ display: "block" }}>
          {dotArray.map((dot, index: number) => (
            <li
              key={`${props.sliderType}-${index}`}
              className={`slick-dot ${dot?.props?.className || ""}`}
            >
              {dot?.props?.children}
            </li>
          ))}
        </ul>
      );
    };

    const baseSettings: Settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      arrows: true,
      swipe: true,
      prevArrow: <PreviousArrow />,
      nextArrow: <NextArrow />,
      appendDots: dotsArray,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    const mergedSettings = { ...baseSettings, ...customSettings };

    return (
      <Slider {...mergedSettings} ref={ref}>
        {slideData}
      </Slider>
    );
  }
);

export default SliderComponent;
