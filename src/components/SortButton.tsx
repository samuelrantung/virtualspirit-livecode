import React from "react";

type Props = {};

export default function SortButton({ setSortOrder, sortOrder }: Props) {
  return (
    <div>
      <button
        onClick={() =>
          setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"))
        }
        style={{ marginLeft: "10px", padding: "8px" }}
      >
        Sort: {sortOrder === "asc" ? "A → Z" : "Z → A"}
      </button>
    </div>
  );
}
