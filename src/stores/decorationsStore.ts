import { observable, flow } from "mobx";

import decorations from "../api/decorations";

import { DecorationType } from "../types/decorationTypes";

export type DecorationsStoreType = {
  state: string;
  decorationsResponse: Array<DecorationType>;
  fetchDecorations: () => void;
};

class DecorationsStore implements DecorationsStoreType {
  @observable state: string = "idle";
  @observable decorationsResponse: Array<DecorationType> = [];

  fetchDecorations = flow(function*(this: DecorationsStoreType) {
    this.state = "pending";
    this.decorationsResponse = [];
    try {
      this.decorationsResponse = yield decorations();
      this.state = "success";
    } catch (error) {
      this.state = "error";
      this.decorationsResponse = [];
    }
  });
}

export default DecorationsStore;
