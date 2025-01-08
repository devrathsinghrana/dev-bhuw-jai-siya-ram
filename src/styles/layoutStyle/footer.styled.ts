import styled, { css } from "styled-components";
import Device from "../config/Device";

const Styled = {
  Footer: styled.footer`
    ${css`
      padding: 15px 0px;
      background-color: rgb(57, 77, 107);
      color: rgb(246, 245, 240);
      font-size: 1.2rem;
      line-height: 1.8rem;
      position: relative;

      .container-body {
        ${Device.tablet} {
          justify-content: start;
        }
        .copyright-text {
          font-size: 1rem;
          ${Device.tablet} {
            text-align: left;
          }
        }
        .services-details {
          text-align: center;
        }
        .footer-item {
          ${Device.tablet} {
            width: 33.33%;
          }
        }
      }
      svg {
        fill: rgb(246, 245, 240);
        position: relative;
        margin: 0px 5px 0px 7px;
        top: 4px;
      }
    `}
  `,
};

export default Styled;
