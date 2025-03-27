import PokemonsGrid from "@/app/pokemons/components/PokemonsGrid";
import { PokemonsResponse } from "@/app/pokemons/interfaces/pokemons-response";
import { SinglePokemons } from "@/app/pokemons/interfaces/single-pokemons";


export const metadata = {
 title: 'Favoritos',
 description: 'Mis pokemon favoritos',
};

export default async function PokemonPage() {

  return (
    <div className="flex flex-col h-screen overflow-y-scroll">
      <span className="my-2 text-5xl">
        Listado de Pokemons <small className="text-blue-600">global state</small>
      </span>
      <PokemonsGrid pokemons={[]} />
    </div>
  );
}
