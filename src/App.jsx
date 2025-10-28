import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Post from "./Post";

function App() {
  return (
    <div className="c">
      <ol>
        <li>Componts</li>
        <li>JSX</li>
        <li>Props</li>
        <li>Event Handler </li>
        <li>State</li>
        <li>load Data</li>
      </ol>
      <Post></Post>
    </div>
  );
}

export default App;
