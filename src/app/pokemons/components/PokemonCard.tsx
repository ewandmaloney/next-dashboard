"use client";
import Link from "next/link";
import { SimplePokemon } from "../interfaces/simple-pokemon";
import Image from "next/image";
import { IoHeart, IoHeartOutline } from "react-icons/io5";
import { RootState, useAppDispatch, useAppSelector } from "@/store/store";
import { addToFavorites, removeFromFavorites } from "@/store/pokemon/pokemonSlice";

interface PokemonCardProps {
  pokemon: SimplePokemon;
}

const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  const { id, name } = pokemon;
  const favoritesPokemon = useAppSelector((state: RootState) => state.pokemon.pokemon);
  const dispatch = useAppDispatch();

  const isFavorite = favoritesPokemon.some((favorite) => favorite.id === id);

  return (
    <div className="mx-auto right-0 mt-2 w-60">
      <div className="bg-white rounded overflow-hidden shadow-lg">
        <div className="text-center p-6 bg-gray-800 ">
          <Image
            aria-hidden="true"
            role="img"
            className="h-24 w-24 text-white rounded-full mx-auto"
            width="100"
            height="100"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
            alt={""}
            priority={false}
          />
          <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">{name}</p>
          <div className="mt-5">
            <Link
              href={`/dashboard/pokemon/${name}`}
              className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
            >
              Mas informacion
            </Link>
          </div>
        </div>
        <div className="">
          <div className="px-4 py-2 hover:bg-gray-100 flex items-center">
            <div className="text-red-600 cursor-pointer">
              {isFavorite ? (
                <IoHeart onClick={() => dispatch(removeFromFavorites(pokemon))} className="text-2xl" />
              ) : (
                <IoHeartOutline onClick={() => dispatch(addToFavorites(pokemon))} className="text-2xl" />
              )}
            </div>
            <div className="pl-3">
              {isFavorite ? (
                <p className="text-sm font-medium text-gray-800 leading-none">Es favorito</p>
              ) : (
                <p className="text-sm font-medium text-gray-800 leading-none">No es favorito</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
