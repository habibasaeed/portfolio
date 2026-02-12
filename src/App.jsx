import "./App.css";
import Contact from "./Components/Footer";
import Education from "./Components/Education";
import Hero from "./Components/Hero/Hero";
import Projects from "./Components/Projects/Projects";
import TechStack from "./Components/TechStack/TechStack";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
function App() {
  return (
    <>
      <Navbar />
      <Hero />

      <TechStack />
      <Projects />
      <Education />
      <Contact />
    </>
  );
}

export default App;
