import { SinglePokemons } from "../interfaces/single-pokemons";
import PokemonCard from "./PokemonCard";

interface PokemonGridProps {
  pokemons: SinglePokemons[];
}

const PokemonsGrid = ({ pokemons }: PokemonGridProps) => {
  return (
    <div className="flex flex-wrap gap-10 items-center justify-center">
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default PokemonsGrid;
