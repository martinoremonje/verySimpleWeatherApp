import { FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 min-h-28">
      <div className="container mx-auto flex flex-col md:flex-row md:justify-between md:items-center">
        
        <div  className="text-center md:text-left mb-4 md:mb-0">
          
          <hr />
          <p>&copy; {new Date().getFullYear()} Vigesta. Todos los derechos reservados.</p>
          <p>vigesta@vigesta.cl</p>
          <p>Asesorías Ambientales en todo el territorio nacional</p>
          
          <hr />
        </div>
        
        <div className="flex justify-center space-x-4 ">
          <a href="#" className="hover:text-gray-300">
            <FaLinkedin size={24} />
          </a>
          <a href="#" className="hover:text-gray-300">
            <FaInstagram size={24} />
          </a>
          <a href="#" className="hover:text-gray-300">
            <FaFacebook size={24} />
          </a>
        </div>
        <hr />
      </div>
    </footer>
  );
};

export default Footer;