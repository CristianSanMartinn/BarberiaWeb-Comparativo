import React from "react";
import styles from "./About.module.css";

const About: React.FC = () => {
  return (
    <section className={styles.aboutSection} id="nosotros">
      <div className={styles.aboutContainer}>
        {/* TEXTO */}
        <div className={styles.aboutText}>
          <h2 className={styles.title}>¿Quiénes somos?</h2>
          <div className={styles.line}></div>
          <p className={styles.description}>
            En <span>Barbería San Martín</span>, nos especializamos en ofrecer una experiencia única
            que combina tradición, estilo y precisión. Nuestro equipo de barberos
            profesionales domina tanto las técnicas clásicas como las tendencias
            modernas, garantizando resultados impecables en cada visita.
          </p>
          <p className={styles.description}>
            Más que una barbería, somos un espacio de confianza y estilo donde cada
            cliente recibe atención personalizada en un ambiente cálido y relajado.
            Porque entendemos que <strong>verte bien</strong> también es <strong>sentirte bien</strong>.
          </p>
        </div>

        {/* IMAGEN */}
        <div className={styles.aboutImage}>
          <img src="/imagen/nosotros.jpg" alt="Equipo de barberos" />
          <div className={styles.overlay}></div>
        </div>
      </div>
    </section>
  );
};

export default About;
