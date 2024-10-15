import './styles/App.css';  // Ruta correcta al archivo de estilos de App
import Header from './components/Header';
import Banner from './components/Banner';
import AboutUs from './components/AboutUs';
import ClaimTypes from './components/ClaimTypes';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <AboutUs />
      <ClaimTypes/>
    </div>
  );
}

export default App;
