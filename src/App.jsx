import { useState } from "react";
import "./App.css";
import Navbar from "./components/home/navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar />
      <div>hi</div>
    </div>
  );
}

export default App;
