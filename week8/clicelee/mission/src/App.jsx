import Router from "./pages";
import { Normalize } from "styled-normalize";


const App = () => {
  return (
    <>
      <Normalize /> {/*reset.css와 비슷한거 */}
      <Router />
    </>
  );
};

export default App;
