import React, { useContext } from "react";
import { CounterActionContext } from "./CounterProvider";

const MyButton = () => {
  console.log("MyButton rendered");
  const increase = useContext(CounterActionContext);
  return <button onClick={increase}>Increase</button>;
};

export default MyButton;
