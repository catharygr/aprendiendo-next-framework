"use client";
import React from "react";
import styles from "./framer.module.css";
import { motion } from "framer-motion";

export default function FramerPage() {
  const [esFramer, setEsFramer] = React.useState(true);

  return (
    <div className={styles.container}>
      <h1>Framer Motion</h1>
      <motion.div
        className={styles.pelota}
        animate={{
          scale: 2,
          y: -50,
        }}
      />
      <button className={styles.btn} onClick={() => setEsFramer(!esFramer)}>
        Toggle
      </button>
    </div>
  );
}
