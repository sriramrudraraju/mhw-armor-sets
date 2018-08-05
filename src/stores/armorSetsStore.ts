import { observable, flow } from "mobx";

import armorSets from "../api/armorSets";

import { ArmorSetType } from "../types/armorTypes";

export type ArmorSetsStoreType = {
  state: string;
  armorSetsResponse: Array<ArmorSetType>;
  fetchArmorSets: () => void;
};

class ArmorSetsStore implements ArmorSetsStoreType {
  @observable state: string = "idle";
  @observable armorSetsResponse: Array<ArmorSetType> = [];

  fetchArmorSets = flow(function*(this: ArmorSetsStoreType) {
    this.state = "pending";
    this.armorSetsResponse = [];
    try {
      this.armorSetsResponse = yield armorSets();
      this.state = "success";
    } catch (error) {
      this.state = "error";
      this.armorSetsResponse = [];
    }
  });
}

export default ArmorSetsStore;
