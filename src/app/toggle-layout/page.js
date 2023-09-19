"use client";
import React, { useState } from "react";
import styles from "./toggle.module.css";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ToggleLayout() {
  const [esOn, setEsOn] = useState(false);
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Toggle</h1>
      <button
        style={{ justifyContent: esOn ? "flex-end" : "flex-start" }}
        onClick={() => setEsOn(!esOn)}
        className={styles.btn}
      >
        <motion.span
          initial={false}
          className={styles.pelota}
          layout={true}
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
