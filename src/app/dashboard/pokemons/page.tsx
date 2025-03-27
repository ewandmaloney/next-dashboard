import PokemonsGrid from "@/app/pokemons/components/PokemonsGrid";
import { PokemonsResponse } from "@/app/pokemons/interfaces/pokemons-response";
import { SimplePokemon } from "@/app/pokemons/interfaces/simple-pokemon";

const getPokemons = async (
  limit = 20,
  offset = 0
): Promise<SimplePokemon[]> => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  );
  const data: PokemonsResponse = await response.json();
  const pokemons = data.results.map((pokemon) => ({
    id: pokemon.url.split("/").at(-2)!,
    name: pokemon.name,
  }));

  return pokemons;
};

export default async function PokemonPage() {
  const pokemons = await getPokemons(151);

  return (
    <div className="flex flex-col h-screen overflow-y-scroll">
      <span className="my-2 text-5xl">
        Listado de Pokemons <small className="text-blue-600">estatico</small>
      </span>
      <PokemonsGrid pokemons={pokemons} />
    </div>
  );
}
