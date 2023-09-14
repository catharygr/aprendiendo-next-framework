import { nuevaData } from "@/app/nuevaData";
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
