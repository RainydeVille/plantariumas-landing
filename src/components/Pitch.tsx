import styles from "./Pitch.module.scss";

type PitchProps = {
  title: React.ReactNode;
  text: string;
  image: string;
  reverse?: boolean;
};

export default function Pitch({ title, text, image, reverse }: PitchProps) {
  return (
    <section className={`${styles.pitch} ${reverse ? styles.reverse : ""}`}>
      <div className={styles.imageWrapper}>
        <img src={image} alt="" className={styles.image} />
      </div>

      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.text}>{text}</p>
      </div>
    </section>
  );
}
