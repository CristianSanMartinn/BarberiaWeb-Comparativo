import React from "react";
import Styles from "./Contacto.module.css";
import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contacto: React.FC = () => {
  return (
    <section className={Styles.contactSection} id="contacto">
      <div className={Styles.overlay}></div>

      <div className={Styles.content}>
        <h2 className={Styles.title}>Contáctanos</h2>
        <p className={Styles.description}>
          ¿Tienes dudas o quieres agendar una cita? Puedes comunicarte con nosotros por cualquiera de los siguientes medios.
          Nuestro equipo estará encantado de ayudarte con lo que necesites.
        </p>

        {/* Íconos de contacto */}
        <div className={Styles.contactInfo}>
          <div className={Styles.iconItem}>
            <FaPhoneAlt className={Styles.icon} />
            <h3>Teléfono</h3>
            <p>+56 9 8765 4321</p>
          </div>

          <div className={Styles.iconItem}>
            <FaWhatsapp className={Styles.icon} />
            <h3>WhatsApp</h3>
            <p>+56 9 8765 4321</p>
          </div>

          <div className={Styles.iconItem}>
            <FaEnvelope className={Styles.icon} />
            <h3>Email</h3>
            <p>BarberiContacto@gmail.com</p>
          </div>

          <div className={Styles.iconItem}>
            <FaMapMarkerAlt className={Styles.icon} />
            <h3>Dirección</h3>
            <p>Av. Vicuña Mackenna 1234, Melipilla, Chile</p>
          </div>
        </div>

        {/* Mapa */}
        <div className={Styles.mapContainer}>
          <iframe
            title="Ubicación Barbería"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.896918670574!2d-71.21731994756276!3d-33.685733220678536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x966255eab9c73a4d%3A0x8d92729dff8c5377!2sPlaza%20de%20Armas%20Melipilla!5e0!3m2!1ses!2scl!4v1761584242934!5m2!1ses!2scl"
            allowFullScreen
            loading="lazy"
            className={Styles.mapa}
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
