import { Pokemon } from "@/types/pokemon";
import Image from "next/image";

interface MyPokemonProps {
  pokemon: Pokemon;
}

export default function MyPokemon({ pokemon }: MyPokemonProps) {
  return (
    <div>
      <Image src={pokemon.sprite} alt={pokemon.name} width={60} height={60} />
    </div>
  );
}
