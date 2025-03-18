"use client";

import { usePokemonStore } from "@/store/pokemon-store";
import MyPokemon from "./my-pokemon";
import { useId } from "react";

export default function MyTeam() {
  const { myTeam } = usePokemonStore();
  const pokemonId = useId();

  return (
    <div className="flex flex-col fixed bottom-0 left-1/2 bg-zinc-100 p-4 rounded-t-2xl w-1/3 transform -translate-x-1/2">
      <span className="font-semibold text-center">Team</span>
      <div className="gap-4 flex flex-row items-center">
        {myTeam.map((pokemon) => (
          <MyPokemon key={`${pokemonId}-${pokemon.order}`} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
}
