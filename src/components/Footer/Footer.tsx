import Styles from "./Footer.module.css";
import logo from "../../../public/imagen/logon-barberia.png"; 

const Footer = () => {
  return (
    <footer className={Styles.footer}>
      <div className={Styles["footer-container"]}>
        
        {/* Columna 1: Logo y descripción */}
        <div className={Styles["footer-logo"]}>
          <div className={Styles["footer-logo-header"]}>
            <img 
              src={logo} 
              alt="Logo Barbería San Martín" 
              className={Styles["footer-logo-img"]} 
            />
            <h2>Barbería San Martín</h2>
          </div>

          <p>
            Cortes clásicos y modernos con estilo y dedicación.  
            Tu imagen en buenas manos.
          </p>

          <div className={Styles["footer-social"]}>
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-whatsapp"></i></a>
          </div>
        </div>

        {/* Columna 2: Enlaces */}
        <div className={Styles["footer-links"]}>
          <h3>Nuestra Barbería</h3>
          <ul>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#servicios">Servicios</a></li>
            <li><a href="#barberos">Barberos</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </div>

        {/* Columna 3: Contacto */}
        <div className={Styles["footer-contact"]}>
          <h3>Contáctanos</h3>
          <p>📍 Melipilla, Chile</p>
          <p>📞 +56 9 1234 5678</p>
          <p>✉️ contacto@barberiasanmartin.cl</p>
        </div>
      </div>

      <div className={Styles["footer-bottom"]}>
        <p>© 2025 Barbería San Martín. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
