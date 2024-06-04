import React from "react";

const MyComponent2 = ({ children }) => {
  console.log("MyComponent2 rendered");
  return <div>MyComponent2 {children}</div>;
};

export default MyComponent2;
