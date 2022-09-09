import Navbar from "./components/Navbar";
import Hero from "./components/Hero"
import Services from "./components/Services";
import "./App.css";
import About from "./components/assets/styles/About";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Services />
      <Pricing />
      <Contact />
    </div>
  );
}

export default App;

