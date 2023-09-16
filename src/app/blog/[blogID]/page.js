import { data } from "@/app/data";

export async function generateMetadata({ params }) {
  const blogID = params.blogID;

  const usuario = data.find((usuario) => usuario.id === blogID);
  return {
    title: usuario.name,
  };
}

export default function BlogPagina({ params }) {
  const blogID = params.blogID;

  const usuario = data.find((usuario) => usuario.id === blogID);

  return (
    <>
      <p>{usuario.name}</p>
    </>
  );
}
