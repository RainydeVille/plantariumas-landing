import styles from "./Registration.module.scss";

export default function Registration() {
  return (
    <div className={styles.formWrapper}>
      <form className={styles.form}>
        <h2 className={styles.title}>Smagu, kad nusprendėte prie mūsų prisijungti! 🪴</h2>
        <label className={styles.label} htmlFor="email">
          El. paštas:
        </label>
        <input className={styles.input} id="email" name="email" type="email" placeholder="el. paštas" required />
        <label className={styles.label} htmlFor="password">
          Slaptažodis:
        </label>
        <input className={styles.input} id="password" name="password" type="password" placeholder="slaptažodis" required />

        <button className={styles.btn} type="submit">
          Sukurti paskyrą
        </button>
      </form>
    </div>
  );
}
