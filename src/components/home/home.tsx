import * as React from "react";
import { observer, inject } from "mobx-react";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import { withRouter, RouteComponentProps } from "react-router";

import ArmorEquip from "../common/armorEquip/armorequip";

import homeStyles from "./homeStyles";

import ApplicationStoreType from "../../stores/applicationStore";

type WithstylesProps = WithStyles<"home">;
interface MobxProps {
  applicationStore: ApplicationStoreType;
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
    console.log(info);
    // go to armors list if armor is selected
    // go to decorations if decoration is selected
    // if (info === "armor") {
    //   this.props.history.push("/armors");
    // } else if (info === "decoration") {
    //   this.props.history.push("/decorations");
    // }
  }

  render() {
    const armorSet = [
      { type: "weapon" },
      { type: "head" },
      { type: "chest" },
      { type: "gloves" },
      { type: "waist" },
      { type: "legs" },
      { type: "charm" }
    ];
    return (
      <div>
        {armorSet.map(piece => {
          return <ArmorEquip key={piece.type} />;
        })}
      </div>
    );
  }
}

interface HomeWithMobxProps {}

const HomeWithMobx: React.SFC<
  HomeWithMobxProps & RouteComponentProps<any, any>
> = inject("applicationStore")(
  observer((props: AllProps) => <Home {...props} />)
);

export default withRouter(withStyles(homeStyles)(HomeWithMobx));
