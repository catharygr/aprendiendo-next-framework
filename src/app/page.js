import styles from "./page.module.css";
import Image from "next/image";
import nosotros from "@/app/image/nosotros.jpg";
import Link from "next/link";
import { data } from "./data";

export const metadata = {
  title: "Next.js",
};

export default function Home() {
  return (
    <main className={styles.container}>
      <Image src={nosotros} alt="Fotos de una familia" />

      <h1 className={styles.titulo}>Aprendiendo Next.js</h1>
      <Link className={styles.about} href="/about">
        Sobre mi
      </Link>
      <div>
        <p>Tres enlaces dinámicos</p>
        <div className={styles.linkContainer}>
          {data.map((item) => (
            <Link href={`/blog/${item.id}`} key={item.id}>
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
