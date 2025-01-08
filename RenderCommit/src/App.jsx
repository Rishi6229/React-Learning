import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount((count) => count + 1);
          setCount((count) => count + 1);
          setCount((count) => count + 1);
          setCount((count) => count + 1);
          setCount((count) => count + 1);
        }}
      >
        Increment one
      </button>
      <h3>{count}</h3>

      <button
        onClick={() => {
          setCount((count)=>count + 1);
          setCount(count + 1);
          setCount(count + 1);
          setCount(count + 1);
          setCount(count + 1);
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <p>{count}</p>
    </>
  );
}

export default App;
