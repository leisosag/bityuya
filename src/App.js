import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import ServiciosContainer from './components/ServiciosContainer';
import About from './components/About';
import PasosOperacion from './components/PasosOperacion';
import CarouselBitcoins from './components/CarouselBitcoins';
import './App.css';
import criptoCompare from './api/cryptoCompare';

class App extends React.Component {
  state = { coins: [] };

  async componentDidMount() {
    const response = await criptoCompare.get();
    console.log(response.data.Data);
    this.setState({ coins: response.data.Data });
  }

  render() {
    return (
      <div>
        <Navbar />
        <Header />
        <CarouselBitcoins coins={this.state.coins} />
        <ServiciosContainer />
        <About />
        <PasosOperacion />
      </div>
    );
  }
}

export default App;
