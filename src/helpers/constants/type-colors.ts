export type PokemonType =
  | "fire"
  | "water"
  | "grass"
  | "electric"
  | "psychic"
  | "normal"
  | "fighting"
  | "flying"
  | "poison"
  | "ground"
  | "rock"
  | "bug"
  | "ghost"
  | "steel"
  | "ice"
  | "dragon"
  | "dark"
  | "fairy";

export const typeColors: Record<PokemonType, string> = {
  fire: "bg-red-500",
  water: "bg-blue-500",
  grass: "bg-green-500",
  electric: "bg-yellow-500",
  psychic: "bg-pink-500",
  normal: "bg-gray-400",
  fighting: "bg-orange-700",
  flying: "bg-indigo-300",
  poison: "bg-purple-500",
  ground: "bg-amber-600",
  rock: "bg-stone-500",
  bug: "bg-lime-500",
  ghost: "bg-violet-700",
  steel: "bg-slate-400",
  ice: "bg-cyan-300",
  dragon: "bg-indigo-600",
  dark: "bg-stone-700",
  fairy: "bg-pink-300",
};

export const typeColorsMoves: Record<PokemonType, string> = {
  fire: "bg-red-500/20",
  water: "bg-blue-500/20",
  grass: "bg-green-500/20",
  electric: "bg-yellow-500/20",
  psychic: "bg-pink-500/20",
  normal: "bg-gray-400/20",
  fighting: "bg-orange-700/20",
  flying: "bg-indigo-300/20",
  poison: "bg-purple-500/20",
  ground: "bg-amber-600/20",
  rock: "bg-stone-500/20",
  bug: "bg-lime-500/20",
  ghost: "bg-violet-700/20",
  steel: "bg-slate-400/20",
  ice: "bg-cyan-300/20",
  dragon: "bg-indigo-600/20",
  dark: "bg-stone-700/20",
  fairy: "bg-pink-300/20",
};
