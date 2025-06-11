import React, { useEffect } from "react";
import PokemonCard, { type Pokemon } from "./PokemonCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemons } from "../slice/pokemonSlice";
import type { RootState } from "@reduxjs/toolkit/query";

type Props = {
  pokemons: Pokemon[];
};

export default function PokemonList({ pokemons }: Props) {
  return (
    <div>
      {pokemons.map((pokemon) => {
        return <PokemonCard data={pokemon} />;
      })}
    </div>
  );
}
