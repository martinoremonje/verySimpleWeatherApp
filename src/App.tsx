import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Carousel from "./components/Carrousel";
import imagen1 from './assets/construction.png';
import imagen2 from './assets/icono-juan.jpg';
import imagen3 from './assets/running.png';
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Componentes para las rutas
import CombinedPage from './components/CombinedPage'; // Importa el nuevo componente

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const images = [imagen1, imagen2, imagen3];

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Carousel images={images} />} />
        <Route path="/contacto" element={<CombinedPage />} /> {/* Usa CombinedPage para la ruta de contacto */}
        {/* Puedes eliminar o modificar las otras rutas según sea necesario */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;