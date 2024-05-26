import Router from "./pages";
import { Normalize } from "styled-normalize";
import './index.css';


const App = () => {
  return (
    <>
      <Normalize />
      <Router />
    </>
  );
};

export default App;
