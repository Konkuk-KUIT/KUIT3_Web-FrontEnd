import Router from "./pages";
import { Normalize } from "styled-normalize";

const App = () => {
  return (
    /* Normalize => 브라우저의 기본 스타일 초기화하는 라이브러리 */
    <>
      <Normalize />
      <Router />
    </>
  );
};

export default App;
