import { data } from "@/app/data";

export async function generateMetadata({ params }) {
  const userID = params.userID;
  const usuario = data.find((usuario) => usuario.id === userID);
  return {
    title: `${usuario.name}`,
  };
}
