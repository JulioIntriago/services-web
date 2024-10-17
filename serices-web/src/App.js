import './styles/App.css';  // Ruta correcta al archivo de estilos de App
import Header from './components/Header';
import Banner from './components/Banner';
import ClaimTypes from './components/ClaimTypes';
import ReclamoSection from './components/ReclamoSection';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <ReclamoSection />
      <ClaimTypes/>
    </div>
  );
}

export default App;
