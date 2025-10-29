import React from "react";
import styles from "./services.module.css";
import { servicio } from "../../Data/ServiciosImagenes";

const Servicios: React.FC = () => {
  return (
    <section className={styles.serviciosSection} id="servicios">
      <div className={styles.tituloServicios}>
        <h2>Nuestros Servicios</h2>
        <p className={styles.subtitulo}>
          Conoce los cortes, estilos y cuidados que ofrecemos para realzar tu imagen.
        </p>
      </div>

      <div className={styles.serviciosGrid}>
        {servicio.map((item, index) => (
          <div key={index} className={styles.servicioCard}>
            <div className={styles.icono}>
              <img src={item.icon} alt={item.titulo} className={styles.iconoImagen} />
            </div>
            <h3>{item.titulo}</h3>
            <p>{item.texto}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Servicios;
