import React from "react";
import Styles from "./UsuarioPerfil.module.css";
import { barberos } from "../../Data/ImagenesGaleria";

const UsuarioPerfil: React.FC = () => {
  return (
    <section className={Styles.galeria} id="barberos">
      <h2 className={Styles.titulo}>Nuestros Barberos y Sus Trabajos</h2>

      {barberos.map((barbero, index) => (
        <div
          key={barbero.id}
          className={`${Styles.barberoContainer} ${
            index % 2 === 1 ? Styles.reverso : ""
          }`}
        >
          {/* Galería de imágenes 2x2 */}
          <div className={Styles.cortesGrid}>
            {barbero.imagenes.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Corte ${i + 1} de ${barbero.nombre}`}
                className={Styles.corteImg}
              />
            ))}
          </div>

          {/* Información del barbero */}
          <div className={Styles.info}>
            <img
              src={barbero.fotoPerfil}
              alt={barbero.nombre}
              className={Styles.fotoPerfil}
            />
            <div className={Styles.linea}></div>
            <h3>{barbero.nombre}</h3>
            <div className={Styles.linea}></div>
            <p>{barbero.descripcion}</p>
            <button className={Styles.btn}>Ir a reservar</button>
          </div>
        </div>
      ))}

      {/* Aquí irá el carrusel próximamente */}
    </section>
  );
};

export default UsuarioPerfil;
