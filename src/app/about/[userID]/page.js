import { nuevaData } from "@/app/nuevaData";
// export const metadata = {
//   title: "Sobre mi",
// };

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
    <>
      <p>{usuario.name}</p>
      <p>{usuario.email}</p>
    </>
  );
}
