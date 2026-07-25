import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="justify-center items-center flex flex-col min-h-screen bg-background text-white">
      <p className="text-text-muted text-display">Hello Vite + React!</p>
      <button className="bg-surface-selected text-white hover:bg-primary-hover focus:ring focus:ring-blue-500" onClick={() => setCount(count + 1)}>
        Count is: {count}
      </button>
    </div>
  );
}

export default App;
