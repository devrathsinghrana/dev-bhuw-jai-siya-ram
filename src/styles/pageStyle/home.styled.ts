import styled, { createGlobalStyle, css } from "styled-components";
import Device from "../config/Device";

export const PageStyle = createGlobalStyle`
    ${css``}
`;

const Styled = {
  TestimonialSection: styled.section`
    ${css`
      background-color: #f6f5f0;
      padding: 60px 0 0;
      ${Device.laptopL} {
        margin: 60px 0 0;
      }
      .heading {
        font-size: 4rem;
        line-height: 4.8rem;
        text-align: center;
        margin: 0 0 40px;
      }
      .user-comment {
        font-size: 2rem;
        line-height: 3rem;
        br {
          ${Device.laptopMax} {
            display: block;
          }
        }
      }
      .user-name {
        font-size: 2.4rem;
        line-height: 2.6rem;
        font-weight: 700;
      }
      .rating-count {
        font-size: 1.6rem;
        line-height: 2.6rem;
      }
      .smile {
        display: contents;
        font-style: normal;
      }
      .slick-slider {
        .slick-prev {
          transform: rotate(180deg);
        }
      }
      .slick-slide {
        ${Device.tabletMax} {
          opacity: 0;
          height: 0;
          &.slick-active {
            opacity: 1;
            height: 100%;
          }
        }
      }
    `}
  `,
  BannerSection: styled.section`
    ${css``}
  `,
};

export default Styled;
