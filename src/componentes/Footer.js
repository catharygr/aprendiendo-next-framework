import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Página renderizada en: {new Date().toLocaleString("es-ES")}</p>
    </footer>
  );
}
