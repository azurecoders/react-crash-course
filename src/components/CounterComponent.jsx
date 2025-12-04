import { useState } from "react";

const CounterComponent = () => {
  console.log("This is me Counter Component");

  const [count, setCount] = useState(0);
  // const count = 0;

  const handleClick = () => {
    setCount((prev) => prev + 1);
    // count = count + 1;
    // console.log(count);
  };

  return <button onClick={handleClick}>Click me to increment {count}</button>;
};

export default CounterComponent;
