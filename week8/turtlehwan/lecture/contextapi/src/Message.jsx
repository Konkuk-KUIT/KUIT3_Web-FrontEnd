import React, { useContext } from "react";
import LangContext from "./LangContext";

const Message = () => {
  const lang = useContext(LangContext);
  return <div>{lang === "en" ? "메시지" : "Message"}</div>;
};

export default Message;
