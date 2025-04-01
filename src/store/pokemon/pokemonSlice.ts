import { SimplePokemon } from "@/app/pokemons/interfaces/simple-pokemon";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface PokemonState {
  pokemon: SimplePokemon[];
}

const getInitialState = () => {
  const favorites = JSON.parse(localStorage.getItem("favorite-pokemons") ?? "[]");
  return favorites;
};

const initialState: PokemonState = {
  pokemon: [...getInitialState()],
};

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    addToFavorites: (state, action: PayloadAction<SimplePokemon>) => {
      state.pokemon.push(action.payload);
      localStorage.setItem("favorite-pokemons", JSON.stringify(state.pokemon));
    },
    removeFromFavorites: (state, action: PayloadAction<SimplePokemon>) => {
      state.pokemon = state.pokemon.filter((pokemon) => pokemon.id !== action.payload.id);
      localStorage.setItem("favorite-pokemons", JSON.stringify(state.pokemon));
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToFavorites, removeFromFavorites } = pokemonSlice.actions;

export default pokemonSlice.reducer;
