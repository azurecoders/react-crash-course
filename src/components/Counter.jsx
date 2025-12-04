import { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  useEffect(() => {
    console.log("The value of counter has changed");
  }, [count]);

  return (
    <>
      <p>Counter Value is: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </>
  );
};

export default Counter;
