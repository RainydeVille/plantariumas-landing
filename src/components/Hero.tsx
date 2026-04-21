"use client";

import { useEffect, useState } from "react";
import styles from "./Hero.module.scss";

//image array
const images = ["/images/hero1.jpg", "/images/hero2.jpg", "/images/hero3.jpg"];

export default function Hero() {
  const [index, setIndex] = useState(0);

  //image timer
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 120000); //2 minutes

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.hero} style={{ backgroundImage: `url(${images[index]})` }}>
      <div className={styles.overlay}>
        <div className={styles.heroContent}>
          <h2 className={styles.heroTitle}>Rūpintis savo augalais dar niekada nebuvo taip lengva 💚</h2>
        </div>
      </div>
    </section>
  );
}
