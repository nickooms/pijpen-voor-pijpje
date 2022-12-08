import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

const MENU_ITEMS: string[] = [
  "Brokje ruilen voor",
  "Gepimpte pijpjes",
  "Bong van de week",
  "Pijp porn",
  "Getaffel",
  "High score",
];

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
      <h1>Pijpen voor pijpje</h1>
      <div className="card">
        {MENU_ITEMS.map((item: string, index: number) => (
          <button key={index}>{item}</button>
        ))}
      </div>
      <div className="card">
        <video src="/assets/videos/pijpen-met-de-pijp.mp4" controls />
      </div>
      <p className="read-the-docs">
        &copy; 2022 -{" "}
        <a href="/" style={{ textDecorationColor: "" }}>
          Pijpen voor pijpje
        </a>{" "}
        by De Pijpers
      </p>
    </div>
  );
}

export default App;
