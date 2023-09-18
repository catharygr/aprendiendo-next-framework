"use client";
import React, { useState } from "react";
import styles from "./toggle.module.css";
import { motion } from "framer-motion";

export default function TogglePage() {
  const [esOn, setEsOn] = useState(false);
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Toggle</h1>
      <button className={styles.btn}>
        <motion.span className={styles.pelota} />
      </button>
    </div>
  );
}
