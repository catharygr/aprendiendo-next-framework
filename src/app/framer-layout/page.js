"use client";
import React, { useState } from "react";
import styles from "./layout.module.css";
import { motion } from "framer-motion";
import Link from "next/link";

export default function LayoutPage() {
  const [esToggled, setEsToggled] = useState(false);
  return (
    <div>
      <motion.div
        layout={true}
        transition={SPRING}
        className={`${styles.container} ${esToggled ? styles.box : ""}`}
      >
        <motion.p layout="position" transition={SPRING}>
          Layout
        </motion.p>
      </motion.div>
      <button onClick={() => setEsToggled(!esToggled)} className={styles.btn}>
        Toggle
      </button>
      <br />
      <Link href="/">Inicio</Link>
    </div>
  );
}

const SPRING = {
  type: "spring",
  stiffness: 200,
  damping: 40,
};
