import { FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 p-4 min-h-28">
      <div className=" container mx-auto flex flex-col md:flex-row md:justify-between md:items-center">
        
        <div  className="text-white text-center md:text-left mb-4 md:mb-0 ">
          
          <hr />
          <p>Asesorías Ambientales en todo el territorio nacional.</p>
          <p>vigesta@vigesta.cl</p>
       
          <p>&copy; {new Date().getFullYear()} Vigesta. Todos los derechos reservados.</p>
          <hr />
        </div>
        
        <div className="flex justify-center space-x-4 ">
          <a href="#" className="text-gray-400 hover:text-gray-500">
            <FaLinkedin size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-500">
            <FaInstagram size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-500">
            <FaFacebook size={24} />
          </a>
        </div>
       
        <hr />
      </div>
    </footer>
  );
};

export default Footer;