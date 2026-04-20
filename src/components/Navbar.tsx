import styles from "./Navbar.module.scss";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.navLeft}>
          <li>
            <Link href="/">Pagrindinis</Link>
          </li>
          <li>
            <Link href="/apie">Apie</Link>
          </li>
          <li>
            <Link href="/duk">DUK</Link>
          </li>
        </ul>

        <h1 id="logoFont" className={styles.logo}>
          Plantariumas
        </h1>

        <ul className={styles.navRight}>
          <li>
            <Link href="/login" className={styles.iconButton}>
              <span className="material-symbols-outlined">person</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
