import Navbar from "./components/Navbar";
import Hero from "./components/Hero"
import Services from "./components/Services";
import "./App.css";
import About from "./components/assets/styles/About";
import Pricing from "./components/Pricing";

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Services />
      <Pricing />
    </div>
  );
}

export default App;

