import { PokemonType } from "@/helpers/constants/type-colors";
import { MoveApi } from "@/types/move-api";
import { Moves, Pokemon } from "@/types/pokemon";
import { PokemonMoves, Stats, Types } from "@/types/pokemon-api";

export async function GET() {
  const pokemonRange = 151;
  const limit = 5;
  const pokemons: Pokemon[] = [];

  const movesLimit = 4;

  const handleMoves = async (moves: PokemonMoves[]) => {
    const movesData: MoveApi[] = await Promise.all(
      moves.map(async (move) => {
        const response = await fetch(move.move.url);
        return await response.json();
      })
    );

    const movesPayload: Moves[] = movesData.map((move) => {
      return {
        accuracy: move.accuracy,
        flavor: move.flavor_text_entries[0].flavor_text,
        id: move.id,
        name: move.name,
        power: move.power,
        type: move.type.name as PokemonType,
        effect: move.effect_entries[0].short_effect,
      };
    });

    return movesPayload;
  };

  do {
    const randomPokemonId = Math.floor(Math.random() * pokemonRange) + 1;
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${randomPokemonId}`
    );
    const data = await response.json();

    const pokemonPayload = {
      id: data.id,
      name: data.name,
      sprite: data.sprites.front_default,
      types: data.types.map((type: Types) => type.type.name),
      stats: data.stats.map((stat: Stats) => ({
        name: stat.stat.name,
        base_stat: stat.base_stat,
      })),
      //random moves from the pokemon moves
      moves: await handleMoves(data.moves.slice(0, movesLimit)),
      order: data.order,
    };

    pokemons.push(pokemonPayload);
  } while (pokemons.length < limit);

  return Response.json(pokemons);
}
