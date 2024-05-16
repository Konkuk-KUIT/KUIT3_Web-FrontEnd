import { createGlobalStyle } from "styled-components";
import Router from "./routes/Router";
import reset from "styled-reset";
import GlobalFontStyle from "./fonts/fonts";

const GlobalStyle = createGlobalStyle`
  ${reset}
`; // CSS Style Reset

function App() {
  return (
    <div>
      <GlobalStyle />
      <GlobalFontStyle />
      <Router />
    </div>
  );
}

export default App;
