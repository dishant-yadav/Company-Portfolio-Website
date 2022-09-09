import Navbar from "./components/Navbar";
import Services from "./components/Services";
import About from "./components/About.js";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import "./App.css";

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

