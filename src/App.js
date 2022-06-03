import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Menu from './Components/Menu'
import Cart from './Components/Cart';
import { useGlobalContext } from './Components/Context';
import Slider from './Components/Slider';

function App() {
  const {menuDisplay, cartOpen, sliderOpen} = useGlobalContext();
  return (
    <div >
      <div className="App">
        <Navbar/>
        <Hero/>
        {menuDisplay && <Menu/>}
        {cartOpen && <Cart/>}
      </div>
      {sliderOpen && <Slider/>}
    </div>
  );
}

export default App;
