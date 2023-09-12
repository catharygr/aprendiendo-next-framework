import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.container}>
      <h1 className={styles.titulo}>Aprendiendo Next.js</h1>
    </main>
  );
}
