import * as React from "react";
import { observer, inject } from "mobx-react";

import DecorationsList from "../common/decorationsList/decorationsList";

import DecorationsStore, {
  DecorationsStoreType
} from "../../stores/decorationsStore";

import ApplicationStoreType from "../../stores/applicationStore";
import { DecorationType } from "../../types/decorationTypes";

interface MobxProps {
  applicationStore: ApplicationStoreType;
}
interface DecorationsProps {}
interface State {}
type AllProps = DecorationsProps & DecorationsWithMobxProps & MobxProps;

const decorationsStore: DecorationsStoreType = new DecorationsStore();

@observer
class Decorations extends React.Component<AllProps, State> {
  constructor(props: AllProps) {
    super(props);
    this.clickDecoration = this.clickDecoration.bind(this);
  }

  componentWillMount() {
    const decorations = decorationsStore.decorationsResponse
      ? decorationsStore.decorationsResponse
      : [];
    // fetch decorations
    if (!decorations.length) {
      decorationsStore.fetchDecorations();
    }
  }

  clickDecoration(decorationInfo: DecorationType) {
    // open right side drawer
    this.props.applicationStore.toggleRightSideDrawer(true);

    // pass this decoration info to right side drawer
    this.props.applicationStore.setDecorationInfo(decorationInfo);

    // set the right side drawer mode to decorationInfo
    this.props.applicationStore.setRightSideNavMode("decorationInfo");
  }

  render() {
    // setting data only when response has data or defaulting it to empty array
    const decorations = decorationsStore.decorationsResponse
      ? decorationsStore.decorationsResponse
      : [];
    return (
      <div>
        {decorationsStore.state === "pending" ? "fetching decorations" : null}
        {decorationsStore.state === "error"
          ? "error fetching decorations"
          : null}
        {decorations.length > 0 ? (
          <DecorationsList
            decorations={decorations}
            clickDecoration={this.clickDecoration}
          />
        ) : null}
      </div>
    );
  }
}

interface DecorationsWithMobxProps {}

const DecorationsWithMobx: React.SFC<DecorationsWithMobxProps> = inject(
  "applicationStore"
)(observer((props: AllProps) => <Decorations {...props} />));

export default DecorationsWithMobx;
