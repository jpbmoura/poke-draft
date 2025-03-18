import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { typeColors, typeColorsMoves } from "@/helpers/constants/type-colors";
import { Progress } from "../ui/progress";
import {
  capitalizeFirstLetter,
  formatMoveName,
} from "@/helpers/functions/text-formarters";
import { Pokemon } from "@/types/pokemon";

interface PokemonCardProps {
  pokemon: Pokemon;
  onClick: (pokemon: Pokemon) => void;
}

export default function PokemonCard({ pokemon, onClick }: PokemonCardProps) {
  return (
    <Card
      className={`overflow-hidden transition-all hover:shadow-xl`}
      onClick={() => onClick(pokemon)}
    >
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl">
            {capitalizeFirstLetter(pokemon.name)}
          </CardTitle>
          <div className="text-sm text-muted-foreground">#{pokemon.id}</div>
        </div>

        <div className="flex gap-1 mt-1">
          {pokemon.types.map((type) => (
            <Badge key={type} className={`${typeColors[type]} text-white`}>
              {type}
            </Badge>
          ))}
        </div>
      </CardHeader>

      <div className="flex justify-center p-2 bg-muted/30">
        <Image
          src={pokemon.sprite || "/placeholder.svg"}
          alt={pokemon.name}
          width={100}
          height={100}
          className="object-contain"
        />
      </div>

      <CardContent className="">
        <div className="mb-3">
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium">HP</span>
            <span className="text-sm">
              {pokemon.stats[0].base_stat}/{pokemon.stats[0].base_stat}
            </span>
          </div>
          <Progress
            value={
              (pokemon.stats[0].base_stat / pokemon.stats[0].base_stat) * 100
            }
            className="h-2"
          />
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-2">Moves</h3>
          <div className="space-y-2">
            {pokemon.moves.map((move) => (
              <div
                key={move.id}
                className="flex justify-between items-center text-sm"
              >
                <span>{formatMoveName(move.name)}</span>
                <div className="flex items-center gap-2">
                  <Badge
                    key={move.type}
                    className={`${typeColorsMoves[move.type]}  text-black`}
                  >
                    {move.type}
                  </Badge>
                  <span className="font-mono">{move.power}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
