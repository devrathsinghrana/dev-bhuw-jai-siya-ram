import { createGlobalStyle } from "styled-components";
import Device from "../../config/Device";

const DARK_Base_Global = createGlobalStyle`
    :root {
        font-family: ${(props) => props.theme.font.Primary};
    }
    * {
        margin: 0;
        padding: 0;
    }
    *, ::after, ::before {
        box-sizing: border-box;
    }
    *:disabled {
        pointer-events: none;
        opacity: 0.4;
    }
    html,
    body {
        color: ${(props) => props.theme.common.color};
        font-family: ${(props) => props.theme.font.Primary};
    }
    html {
        font-size: 62.5%;
    }
    ul,
    li{
        list-style: none;
    }
    button {
        border: 0;
        border-radius: 0;
        background: none;
        cursor: pointer;
    }
    a {
        color: inherit;
        text-decoration: none;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        color: inherit;
        font-family: ${(props) => props.theme.font.Secondary};
    }
    .container{
        width: 100%;
        padding: 0 30px;
        margin: 0 auto;
        ${Device.tablet}{
            max-width: 750px;
            padding: 0 15px;
        }
        ${Device.laptopM} {
            max-width: 970px;
        }
        ${Device.laptopL} {
            max-width: 1170px;
        }
    }
    .container-body{
        text-align: center;
        ${Device.tablet} {
            text-align: left;
        }
    }
    .part1,
    .part2{
        width: 100%;
        ${Device.tablet} {
            width: 50%
        }
    }
    br{
        display:none;
        ${Device.laptopM} {
            display:block;
        }
    }
    
    
`;
export default DARK_Base_Global;
