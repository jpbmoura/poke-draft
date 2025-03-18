"use client";

import PokemonCard from "@/components/pokemon-card";
import { Button } from "@/components/ui/button";
import { usePokemonStore } from "@/store/pokemon-store";
import { Pokemon } from "@/types/pokemon";
import Link from "next/link";
import React, { useId } from "react";

export default function DraftPage() {
  const [isFetchingPokemon, setIsFetchingPokemon] =
    React.useState<boolean>(false);
  const [draftPokemons, setDraftPokemons] = React.useState<Pokemon[]>([]);
  const { setMyTeam, myTeam } = usePokemonStore();
  const pokemonId = useId();

  function handleAddPokemonToTeam(pokemon: Pokemon) {
    const updatedTeam = [...myTeam, pokemon];
    setMyTeam(updatedTeam);
    fetchDraftPokemons();
  }

  async function fetchDraftPokemons() {
    setIsFetchingPokemon(true);
    const response = await fetch("/api/pokemon/draft");
    const data: Pokemon[] = await response.json();
    setDraftPokemons(data);
    setIsFetchingPokemon(false);
  }

  React.useEffect(() => {
    fetchDraftPokemons();
  }, []);

  if (myTeam.length >= 6) {
    return (
      <div className="container mx-auto py-8 px-4 flex flex-col items-center justify-center h-screen">
        <h1 className="text-3xl font-bold">Finished</h1>
        <p className="text-center mb-6 text-muted-foreground">
          You have already selected 6 Pokémon
        </p>
        <Link href={"/game"}>
          <Button>Voltar</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">Draft</h1>
      <p className="text-center mb-6 text-muted-foreground">
        Select up to 6 Pokémon for your team
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {isFetchingPokemon ? (
          <div>Loading...</div>
        ) : (
          draftPokemons.map((pokemon) => (
            <PokemonCard
              key={`${pokemonId}-${pokemon.order}`}
              pokemon={pokemon}
              onClick={handleAddPokemonToTeam}
            />
          ))
        )}
      </div>
    </div>
  );
}
