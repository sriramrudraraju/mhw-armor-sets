export interface Piece {
  id: number;
  slug: string;
  name: string;
  type: string;
  rank: "low" | "high";
  rarity: number;
  armorSet: number;
  attributes?: any;
  skills?: any;
  assets?: any;
}

export interface ArmorSet {
  id: number;
  name: string;
  rank: "low" | "high";
  pieces: Array<Piece>;
  bonus: any;
}
