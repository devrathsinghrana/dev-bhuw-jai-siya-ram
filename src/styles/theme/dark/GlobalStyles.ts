import { createGlobalStyle } from "styled-components";
import SharedGlobalStyles from "../base/SharedGlobalStyles";

const DARK_Base_Global = createGlobalStyle`
    ${SharedGlobalStyles}
  html,
body {
  color: ${(props) => props.theme.common.color};
  font-family: ${(props) => props.theme.font.Primary};
}

.h1,
.h2,
.h3,
.h4,
.h5,
.h6 {
  color: inherit;
  font-family: ${(props) => props.theme.font.Secondary};
}
    
`;
export default DARK_Base_Global;
