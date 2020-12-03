import Navbar from "./components/Navbar";
import Header from "./components/Header";
import ServiciosContainer from "./components/ServiciosContainer";
import About from "./components/About";
import PasosOperacion from "./components/PasosOperacion";
import CarouselBitcoins from "./components/CarouselBitcoins";
import "./App.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <ServiciosContainer />
      <About />
      <PasosOperacion />
      <CarouselBitcoins />
    </div>
  );
};

export default App;
