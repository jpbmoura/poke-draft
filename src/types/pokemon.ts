import { PokemonType } from "@/helpers/constants/type-colors";

export interface Pokemon {
  id: number;
  name: string;
  sprite: string;
  types: PokemonType[];
  stats: Stats[];
  moves: Moves[];
  order: number;
}

interface Stats {
  name: string;
  base_stat: number;
}

export interface Moves {
  accuracy: number;
  flavor: string;
  id: number;
  name: string;
  power: number;
  type: PokemonType;
  effect: string;
}
