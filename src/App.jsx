import { useState } from "react";
import Hero from "./components/home/hero";
import Navbar from "./components/home/navbar";
import Skills from "./components/skills/skills";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Skills />
      <div>hi</div>
    </div>
  );
}

export default App;
