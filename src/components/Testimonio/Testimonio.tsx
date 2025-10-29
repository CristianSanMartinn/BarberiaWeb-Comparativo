import React, { useRef, useEffect, useState } from "react";
import styles from "./Testimonio.module.css";
import { TestimoniosClientes } from "../../Data/TestimonioClienteData";

const Testimonio: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-scroll infinito sin rebote
  useEffect(() => {
    const scroll = () => {
      if (scrollRef.current && !isPaused) {
        const { scrollLeft, scrollWidth } = scrollRef.current;
        scrollRef.current.scrollLeft += 1;
        if (scrollLeft >= scrollWidth / 2) {
          scrollRef.current.scrollLeft = 0;
        }
      }
    };
    const interval = setInterval(scroll, 20);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className={styles.testimonioSection} id="testimonios">
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>Lo que dicen nuestros clientes</h2>
        <div className={styles.line}></div>
      </div>

      <div
        className={styles.sliderContainer}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        {/* sombras laterales */}
        <div className={styles.leftShadow}></div>
        <div className={styles.rightShadow}></div>

        <div className={styles.testimonioRow} ref={scrollRef}>
          {[...TestimoniosClientes, ...TestimoniosClientes].map((cliente, index) => (
            <div className={styles.testimonioCard} key={index}>
              <img
                src={cliente.imagen}
                alt={`Foto de ${cliente.nombre}`}
                className={styles.fotoCliente}
              />
              <h3>{cliente.nombre}</h3>
              <div className={styles.estrellas}>{"★".repeat(cliente.estrellas)}</div>
              <p className={styles.texto}>"{cliente.texto}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonio;
