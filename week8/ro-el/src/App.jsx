import Router from "./pages";
import { Normalize } from "styled-normalize";

const App = () => {
  return (
    <>
      <GlobalFontStyle />
      <Normalize />
      <Router />
    </>
  );
};

export default App;
