import  Carousel  from "./components/Carrousel";
import imagen1 from './assets/construction.png';
import imagen2 from './assets/icono-juan.jpg';
import imagen3 from './assets/running.png';
import Footer from './components/Footer';

const App = () => {
  
  const images = [
    imagen1, imagen2, imagen3
   ];
 
  return (
    
    <>

    <Carousel images={images}/>
    <Footer/ >
    </>
  );
};

export default App;
