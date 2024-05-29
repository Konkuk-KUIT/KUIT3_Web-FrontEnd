import React, { useContext } from "react";
import { CounterValueContext } from "./CounterProvider";

const MyComponent3 = () => {
  console.log("MyComponent3 rendered");
  const count = useContext(CounterValueContext);
  return <div>MyComponent3: Count: {count}</div>;
};

export default MyComponent3;
