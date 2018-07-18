import { observable, action } from "mobx";

type rightSideNaveModes = "armorInfo" | "builtSetSummary" | "decorationInfo";
type PartInfoType = {
  name: string;
  rarity: number;
  skills: Array<any>;
  slots: Array<any>;
  bonus: { id: number; name: string; ranks: Array<any> };
};
export type DecorationInfoType = {
  name: string;
  skills: Array<{ description: string; skillName: string }>;
};

export type ApplicationStoreType = {
  openLeftSideNav: boolean;
  openRightSideDrawer: boolean;
  itemId: number;
  rightSideNavMode: rightSideNaveModes;
  partInfo: PartInfoType;
  decorationInfo: DecorationInfoType;
  toggleLeftSideNav: (value: boolean) => void;
  toggleRightSideDrawer: (value: boolean) => void;
  setItemId: (value: number) => void;
  setRightSideNavMode: (
    value: "armorInfo" | "builtSetSummary" | "decorationInfo"
  ) => void;
  setPartInfo: (obj: PartInfoType) => void;
  setDecorationInfo: (obj: DecorationInfoType) => void;
};

class ApplicationStore implements ApplicationStoreType {
  @observable openLeftSideNav = false;
  @observable openRightSideDrawer = false;
  @observable rightSideNavMode = "builtSetSummary" as rightSideNaveModes;
  @observable itemId = 0;
  @observable
  partInfo = {
    name: "",
    rarity: 0,
    skills: [{}],
    slots: [{}],
    bonus: { id: 0, name: "", ranks: [{}] }
  };
  @observable
  decorationInfo = {
    name: "",
    skills: [{ description: "", skillName: "" }]
  };

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
  setPartInfo = (obj: PartInfoType): void => {
    this.partInfo = obj;
  };

  @action
  setDecorationInfo = (obj: DecorationInfoType): void => {
    this.decorationInfo = obj;
  };
}

export default ApplicationStore;
