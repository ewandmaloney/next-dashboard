export default async function PokemonPage(props: any) {
  const { id } = await props.params;

  return (
    <div>
      <h1>Pokemon: {id} </h1>
    </div>
  );
}
