import { observable, action } from "mobx";

type rightSideNaveModes = "armorInfo" | "builtSetSummary" | "decorationInfo";

export type ApplicationStoreType = {
  openLeftSideNav: boolean;
  openRightSideDrawer: boolean;
  itemId: number;
  rightSideNavMode: rightSideNaveModes;
  partInfo: any;
  decorationInfo: any;
  toggleLeftSideNav: (value: boolean) => void;
  toggleRightSideDrawer: (value: boolean) => void;
  setItemId: (value: number) => void;
  setRightSideNavMode: (
    value: "armorInfo" | "builtSetSummary" | "decorationInfo"
  ) => void;
  setPartInfo: (obj: any) => void;
  setDecorationInfo: (obj: any) => void;
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
  setPartInfo = (obj: any): void => {
    this.partInfo = obj;
  };

  @action
  setDecorationInfo = (obj: any): void => {
    this.decorationInfo = obj;
  };
}

export default ApplicationStore;
