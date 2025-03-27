"use client";
import { RootState, useAppSelector } from '@/store/store';
import React from 'react'
import PokemonsGrid from './PokemonsGrid';

const FavoritePokemon = () => {

    const favoritesPokemon = useAppSelector((state: RootState) => state.pokemon.pokemon);

  return (
    <PokemonsGrid pokemons={favoritesPokemon} />
  )
}

export default FavoritePokemon
