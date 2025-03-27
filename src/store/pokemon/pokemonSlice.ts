import { SimplePokemon } from "@/app/pokemons/interfaces/simple-pokemon";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface PokemonState {
  pokemon: SimplePokemon[];
}

const initialState: PokemonState = {
  pokemon: [],
};

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    addPokemonsFromLocalStorage: (state, action: PayloadAction<SimplePokemon[]>) => {
      state.pokemon = action.payload;
    },
    addToFavorites: (state, action: PayloadAction<SimplePokemon>) => {
      state.pokemon.push(action.payload);
    },
    removeFromFavorites: (state, action: PayloadAction<SimplePokemon>) => {
      state.pokemon = state.pokemon.filter((pokemon) => pokemon.id !== action.payload.id);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToFavorites, removeFromFavorites } = pokemonSlice.actions;

export default pokemonSlice.reducer;
