import Navbar from "./components/Navbar";
import Hero from "./components/Hero"
import Services from "./components/Services";
import "./App.css";
import About from "./components/assets/styles/About";

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Services />
    </div>
  );
}

export default App;

