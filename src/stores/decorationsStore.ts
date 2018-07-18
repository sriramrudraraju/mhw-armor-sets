import { observable, flow } from "mobx";

import decorations from "../api/decorations";

export type DecorationsStoreType = {
  state: string;
  decorationsResponse: any;
  fetchDecorations: () => void;
};

class DecorationsStore implements DecorationsStoreType {
  @observable state: string = "idle";
  @observable decorationsResponse: any = {};

  fetchDecorations = flow(function*(this: DecorationsStoreType) {
    this.state = "pending";
    this.decorationsResponse = {};
    try {
      this.decorationsResponse = yield decorations();
      this.state = "success";
    } catch (error) {
      this.state = "error";
      this.decorationsResponse = {};
    }
  });
}

export default DecorationsStore;
