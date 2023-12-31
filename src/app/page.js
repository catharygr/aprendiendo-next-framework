import styles from "./page.module.css";
import Image from "next/image";
import nosotros from "@/app/image/nosotros.jpg";
import Link from "next/link";
import { data } from "./data";

export default function Home() {
  return (
    <main className={styles.container}>
      <Image src={nosotros} alt="Fotos de una familia" />

      <h1 className={styles.titulo}>Aprendiendo Next.js</h1>
      <Link className={styles.about} href="/about">
        Sobre mi
      </Link>
      <div>
        <p>Cuatros enlaces dinámicos</p>
        <div className={styles.linkContainer}>
          {data.map((item) => (
            <Link href={`/blog/${item.id}`} key={item.id}>
              {item.name}
            </Link>
          ))}
        </div>
        <br />
        <Link className={styles.about} href={"/latex"}>
          Latex
        </Link>
        <br />
        <Link className={styles.about} href={"/framer"}>
          Framer Motion
        </Link>
        <br />
        <Link className={styles.about} href={"/toggle"}>
          Toggle
        </Link>
        <br />
        <Link className={styles.about} href={"/emoji"}>
          Emoji
        </Link>
        <br />
        <Link className={styles.about} href={"/framer-layout"}>
          Framer Layout
        </Link>
        <br />
        <Link className={styles.about} href={"/toggle-layout"}>
          Toggle Layout
        </Link>
        <br />
        <Link className={styles.about} href={"/nav"}>
          Nav
        </Link>
      </div>
    </main>
  );
}
