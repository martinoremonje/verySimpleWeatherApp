import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Carousel from "./components/Carrousel";
import imagen1 from './assets/construction.png';
import imagen2 from './assets/leyusodeaguavigesta.png';
import imagen3 from './assets/running.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from './components/Footer';

// Componentes para las páginas de Contacto, About Us y Referencias
import Contact from './components/CombinedPage';


const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const images = [imagen1, imagen2, imagen3];

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Carousel images={images} />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;