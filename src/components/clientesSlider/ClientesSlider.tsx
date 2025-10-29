import React from "react";
import styles from "./ClientesSlider.module.css";
import { clientes } from "../../Data/ClientesSliderData";

const ClientesSlider: React.FC = () => {
  return (
    <section className={styles.sliderContainer}>
      <h2 className={styles.title}>Nuestros Clientes</h2>

      <div className={styles.slider}>
        <div className={styles.sliderTrack}>
          {/* Duplicamos las imágenes para el bucle infinito */}
          {clientes.concat(clientes).map((cliente, index) => (
            <div key={index} className={styles.slide}>
              <img
                src={cliente.imagen}
                alt={`Cliente ${cliente.id}`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientesSlider;
