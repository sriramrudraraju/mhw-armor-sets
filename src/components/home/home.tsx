import * as React from "react";
import { observer, inject } from "mobx-react";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import { withRouter, RouteComponentProps } from "react-router";

import ArmorEquip from "../common/armorEquip/armorequip";

import homeStyles from "./homeStyles";

import { ApplicationStoreType } from "../../stores/applicationStore";
import { SelectedArmorSetStoreType } from "../../stores/selectedArmorSetsStore";

type WithstylesProps = WithStyles<"home">;
interface MobxProps {
  applicationStore: ApplicationStoreType;
  selectedArmorSetStore: SelectedArmorSetStoreType;
}
interface HomeProps {}
interface HomeState {}
type AllProps = HomeProps &
  HomeWithMobxProps &
  MobxProps &
  WithstylesProps &
  RouteComponentProps<any, any>;

@observer
class Home extends React.Component<AllProps, HomeState> {
  constructor(props: AllProps) {
    super(props);
    this.clickedInfo = this.clickedInfo.bind(this);
  }

  clickedInfo(info: any) {
    // gets the info about which armor/deco/empty slot is clicked
    // go to armors list if armor is selected
    // go to decorations if decoration is selected
    if (
      info.type === "head" ||
      info.type === "chest" ||
      info.type === "waist" ||
      info.type === "gloves" ||
      info.type === "legs"
    ) {
      this.props.history.push("/armors");
    } else if (info === "decoration") {
      this.props.history.push("/decorations");
    }
  }

  render() {
    const armorSet = this.props.selectedArmorSetStore.selectedArmorSet;
    return (
      <div>
        {armorSet.map((piece: any) => {
          return (
            <ArmorEquip
              key={piece.type}
              selectedPiece={piece}
              clickedInfo={this.clickedInfo}
            />
          );
        })}
      </div>
    );
  }
}

interface HomeWithMobxProps {}

const HomeWithMobx: React.SFC<
  HomeWithMobxProps & RouteComponentProps<any, any>
> = inject("applicationStore", "selectedArmorSetStore")(
  observer((props: AllProps) => <Home {...props} />)
);

export default withRouter(withStyles(homeStyles)(HomeWithMobx));
