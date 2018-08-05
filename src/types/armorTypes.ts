export type ArmorRankType = "low" | "high";

export type DefenceType = {
  base: number;
  max: number;
  augmented: number;
};

export type ResistancesType = {
  fire: number;
  water: number;
  ice: number;
  thunder: number;
  dragon: number;
};

export type SlotType = {
  rank: number;
};

export type ArmorTypeType = "head" | "chest" | "gloves" | "waist" | "legs";

export type SetInfoType = {
  id: number;
  name: string;
  rank: ArmorRankType;
  pieces: Array<number>;
};

export type ArmorAssetsType = {
  imageMale: string;
  imageFemale: string;
};

export type ArmorCraftingInfoType = {
  materials: Array<CraftingCostType>;
};

export type CraftingCostType = {
  quantity: number;
  item: ItemType;
};

export type ItemType = {
  id: number;
  name: string;
  description: string;
  rarity: number;
  carryLimit: number;
  sellPrice: number;
  buyPrice: number;
};

export type ArmorAttributestype = any;

export type ArmorType = {
  id: number;
  slug: string;
  name: string;
  type: ArmorTypeType;
  rank: ArmorRankType;
  rarity: number;
  defense: DefenceType;
  resistances: ResistancesType;
  slots: Array<SlotType>;
  skills: Array<SkillRankType>;
  armorSet: SetInfoType;
  assets: ArmorAssetsType;
  crafting: ArmorCraftingInfoType;
  attributes: ArmorAttributestype;
};

export type SkillRankModifiersType = {
  affinity: number;
  attack: number;
  damageFire: number;
  damageWater: number;
  damageIce: number;
  damageThunder: number;
  damageDragon: number;
  defense: number;
  sharpnessBonus: number;
  resistAll: number;
  resistFire: number;
  resistWater: number;
  resistIce: number;
  resistThunder: number;
  resistDragon: number;
};

export type SkillRankType = {
  id: number;
  slug: string;
  level: number;
  description: string;
  skill: number;
  skillName: string;
  modifiers: SkillRankModifiersType;
};

export type ArmorSetBonusRankType = {
  pieces: number;
  skill: SkillRankType;
};

export type ArmorSetBonusType = {
  id: number;
  name: string;
  ranks: Array<ArmorSetBonusRankType>;
};

export type ArmorSetType = {
  id: number;
  name: string;
  rank: ArmorRankType;
  pieces: Array<ArmorType>;
  bonus: ArmorSetBonusType;
};

export type ArmorInfoType = ArmorType & { bonus: ArmorSetBonusType };
