import styles from "@/components/Footer.module.scss";

export default function Footer() {
  return (
    <section className={styles.footer}>
      <div className={styles.footerWrapper}>
        <h3 className={styles.content}>Plantariumas © 2026 Visos teisės saugomos</h3>
      </div>
    </section>
  );
}
