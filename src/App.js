import Navbar from "./components/Navbar";
import Header from "./components/Header";
import ServiciosContainer from "./components/ServiciosContainer";
import About from "./components/About";
import "./App.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <ServiciosContainer />
      <About />
    </div>
  );
};

export default App;
