export interface Pokemon {
  id: number;
  moves: PokemonMoves[];
  name: string;
  order: number;
  sprites: Sprites;
  types: Types[];
  stats: Stats[];
}

export interface PokemonMoves {
  move: PokemonMove;
}

export interface PokemonMove {
  name: string;
  url: string;
}

export interface Sprites {
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
}

export interface Types {
  slot: number;
  type: Type;
}

export interface Type {
  name: string;
  url: string;
}

export interface Stats {
  base_stat: number;
  effort: number;
  stat: Stat;
}

export interface Stat {
  name: string;
  url: string;
}
