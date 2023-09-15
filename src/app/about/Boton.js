"use client";
import styles from "./about.module.css";
import React, { useState } from "react";

export default function Boton() {
  const [color, setColor] = useState("red");
  return (
    <button className={styles.btnAbout} onClick={() => setColor("yelow")}>
      {color}
    </button>
  );
}
