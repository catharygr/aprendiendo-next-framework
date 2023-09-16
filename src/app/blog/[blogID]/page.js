/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { data } from "@/app/data";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function BlogPagina({ params }) {
  const [contador, setContador] = useState(0);
  const blogID = params.blogID;
  const router = useRouter();

  const usuario = data.find((usuario) => usuario.id === blogID);

  // Poner un contador de tiempo antes que regrese a la página principal y prsentarlo en la página

  useEffect(() => {
    const tiempo = setInterval(() => {
      setContador((prevContador) => prevContador - 1);
    }, 5000);

    if (contador === 0) {
      clearInterval(tiempo);
      router.push("/");
    }
    return () => {
      clearInterval(tiempo);
    };
  }, []);

  return (
    <div>
      <p>{usuario.name}</p>
      <p>
        Regresaremos en:{" "}
        {contador === 0
          ? "al instante"
          : `${contador} segundo${contador !== 1 ? "s" : ""}`}
      </p>
    </div>
  );
}
