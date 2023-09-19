"use client";
import React from "react";
import styles from "./nav.module.css";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Nav() {
  const [hoveredNavItem, setHoveredNavItem] = React.useState(null);
  return (
    <nav
      className={styles.container}
      onMouseLeave={() => setHoveredNavItem(null)}
    >
      <ul className={styles.ul}>
        {data.map(({ slug, text, url }) => (
          <li key={slug}>
            {hoveredNavItem === slug && (
              <motion.div layoutId="jajaja" className={styles.fondo} />
            )}

            <Link className={styles.a} href={url}>
              {text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
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
