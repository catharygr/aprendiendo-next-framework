"use client";
import React, { useState } from "react";
import styles from "./toggle.module.css";
import { motion } from "framer-motion";
import Link from "next/link";

export default function TogglePage() {
  const [esOn, setEsOn] = useState(true);
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Toggle</h1>
      <button onClick={() => setEsOn(!esOn)} className={styles.btn}>
        <motion.span
          initial={false}
          className={styles.pelota}
          animate={{
            x: esOn ? "0%" : "100%",
          }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 40,
          }}
        />
      </button>
      <Link href="/">Inicio</Link>
    </div>
  );
}
