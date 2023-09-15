import Link from "next/link";
import styles from "./about.module.css";
import { nuevaData } from "@/app/nuevaData";
import Boton from "./Boton";

export async function generateMetadata() {
  return {
    title: "Sobre",
  };
}

export default function About() {
  return (
    <div className={styles.containerAbout}>
      <h1 className={styles.about}>About</h1>
      <Link href="/">Inicio</Link>
      <div className={styles.linkAbout}>
        {nuevaData.map((item) => (
          <Link href={`/about/${item.id}`} key={item.id}>
            {item.name}
          </Link>
        ))}
      </div>
      <p>
        Color del estado es: <Boton />
      </p>
    </div>
  );
}
