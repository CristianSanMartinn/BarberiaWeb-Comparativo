import React from "react";
import styles from "./Hero.module.css";

const Hero: React.FC = () => {
  return (
    <section className={styles.hero} id="inicio">
      <div className={styles.overlay}></div>

      <div className={styles.content}>
        <h2 className={styles.subtitle}>— BARBERÍA SAN MARTÍN —</h2>
        <h1 className={styles.title}>REVOLUCIÓN DEL ESTILO</h1>
        <p className={styles.description}>Desde Melipilla, estilo que habla por ti</p>

        <div className={styles.line}></div>

        <button className={styles.button}>Reserva tu cita</button>
      </div>
    </section>
  );
};

export default Hero;
