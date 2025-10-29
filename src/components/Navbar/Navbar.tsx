import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detectar si la pantalla es móvil
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className={styles.navbarContainer}>
      <div className={styles.logoSection}>
        <img
          src="/imagen/logon-barberia.png"
          alt="Logo Barbería"
          className={styles.logo}
        />
        <h1 className={styles.titleTxt}>
          {isMobile ? "BarberíaSM" : "Barbería San Martín"}
        </h1>
      </div>

      {/* Botón menú */}
      <div
        className={`${styles.botonMenu} ${menuOpen ? styles.active : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <img
          src="/imagen/menu.png"
          alt="Menú"
          className={styles.botonHamburguesa}
        />
      </div>

      {/* Enlaces */}
      <ul
        className={`${styles.navLinks} ${menuOpen ? styles.menuAbierto : ""}`}
      >
        <li><a href="#inicio" onClick={() => setMenuOpen(false)}>Inicio</a></li>
        <li><a href="#nosotros" onClick={() => setMenuOpen(false)}>Nosotros</a></li>
        <li><a href="#servicios" onClick={() => setMenuOpen(false)}>Servicios</a></li>
        <li><a href="#barberos" onClick={() => setMenuOpen(false)}>Barberos</a></li>
        <li><a href="#contacto" onClick={() => setMenuOpen(false)}>Contacto</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
