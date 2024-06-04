import CounterProvider from "./CounterProvider";
import MyButton from "./MyButton";
import MyComponent1 from "./MyComponent1";
import MyComponent2 from "./MyComponent2";
import MyComponent3 from "./MyComponent3";
import MyComponent4 from "./MyComponent4";

const App = () => {
  return (
    <CounterProvider>
      <MyComponent1 />
      <MyComponent2>
        <MyComponent3 />
      </MyComponent2>
      <MyComponent4 />
      <MyButton />
    </CounterProvider>
  );
};

export default App;
