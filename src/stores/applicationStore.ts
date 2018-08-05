import { observable, action } from "mobx";

import { ArmorInfoType } from "../types/armorTypes";
import { DecorationType } from "../types/decorationTypes";
type rightSideNaveModes = "armorInfo" | "builtSetSummary" | "decorationInfo";

export type ApplicationStoreType = {
  openLeftSideNav: boolean;
  openRightSideDrawer: boolean;
  itemId: number;
  rightSideNavMode: rightSideNaveModes;
  partInfo: ArmorInfoType;
  decorationInfo: DecorationType;
  toggleLeftSideNav: (value: boolean) => void;
  toggleRightSideDrawer: (value: boolean) => void;
  setItemId: (value: number) => void;
  setRightSideNavMode: (
    value: "armorInfo" | "builtSetSummary" | "decorationInfo"
  ) => void;
  setPartInfo: (obj: ArmorInfoType) => void;
  setDecorationInfo: (obj: DecorationType) => void;
};

class ApplicationStore implements ApplicationStoreType {
  @observable openLeftSideNav = false;
  @observable openRightSideDrawer = false;
  @observable rightSideNavMode = "builtSetSummary" as rightSideNaveModes;
  @observable itemId = 0;
  @observable partInfo: ArmorInfoType;
  @observable decorationInfo: DecorationType;

  @action
  toggleLeftSideNav = (value: boolean): void => {
    this.openLeftSideNav = value;
  };

  @action
  toggleRightSideDrawer = (value: boolean): void => {
    this.openRightSideDrawer = value;
  };

  @action
  setItemId = (value: number): void => {
    this.itemId = value;
  };

  @action
  setRightSideNavMode = (value: rightSideNaveModes): void => {
    this.rightSideNavMode = value;
  };

  @action
  setPartInfo = (obj: ArmorInfoType): void => {
    this.partInfo = obj;
  };

  @action
  setDecorationInfo = (obj: DecorationType): void => {
    this.decorationInfo = obj;
  };
}

export default ApplicationStore;
