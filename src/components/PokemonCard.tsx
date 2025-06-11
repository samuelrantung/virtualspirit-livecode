import React from "react";

type Props = {
  data: Pokemon;
};

export type Pokemon = {};

export default function PokemonCard({ data }: Props) {
  return (
    <div>
      <p>{data.name}</p>
    </div>
  );
}
