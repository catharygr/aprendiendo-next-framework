"use client";
import React from "react";
import styles from "./framer.module.css";
import { motion } from "framer-motion";
import Link from "next/link";

export default function FramerPage() {
  const [esFramer, setEsFramer] = React.useState(true);

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Framer Motion</h1>
      <motion.div
        className={styles.pelota}
        initial={false}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
        animate={{
          scale: esFramer ? 2 : 1.5,
          y: esFramer ? -60 : 30,
        }}
      />
      <button className={styles.btn} onClick={() => setEsFramer(!esFramer)}>
        Toggle
      </button>
      <Link href="/">Inicio</Link>
    </div>
  );
}
