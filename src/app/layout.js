import "./globals.css";
import styles from "./page.module.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Aprendiendo Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {children}
        <footer className={styles.footer}>
          <p>Página renderizada en: </p>
          {new Date().toLocaleString("es-ES")}
        </footer>
      </body>
    </html>
  );
}
