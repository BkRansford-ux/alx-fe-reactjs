import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./index.css"; // ✅ make sure Tailwind is imported here

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <div className="flex space-x-6 mb-8">
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="w-16 animate-spin-slow" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="w-16" alt="React logo" />
        </a>
      </div>
      <h1 className="text-4xl font-bold mb-4">Vite + React + Tailwind CSS ⚡</h1>
      <button
        onClick={() => setCount((count) => count + 1)}
        className="bg-sky-600 hover:bg-sky-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition"
      >
        Count is {count}
      </button>
      <p className="mt-4 text-gray-400">
        Edit <code>src/App.jsx</code> and save to test HMR.
      </p>
    </div>
  );
}
