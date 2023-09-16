export default function PaginaDinamica() {
  async function generateMetadata({ params }) {
    const blogID = params.blogID;

    const usuario = data.find((usuario) => usuario.id === blogID);
    return {
      title: usuario.name,
    };
  }
  return (
    <>
      <p>Página Dinámica</p>
    </>
  );
}
