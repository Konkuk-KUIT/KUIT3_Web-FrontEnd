import Router from "./pages";
import { Normalize } from "styled-normalize";

const App = () => {
  return (
    <>
      <Normalize />
      <Router />
    </>
  );
};
// 브라우저마다 기본적으로 적용되는 style 존재
// -> 기존 style을 초기화하고 새 style을 적용해야 어떤 브라우저던 동일하게 적용됨
// 이를 위한 라이브러리: Normalize(reset.css를 간편하게 사용 가능)

export default App;
