import * as React from "react";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import { withRouter, RouteComponentProps } from "react-router";
import { observer, inject } from "mobx-react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import StatsDataTable from "../statsDataTable/statsDataTable";

import decorationInfoStyles from "./decorationInfostyles";

import { ApplicationStoreType } from "../../../stores/applicationStore";

type WithStylesProps = WithStyles<"decorationInfo" | "button">;
interface MobxProps {
  applicationStore: ApplicationStoreType;
}
interface DecorationInfoProps {}
interface DecorationInfoState {}

type AllProps = DecorationInfoProps &
  DecorationInfoWithMobxProps &
  WithStylesProps &
  MobxProps &
  RouteComponentProps<any, any>;

class DecorationInfo extends React.Component<AllProps, DecorationInfoState> {
  constructor(props: AllProps) {
    super(props);
    this.clickEquip = this.clickEquip.bind(this);
  }

  clickEquip() {
    // TODO store this armor info
    // go to home
    this.props.history.push("/");
    // close right side drawer
    this.props.applicationStore.toggleRightSideDrawer(false);
  }

  render() {
    const { classes, decorationInfo } = this.props;
    console.log(decorationInfo);
    return (
      <div className={classes.decorationInfo}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="title">{decorationInfo.name}</Typography>
          <br />
          <Typography variant="body1">
            {decorationInfo.skills[0].skillName}
          </Typography>
        </div>
        <br />
        <Typography variant="body2">Skill info</Typography>
        <Typography variant="body1">
          {decorationInfo.skills[0].description}
        </Typography>
        <br />
        {/* TODO: Stats table data has to be feeded */}
        <StatsDataTable
          statsAttributes={[
            { stat: "Lv 1", value: "adgh" },
            { stat: "Lv 2", value: "sdfsdf" },
            { stat: "Lv 3", value: "asdasd" }
          ]}
        />
        <Button
          variant="raised"
          className={classes.button}
          onClick={this.clickEquip}
        >
          Equip
        </Button>
      </div>
    );
  }
}

interface DecorationInfoWithMobxProps {
  decorationInfo: any;
}

const DecorationInfoWithMobx: React.SFC<
  DecorationInfoWithMobxProps & RouteComponentProps<any, any>
> = inject("applicationStore")(
  observer((props: AllProps) => <DecorationInfo {...props} />)
);

export default withRouter(
  withStyles(decorationInfoStyles)(DecorationInfoWithMobx)
);
