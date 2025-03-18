import { Pokemon } from "@/types/pokemon";
import { create } from "zustand";

type PokemonStore = {
  myTeam: Pokemon[];
  setMyTeam: (teams: Pokemon[]) => void;
};

export const usePokemonStore = create<PokemonStore>()((set) => ({
  myTeam: [],
  setMyTeam: (teams) => set({ myTeam: teams }),
}));
