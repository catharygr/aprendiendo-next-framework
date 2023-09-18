"use client";
import React from "react";
import styles from "./framer.module.css";

export default function FramerPage() {
  const [esFramer, setEsFramer] = React.useState(false);

  return (
    <div className={styles.container}>
      <h1>Framer Motion</h1>
      <div className={styles.pelota} />
      <button className={styles.btn} onClick={() => setEsFramer(!esFramer)}>
        Toggle
      </button>
    </div>
  );
}
