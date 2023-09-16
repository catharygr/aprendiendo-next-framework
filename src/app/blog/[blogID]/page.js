/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { data } from "@/app/data";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function BlogPagina({ params }) {
  const blogID = params.blogID;
  const router = useRouter();

  const usuario = data.find((usuario) => usuario.id === blogID);

  const [contador, setContador] = useState(5);
  useEffect(() => {
    const interval = setInterval(() => {
      setContador((prevContador) => {
        if (prevContador === 1) {
          clearInterval(interval);
          router.push("/");
        }
        return prevContador - 1;
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <p>{usuario.name}</p>
      <p>
        Regresaremos en {contador} segundo{contador !== 1 ? "s" : ""}
      </p>
    </div>
  );
}
