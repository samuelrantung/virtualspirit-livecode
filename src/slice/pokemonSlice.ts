import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface Pokemon {
  name: string;
  url: string;
}

interface PokemonState {
  pokemons: Pokemon[];
  loading: boolean;
  error: string | null;
}

const initialState: PokemonState = {
  pokemons: [],
  loading: false,
  error: null,
};

export const fetchPokemons = createAsyncThunk<Pokemon[]>(
  "pokemon/fetchPokemons",
  async () => {
    const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=50");
    return res.data.results;
  }
);

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemons.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPokemons.fulfilled, (state, action) => {
        state.loading = false;
        state.pokemons = action.payload;
      })
      .addCase(fetchPokemons.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch pokemons";
      });
  },
});

export default pokemonSlice.reducer;
