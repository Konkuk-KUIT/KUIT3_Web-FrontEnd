import React, { useContext } from "react";
import { CounterActionContext } from "./CounterProvider";

const MyComponent4 = () => {
  const increase = useContext(CounterActionContext);
  console.log("MyComponent4 rendered");
  return <div>MyComponent4</div>;
};

export default MyComponent4;
