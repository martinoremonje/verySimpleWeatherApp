import React from 'react';
import logo from '../assets/vigestaLogo.ico';
import { Link } from 'react-router-dom'; 

import { FaWhatsapp } from 'react-icons/fa'; 

import backgroundImg from '../assets/backgroundcombine.jpg'

const CombinedPage = () => {
  return (
    <div
    data-aos="fade-up" data-aos-duration="2000" 
   
      className="container mx-auto py-8 flex justify-end animate-fade-in-delayed"
    >
        
   
    <div  style={{
      backgroundImage: `url(${backgroundImg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }} className="min-h-screen bg-gray-100">
      {/* Navbar Simple */}
      <nav className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex-shrink-0">
              <Link to="/">
              
            <img src={logo} alt="Ir a la página de inicio" className="w-full h-full object-cover"/>
              </Link>
            </div>
            <div className="hidden sm:block">
              <div className="flex space-x-4">
                <a href="#contacto" className="text-gray-500 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium">Contacto</a>
                <a href="#about-us" className="text-gray-500 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium">Acerca de Nosotros</a>
                <a href="#referencias" className="text-gray-500 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium">Referencias</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Contenido de las secciones */}
      <main className="py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Sección de Contacto */}
          

          {/* Sección de Acerca de Nosotros */}
          <section id="about-us" className="py-6 flex justify-end">
            <div className="w-full md:w-1/2 lg:w-1/2 text-left"> {/* Contenedor a la derecha, texto a la izquierda */}
              <h2 className="text-2xl font-bold mb-4">Acerca de Nosotros</h2>
              <p className="mb-4">Somos una empresa dedicada a [tu descripción de la empresa]. Nuestra misión es [tu misión].</p>
              <h3 className="text-xl font-bold mb-2">Nuestra Historia</h3>
              <p className="mb-4">Fundada en [año] en la hermosa ciudad de Quillota, Valparaíso, Chile, comenzamos con la visión de [tu visión inicial]. A lo largo de los años, hemos crecido y evolucionado, siempre manteniendo nuestro compromiso con [tus valores principales].</p>
              <h3 className="text-xl font-bold mb-2">Nuestro Equipo</h3>
              <p className="mb-4">Contamos con un equipo apasionado y dedicado de profesionales que trabajan arduamente para ofrecerte los mejores [tus productos/servicios].</p>
              <h3 className="text-xl font-bold mb-2">Nuestros Valores</h3>
              <ul className="list-disc pl-6">
                <li>[Valor 1]</li>
                <li>[Valor 2]</li>
                <li>[Valor 3]</li>
              </ul>
            </div>
          </section>

          {/* Sección de Referencias */}
          <section id="referencias" className="py-6 flex justify-end">
            <div className="w-full md:w-1/2 lg:w-1/2 text-left"> {/* Contenedor a la derecha, texto a la izquierda */}
              <h2 className="text-2xl font-bold mb-4">Referencias de Nuestros Clientes</h2>
              {/* Ejemplo de referencias */}
              <div className="bg-gray-100 rounded-md p-6 mb-4">
                <h3 className="text-lg font-semibold mb-2">Juan Pérez</h3>
                <p className="text-gray-600 mb-1">Empresa ABC</p>
                <p className="italic text-gray-700">"¡Excelente servicio! Quedamos muy satisfechos con el trabajo realizado. Los recomendaría sin dudarlo."</p>
              </div>
              <div className="bg-gray-100 rounded-md p-6 mb-4">
                <h3 className="text-lg font-semibold mb-2">María González</h3>
                <p className="text-gray-600 mb-1">Startup XYZ</p>
                <p className="italic text-gray-700">"Profesionales y muy atentos a nuestras necesidades. Cumplieron con todas nuestras expectativas."</p>
              </div>
              {/* Agrega más referencias aquí */}
            </div>
          </section>
          <section id="contacto" className="py-6 flex justify-end">
            <div className="w-full md:w-1/2 lg:w-1/2 text-left"> {/* Contenedor a la derecha, texto a la izquierda */}
              <h2 className="text-2xl font-bold mb-4">Contacto</h2>
              <p className="mb-4">¡Estamos aquí para ayudarte! Contáctanos a través de los siguientes medios:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Email: info@tuempresa.com</li>
                <li>Teléfono: +56 9 1234 5678</li>
                <li>Dirección: Calle Falsa 123, Quillota, Chile</li>
              </ul>
              <p>O puedes completar el siguiente formulario:</p>
              <form className="max-w-lg">
                <div className="mb-4">
                  <label htmlFor="nombre" className="block text-gray-700 text-sm font-bold mb-2">Nombre:</label>
                  <input type="text" id="nombre" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
                  <input type="email" id="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                <div className="mb-4">
                  <label htmlFor="mensaje" className="block text-gray-700 text-sm font-bold mb-2">Mensaje:</label>
                  
                </div>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Enviar Mensaje</button>
              </form>
            </div>
            <a
       
        href="https://wa.me/56984146344"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-700 text-white rounded-full w-14 h-14 flex items-center justify-center z-50 shadow-lg whatsapp-grow-on-hover"
      >
        <FaWhatsapp className="w-8 h-8" />
      </a>
          </section>
        </div>
      </main>
    </div>
    </div>
    
  );
};

export default CombinedPage;