import styles from "./Registration.module.scss";

export default function Registration() {
  return (
    <form className={styles.form}>
      <input type="email" placeholder="el. paštas" required />
      <input type="password" placeholder="slaptažodis" required />

      <button type="submit">Sukurti paskyrą</button>
    </form>
  );
}
