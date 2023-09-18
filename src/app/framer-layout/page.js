"use client";
import React, { useState } from "react";
import styles from "./layout.module.css";
import { motion } from "framer-motion";

export default function LayoutPage() {
  const [esToggled, setEsToggled] = useState(false);
  return (
    <div className={styles.container}>
      <motion.div
        layout={true}
        transition={SPRING}
        className={`container ${esToggled ? styles.box : ""}`}
      >
        <motion.p layout="position" transition={SPRING}>
          Layout
        </motion.p>
      </motion.div>
      <button onClick={() => setEsToggled(!esToggled)} className={styles.btn}>
        Toggle
      </button>
    </div>
  );
}

const SPRING = {
  type: "spring",
  stiffness: 200,
  damping: 40,
};
