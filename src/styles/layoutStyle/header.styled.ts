import styled, { css } from "styled-components";

const Styled = {
  Header: styled.header`
    ${css`
      box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
      .header-cont-body {
        padding: 5px 0;
      }
    `}
  `,
};

export default Styled;
