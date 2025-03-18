export interface MoveApi {
  accuracy: number;
  flavor_text_entries: FlavorTextEntry[];
  id: number;
  name: string;
  power: number;
  stat_changes: string[];
  effect_entries: Effect[];
  type: Type;
}

export interface FlavorTextEntry {
  flavor_text: string;
}

export interface Type {
  name: string;
  url: string;
}

export interface Effect {
  effect: string;
  short_effect: string;
}
