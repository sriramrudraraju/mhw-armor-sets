import { SkillRankType } from "./armorTypes";

export type DecorationType = {
  id: number;
  slug: string;
  name: string;
  rarity: number;
  slot: number;
  skills: Array<SkillRankType>;
};
