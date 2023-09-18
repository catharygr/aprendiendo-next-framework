"use client";
import React, { useState, useRef } from "react";
import styles from "./emoji.module.css";
import { motion } from "framer-motion";

export default function EmojiPage() {
  const [esMostrado, setEsMostrado] = React.useState(false);

  const wrapperRef = React.useRef();

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;

      setEsMostrado(entry.isIntersecting);
    });

    observer.observe(wrapperRef.current);
  }, []);

  const translateX = esMostrado ? "0%" : "100%";
  return (
    <div ref={wrapperRef} className={styles.container}>
      <h1>Emoji</h1>
      <p>
        Los emojis son pequeñas representaciones gráficas que se utilizan en
        mensajes de texto, redes sociales y comunicación digital para expresar
        emociones, ideas y conceptos de manera visual. Aquí hay algunos puntos
        clave sobre su uso
      </p>
      <p>
        Expresión Emocional: Los emojis se utilizan principalmente para
        transmitir emociones. Por ejemplo, un emoji sonriente indica felicidad,
        mientras que un emoji triste refleja tristeza.
      </p>
      <p>
        Claridad y Contexto: Los emojis pueden ayudar a aclarar el tono y el
        contexto de un mensaje. Por ejemplo, un emoji de guiño puede indicar que
        una declaración es una broma.
      </p>
      <p>
        Comunicación Universal: Los emojis son comprensibles en todo el mundo,
        ya que su significado es bastante consistente.
      </p>
      <p>
        Esto facilita la comunicación entre personas que hablan diferentes
        idiomas
      </p>
      <p>
        Personalización: Puedes personalizar tu comunicación eligiendo emojis
        que reflejen tu estilo y personalidad.
      </p>
      <p>
        Por ejemplo, algunos usuarios prefieren usar emojis divertidos o
        creativos, mientras que otros pueden ser más formales.{" "}
      </p>
      <p>
        Evitar Malentendidos: En ocasiones, los mensajes de texto pueden ser
        ambiguos. Los emojis pueden ayudar a evitar malentendidos al agregar
        contexto emocional.
      </p>
      <p>
        Marketing y Comunicación de Marca: Las empresas y marcas también
        utilizan emojis en sus comunicaciones para conectarse con su audiencia y
        transmitir mensajes de manera efectiva.
      </p>
      <p>
        Abuso o Exceso: Aunque los emojis pueden ser útiles, su uso excesivo o
        inapropiado puede restar seriedad a la comunicación.
      </p>
      <p>Es importante encontrar un equilibrio. </p>
      <p>
        Evolución Continua: La selección de emojis sigue expandiéndose con el
        tiempo, y nuevas adiciones se hacen regularmente para reflejar la
        diversidad cultural y emocional.
      </p>
      <p>
        En resumen, los emojis son una forma popular y efectiva de enriquecer la
        comunicación digital al agregar una dimensión emocional y contextual a
        los mensajes de texto y las interacciones en línea.
      </p>

      <motion.div
        className={styles.caracter}
        transition={{
          type: "spring",
          stiffness: esMostrado ? 300 : 600,
          damping: esMostrado ? 70 : 40,
          restDelta: 0.01,
        }}
        animate={{
          x: translateX,
        }}
      >
        👻
      </motion.div>
    </div>
  );
}
