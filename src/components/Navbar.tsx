import styles from "./Navbar.module.scss";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <h1 id="logoFont" className={styles.logo}>
          <Link href="/">Plantariumas</Link>
        </h1>

        <ul className={styles.navLeft}>
          <li>
            <Link href="/apie">Apie</Link>
          </li>
          <li>
            <Link href="/duk">DUK</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
