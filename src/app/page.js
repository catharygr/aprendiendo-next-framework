import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.container}>
      <h1 className={styles.titulo}>Aprendiendo Next.js</h1>
      <Link className={styles.about} href="/about">
        Sobre mi
      </Link>
    </main>
  );
}
