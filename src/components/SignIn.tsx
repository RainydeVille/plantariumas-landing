import styles from "./SignIn.module.scss";

export default function SignIn() {
  return (
    <form className={styles.form}>
      <input type="email" placeholder="el. paštas" required />
      <input type="password" placeholder="slaptažodis" required />

      <button type="submit">Prisijungti</button>
    </form>
  );
}
