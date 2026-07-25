import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="justify-center items-center flex flex-col min-h-screen bg-linear-to-b from-[#2e026d] to-[#15162c] text-white">
      <p>Hello Vite + React!</p>
      <button onClick={() => setCount(count + 1)}>Count is: {count}</button>
    </div>
  );
}

export default App;
