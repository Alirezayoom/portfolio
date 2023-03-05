import Navbar from "./components/layout/navbar";
import Hero from "./components/home/hero";
import Skills from "./components/skills/skills";
import Project from "./components/project/project";
import Contact from "./components/contact/contact";
import Footer from "./components/layout/footer";

function App() {
  return (
    <>
      <header>
        <Navbar />
        <Hero />
      </header>
      <main>
        <Skills />
        <Project />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
