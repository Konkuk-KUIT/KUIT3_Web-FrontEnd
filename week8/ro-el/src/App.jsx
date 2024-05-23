import Router from "./pages";
import { Normalize } from "styled-normalize";
import GlobalFontStyle from "./fonts/fonts";
import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
`; // CSS Style Reset

const App = () => {
  return (
    <>
      <GlobalStyle />
      <GlobalFontStyle />
      <Normalize />
      <Router />
    </>
  );
};

export default App;
