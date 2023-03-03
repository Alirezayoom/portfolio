import Contact from "./components/contact/contact";
import Hero from "./components/home/hero";
import Navbar from "./components/home/navbar";
import Project from "./components/project/project";
import Skills from "./components/skills/skills";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Project />
      <Contact />
    </>
  );
}

export default App;
