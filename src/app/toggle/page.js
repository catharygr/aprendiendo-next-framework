"use client";
import React, { useState } from "react";
import styles from "./toggle.module.css";
import { motion } from "framer-motion";

export default function TogglePage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Framer Motion</h1>
      Toggle
    </div>
  );
}
