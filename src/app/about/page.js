import Link from "next/link";
import styles from "./about.module.css";

export default function About() {
  return (
    <div className={styles.containerAbout}>
      <h1 className={styles.about}>About</h1>
      <Link href="/">Inicio</Link>
    </div>
  );
}
