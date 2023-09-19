"use client";
import React from "react";
import styles from "./nav.module.css";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Nav() {
  return (
    <div className={styles.container}>
      <ul className={styles.ul}>
        {data.map((item) => (
          <li key={item.slug}>
            <Link className={styles.a} href={item.url}>
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

const data = [
  {
    slug: "home",
    text: "Home",
    url: "/",
  },
  {
    slug: "about",
    text: "About",
    url: "/about",
  },
  {
    slug: "toggle",
    text: "Toggle",
    url: "/toggle",
  },
];
