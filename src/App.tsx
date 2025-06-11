import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import PokemonList from "./components/PokemonList";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemons } from "./slice/pokemonSlice";

function bubbleSort(arr: { name: string }, order: "asc" | "desc") {
  const sortedArray = [...arr];
  const len = sortedArray.length;

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      const a = sortedArray[j].name.toLowerCase();
      const b = sortedArray[j + 1].name.toLowerCase();

      const shouldSwap =
        (order === "asc" && a > b) || (order === "desc" && a < b);

      if (shouldSwap) {
        const temp = sortedArray[j];
        sortedArray[j] = sortedArray[j + 1];
        sortedArray[j + 1] = temp;
      }
    }
  }
  return sortedArray;
}

function App() {
  const dispatch = useDispatch();
  const { pokemons } = useSelector((state: RootState) => state.pokemon);
  useEffect(() => {
    dispatch(fetchPokemons());
  }, [dispatch]);

  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(search.toLowerCase())
  );

  const sorted = bubbleSort(filteredPokemons, sortOrder);

  return (
    <>
      <div>
        <SearchBar search={search} setSearch={setSearch} />
        <button
          onClick={() =>
            setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"))
          }
          style={{ marginLeft: "10px", padding: "8px" }}
        >
          Sort: {sortOrder === "asc" ? "A → Z" : "Z → A"}
        </button>
        <PokemonList pokemons={sorted} />
      </div>
    </>
  );
}

export default App;
