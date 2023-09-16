/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { data } from "@/app/data";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function BlogPagina({ params }) {
  const blogID = params.blogID;
  const router = useRouter();

  const usuario = data.find((usuario) => usuario.id === blogID);

  // Poner un contador de tiempo para que regrese a la página principal

  useEffect(() => {
    const tiempo = setTimeout(() => {
      router.push("/");
    }, 2000);
    return () => {
      clearTimeout(tiempo);
    };
  }, []);

  return (
    <div>
      <p>{usuario.name}</p>
      <p>Regresaremos en dos segundo</p>
    </div>
  );
}
