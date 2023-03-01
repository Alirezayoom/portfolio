import { useState } from "react";
import Hero from "./components/home/hero";
import Navbar from "./components/home/navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div>hi</div>
    </div>
  );
}

export default App;
