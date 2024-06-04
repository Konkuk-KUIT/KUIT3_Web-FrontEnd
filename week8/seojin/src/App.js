import Router from "./pages";
import { Normalize } from "styled-normalize";
import "./App.css";
const App = () => {
  return (
    <div className="header">
      <Normalize />
      <Router />
    </div>
  );
};

export default App;
