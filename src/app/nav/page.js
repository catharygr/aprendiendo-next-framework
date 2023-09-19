"use client";
import React, { useState, useId } from "react";
import styles from "./nav.module.css";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Nav() {
  const [hoveredNavItem, setHoveredNavItem] = useState(null);
  const id = useId();
  return (
    <nav
      className={styles.container}
      onMouseLeave={() => setHoveredNavItem(null)}
    >
      <ul className={styles.ul}>
        {data.map(({ slug, text, url }) => (
          <li key={slug}>
            {hoveredNavItem === slug && (
              <motion.div
                layoutId={id}
                className={styles.fondo}
                initial={{
                  borderRadius: 10,
                }}
              />
            )}

            <Link
              className={styles.a}
              href={url}
              onMouseEnter={() => setHoveredNavItem(slug)}
            >
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
