import Router from "./pages";
import { Normalize } from "styled-normalize";
import { GlobalFontStyle, GlobalStyle } from "./globalStyle";

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
