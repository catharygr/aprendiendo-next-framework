import Link from "next/link";
import styles from "./about.module.css";

export default function About({ params }) {
  return (
    <div className={styles.containerAbout}>
      <h1 className={styles.about}>About</h1>
      <Link href="/">{params.id}</Link>
    </div>
  );
}
