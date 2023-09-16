/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { data } from "@/app/data";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function BlogPagina({ params }) {
  const blogID = params.blogID;
  const router = useRouter();

  const usuario = data.find((usuario) => usuario.id === blogID);

  useEffect(() => {
    const tiempo = setTimeout(() => {
      router.push("/");
    }, 5000);
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
