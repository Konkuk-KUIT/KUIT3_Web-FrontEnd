import { createContext, useCallback, useState } from "react";

export const CounterValueContext = createContext(0);
export const CounterActionContext = createContext(() => {});

function CounterProvider({ children }) {
  const [counter, setCounter] = useState(0);

  const increase = useCallback(() => {
    setCounter((prev) => prev + 1);
  }, []);

  console.log("Provider rendered");

  return (
    <CounterValueContext.Provider value={counter}>
      <CounterActionContext.Provider value={increase}>
        {children}
      </CounterActionContext.Provider>
    </CounterValueContext.Provider>
  );
}
export default CounterProvider;

// const increase = useCallback(() => {
//   setCounter((prev) => prev + 1);
// }, []);