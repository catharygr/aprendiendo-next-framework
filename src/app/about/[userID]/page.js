import { nuevaData } from "@/app/nuevaData";

export async function generateMetadata({ params }) {
  const userID = params.userID;
  const usuario = nuevaData.find((usuario) => usuario.id === userID);
  return {
    title: `Sobre ${usuario.name}`,
  };
}

export default function Usuario({ params }) {
  const userID = params.userID;

  const usuario = nuevaData.find((usuario) => usuario.id === userID);
  return (
    <div>
      <p>{usuario.name}</p>
      <p>{usuario.email}</p>
    </div>
  );
}
