import styled, { css } from "styled-components";
import Device from "../../config/Device";

export const Styled = {
  SliderContainer: styled.div`
    ${(props) => {
      const slider = props.theme.components.slider.Slider;
      return css`
        .wrapper {
          position: ${slider.wrap_pos};
        }
        .popup-overlay {
          :hover {
            .image-container {
              opacity: 0.3;
            }
            .zoom-popup {
              display: flex;
            }
          }
        }

        .btn-wrapper {
          position: ${slider.btn_wrap_pos};
          bottom: ${slider.btn_wrap_bottom};
          text-align: ${slider.btn_wrap_textAlign};
          width: ${slider.btn_wrap_width};
          display: ${slider.btn_wrap_dis};
        }
        .slick-slide {
          > div {
            margin: ${slider.slide_div_mg};
            ${Device.tablet} {
              margin: ${slider.slide_div_mg_tab};
            }
          }
          &.slick-active.slick-center {
            .btn-wrapper {
              display: ${slider.slide_active_btn_dis};
            }
          }
        }
        .zoom-popup {
          display: none;
          position: absolute;
          width: 100%;
          justify-content: center;
          align-items: center;
          :hover {
            text-decoration: underline;
          }
        }
        .zoom-icon {
          display: flex;
          justify-content: center;
          align-items: center;
          font-family: ${(props) => props.theme.font.Primary};
        }

        .image-container {
          background-color: ${slider.img_cont_bg};
        }

        .slick-dots {
          bottom: ${slider.slick_dot_bottom};

          li {
            &.slick-active {
              button {
                &::before {
                  opacity: ${slider.active_slide_btn_before_opacity};
                  font-size: ${slider.active_slide_btn_before_fs};
                  color: ${slider.active_slide_btn_before_clr};
                }
              }
            }
            button {
              &::before {
                font-size: ${slider.slide_btn_before_fs};
                color: ${slider.slide_btn_before_clr};
                opacity: ${slider.slide_btn_before_opacity};
              }
            }
          }
        }

        &.pd-top {
          .slick-slider {
            padding: ${slider.slide_pd_top};
          }
        }
        &.pd-bottom {
          .slick-slider {
            padding: ${slider.slide_pd_bottom};
          }
        }
        &.pd-top-bottom {
          .slick-slider {
            padding: ${slider.slider_pd};
          }
        }

        &.dot-top {
          .slick-dots {
            top: ${slider.slider_dot_top};
          }
        }

        &.arrow-top,
        &.arrow-bottom {
          .slick-arrow {
            transform: ${slider.slick_arrow_trans};
          }
          .slick-next {
            right: ${slider.slick_next_right};
          }
          .slick-prev {
            left: ${slider.slick_prev_left};
            transform: rotate(180deg);
          }
        }

        &.arrow-top {
          .slick-arrow {
            top: ${slider.arrow_top};
          }
        }

        &.arrow-bottom {
          .slick-arrow {
            top: ${slider.bottom_arrow_top};
            bottom: ${slider.bottom_arrow_bottom};
          }
        }

        .slick-arrow {
          z-index: ${slider.arrow_zIndex};
          &.slick-prev,
          &.slick-next {
            &::before {
              opacity: ${slider.slick_arrow_before_opacity};
              color: ${slider.slick_arrow_before_clr};
            }
          }
          svg {
            fill: ${slider.slick_arrow_clr};
          }
        }
        &.custom-arrows {
          .slick-arrow {
            &::before,
            &::after {
              content: ${slider.custom_arrow_content};
            }
          }
        }

        .badge {
          position: ${slider.badge_pos};
          bottom: ${slider.badge_bottom};
          right: ${slider.badge_right};
          background: ${slider.badge_bg};
          border-radius: ${slider.badge_bdrRds};
          padding: ${slider.badge_pd};
          font-size: ${slider.badge_fs};
          line-height: ${slider.badge_ln};
          font-weight: ${slider.badge_fntWg};
          color: ${slider.badge_clr};

          span {
            color: ${slider.badge_span_clr};
            padding: ${slider.badge_span_pd};
            transform: ${slider.badge_span_trans};
            display: ${slider.badge_span_dis};
          }
        }
      `;
    }}
  `,
  Testimonial: styled.div`
    ${(props) => {
      const slider = props.theme.components.slider.Slider;
      return css`
        .dot-top .slick-dots {
          ${Device.laptopM} {
            top: ${slider.testi_dots_top};
            bottom: ${slider.testi_dots_bottom};
          }
          li {
            margin: ${slider.testi_dots_li_mg};
          }
        }
        .testimonial-container {
          display: ${slider.test_cont_dis};
          flex-direction: ${slider.testi_cont_fDir};
          padding: ${slider.testi_cont_pd};
          gap: ${slider.testi_cont_gap};
          ${Device.laptopM} {
            flex-direction: ${slider.test_cont_fDir_tab};
            padding: ${slider.test_cont_pd_tab};
            gap: ${slider.testi_cont_gap_tab};
          }
        }
        .profile-container {
          margin: ${slider.testi_profile_mg};
          ${Device.laptopM} {
            width: ${slider.testi_profile_width};
            min-height: ${slider.testi_profile_minH};
            display: ${slider.testi_profile_dis};
            justify-content: ${slider.testi_profile_jContent};
            align-items: ${slider.test_profile_aItems};
          }
        }

        .custom-arrows .slick-arrow {
          ${Device.laptopM} {
            top: ${slider.testi_arrow_top};
            height: ${slider.testi_arrow_height};
            width: ${slider.testi_arrow_width};
            background-color: ${slider.testi_arrow_bg};
            border-radius: ${slider.testi_arrow_bdrRds};
          }
          svg {
            ${Device.laptopMax} {
              fill: ${slider.testi_arrow_clr};
            }
          }
        }
        .review-container {
          ${Device.laptopM} {
            width: ${slider.review_width};
            padding: ${slider.review_pd};
          }
        }
        .user-comment {
          font-style: ${slider.review_fstyle};
          padding: ${slider.review_pd};
          text-align: ${slider.review_textAlign};
          display: ${slider.review_dis};
          ${Device.laptopM} {
            min-height: ${slider.review_minH};
            padding: ${slider.review_pd_tab};
            align-items: ${slider.review_aItems};
          }
        }
        .reviewer-info {
          display: ${slider.info_dis};
          gap: ${slider.info_gap};
          flex-wrap: ${slider.info_fWrap};
          text-align: ${slider.info_textAlign};
          align-items: ${slider.info_aItems};
          justify-content: ${slider.info_jContent};
          ${Device.laptopM} {
            justify-content: ${slider.info_jContent_tab};
            text-align: ${slider.info_textAlign_tab};
          }
        }

        .user-name {
          width: ${slider.uname_width};
          ${Device.laptopL} {
            width: ${slider.uname_width_tab};
          }
        }
      `;
    }}
  `,
  Banner: styled.div`
  ${css`
  
    `}
  `,
};
