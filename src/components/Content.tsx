import styles from "./Content.module.scss";

type ContentProps = {
  title: React.ReactNode;
  text: string;
  image: string;
};

export default function Content({ title, text, image }: ContentProps) {
  return (
    <section className={styles.content}>
      <div className={styles.imageWrapper}>
        <img src={image} alt="" className={styles.image} />
      </div>

      <div className={styles.contentInfo}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.text}>{text}</p>
      </div>
    </section>
  );
}
