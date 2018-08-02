import * as React from "react";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import { observer } from "mobx-react";

import ArmorList from "../common/armorList/armorList";
import ArmorSetsStore, {
  ArmorSetsStoreType
} from "../../stores/armorSetsStore";

import armorStyles from "./armorStyles";

type WithStylesProps = WithStyles<"tabs">;
interface ArmorProps {}
interface ArmorState {}
type AllProps = ArmorProps & WithStylesProps;

const armorSetsStore: ArmorSetsStoreType = new ArmorSetsStore();

@observer
class Armor extends React.Component<AllProps, ArmorState> {
  componentWillMount() {
    const armorSets = armorSetsStore.armorSetsResponse
      ? armorSetsStore.armorSetsResponse
      : [];
    // call api only if no data in store  
    if(!armorSets.length) {
      armorSetsStore.fetchArmorSets();
    }
  }
  render() {
    // setting armorSets to received data or defaulting it to empty array
    const armorSets = armorSetsStore.armorSetsResponse
      ? armorSetsStore.armorSetsResponse
      : [];
    return (
      <div>
        {armorSetsStore.state === "pending" ? "fetching armor sets" : null}
        {armorSetsStore.state === "error" ? "error fetching armor sets" : null}
        {armorSets.length > 0 ? <ArmorList armorSets={armorSets} /> : null}
      </div>
    );
  }
}

export default withStyles(armorStyles)(Armor);
