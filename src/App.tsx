import React from "react";
import Navbar from "./components/Navbar/Navbar"; //listo y responsivo 768
import Hero from "./components/Hero/Hero"; //listo y responsivo 768
import Servicios from "./components/Services/Services"; // Listo y responsivo 768
import About from "./components/About/About"; //Listo y responsivo 768
import Testimonio from "./components/Testimonio/Testimonio"; // Listo y responsivo 768
import UsuarioPerfil from "./components/UsuarioPerfil/UsuarioPerfil";  // Listo y responsivo 768
import ClientesSlider from "./components/clientesSlider/ClientesSlider"; // Listo y responsivo 768
import Contacto from "./components/contacto/Contacto"; // Listo y responsivo 768
import Footer from "./components/Footer/Footer"; // Listo y responsivo 768
import "./App.css";

const App: React.FC = () => {
  return (
    <>
      <Navbar /> {/*Listo y responsivo 768*/}
      <Hero />  {/*Listo y responsivo 768*/}
      <Servicios /> {/*Listo y responsivo 768*/}
      <About /> {/*Listo y responsivo 768*/}
      <Testimonio /> {/*Listo y responsivo 768*/}
      <UsuarioPerfil /> {/*Listo y responsivo 768*/}
      <ClientesSlider /> {/*Listo y responsivo 768*/}
      <Contacto /> {/*Listo y responsivo 768*/}
      <Footer /> {/*Listo y responsivo 768*/}
    </>
  );
};

export default App;