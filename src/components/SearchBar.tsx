import React from "react";
import { useState } from "react";

type Props = {};

export default function SearchBar({ search, setSearch }: Props) {
  return (
    <div>
      <input
        type="text"
        className=""
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
    </div>
  );
}
