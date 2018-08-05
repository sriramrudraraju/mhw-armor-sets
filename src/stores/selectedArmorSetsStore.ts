import { observable, action } from "mobx";

import { ArmorSetBonusType, ArmorType } from "../types/armorTypes";
import { DecorationType } from "../types/decorationTypes";

/**
 * armorSet should be array of
 * armor name
 * armor rarity
 * armor icon
 * armor decoration slots
 * armor skills
 * armor bonus
 * decoration skills
 */

export type armorSelectedType = ArmorType & { bonus: ArmorSetBonusType } & {
  decorations: Array<DecorationType>;
};
export type defaultSelectedPieceType = {
  type: "weapon" | "head" | "chest" | "gloves" | "waist" | "legs" | "charm";
  name?: string;
};

export type SelectedArmorSetStoreType = {
  selectedArmorSet: any;
  changePieceInfoAt: (partInfo: any) => void;
};

class SelectedArmorSetStore implements SelectedArmorSetStoreType {
  @observable
  selectedArmorSet: any = [
    { type: "weapon", name: "weapon" },
    { type: "head", name: "head" },
    { type: "chest", name: "chest" },
    { type: "gloves", name: "gloves" },
    { type: "waist", name: "waist" },
    { type: "legs", name: "legs" },
    { type: "charm", name: "charm" }
  ];

  @action
  changePieceInfoAt = (partInfo: any) => {
    const index = this.selectedArmorSet.findIndex((piece: any) => {
      return piece.type === partInfo.type;
    });
    if (index > -1) {
      this.selectedArmorSet[index] = partInfo;
    }
  };
}

export default SelectedArmorSetStore;
