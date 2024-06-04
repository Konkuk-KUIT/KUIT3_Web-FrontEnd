import React, { useState } from "react";
import LangContext from "./LangContext";
import Button from "./Button";
import Message from "./Message";

const App = () => {
  const [lang, setLang] = useState("en");

  const toggleLang = () => {
    setLang((prev) => (prev === "en" ? "kr" : "en"));
  };

  return (
    <LangContext.Provider value={lang}>
      <Button toggleLang={toggleLang} />
      <Message />
    </LangContext.Provider>
  );
};

export default App;
