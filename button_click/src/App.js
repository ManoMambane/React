import React from "react";

const useState = React.useState;

export default function App() {
  const [count, setCount] = useState(0);
  const onButtonClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={onButtonClick}>Click me!</button>
      <h1>Current Count: {count}</h1>
    </div>
  );
}
