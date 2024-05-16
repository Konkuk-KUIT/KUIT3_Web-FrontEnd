import { createGlobalStyle } from "styled-components";
import SunflowerLight from "./Sunflower-Light.woff";
import SignikaNegative from "./SignikaNegative.woff";

const GlobalFontStyle = createGlobalStyle`
  @font-face {
    font-family: "SunflowerLight";
    src: url(${SunflowerLight}) format('woff'); 
    font-weight: normal;
  }
  @font-face {
    font-family: "SignikaNegative";
    src: url(${SignikaNegative}) format('woff'); 
    font-weight: normal;
  }
`;

export default GlobalFontStyle;