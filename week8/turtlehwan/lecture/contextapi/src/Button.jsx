import React, { useContext } from "react";
import LangContext from "./LangContext";

const Button = ({ toggleLang }) => {
  const lang = useContext(LangContext);
  return <button onClick={toggleLang}>{lang}</button>;
};

export default Button;
