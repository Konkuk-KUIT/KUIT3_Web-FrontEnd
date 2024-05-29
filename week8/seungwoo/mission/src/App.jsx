import Router from "./pages";
import { Normalize } from "styled-normalize";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family:Pretendard;
  }
    
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Normalize />
      <Router />
    </>
  );
};

export default App;
