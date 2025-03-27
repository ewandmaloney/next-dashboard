import FavoritePokemon from "@/app/pokemons/components/FavoritePokemon";

export const metadata = {
  title: "Favoritos",
  description: "Mis pokemon favoritos",
};

export default async function PokemonPage() {
  return (
    <div className="flex flex-col h-screen overflow-y-scroll">
      <span className="my-2 text-5xl">
        Listado de Pokemons <small className="text-blue-600">global state</small>
      </span>
      <FavoritePokemon />
    </div>
  );
}
