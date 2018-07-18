import * as React from "react";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import { withRouter, RouteComponentProps } from "react-router";
import { observer, inject } from "mobx-react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import { convertReceivedStatsToDisplayableFormat } from "../../../constants/helperFunctions";

import StatsDataTable from "../statsDataTable/statsDataTable";
import ArmorSkill from "../armorSkill/armorSkill";

import armorInfoStyles from "./armorInfoStyles";

import ApplicationStoreType from "../../../stores/applicationStore";

type WithStylesProps = WithStyles<"armorInfo" | "button">;
interface MobxProps {
  applicationStore: ApplicationStoreType;
}
interface ArmorInfoProps {}
interface ArmorInfoState {}

type AllProps = ArmorInfoProps &
  ArmorInfoWithMobxProps &
  WithStylesProps &
  MobxProps &
  RouteComponentProps<any, any>;

class ArmorInfo extends React.Component<AllProps, ArmorInfoState> {
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
    const { classes, partInfo } = this.props;
    console.log(partInfo);
    return (
      <div className={classes.armorInfo}>
        {/* Name and Rarity */}
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="body2">{partInfo.name}</Typography>
          <Typography variant="body2">Rarity {partInfo.rarity}</Typography>
        </div>
        <br />
        {/* Defence and Resistances */}
        <StatsDataTable
          statsAttributes={convertReceivedStatsToDisplayableFormat(partInfo)}
        />
        {/* TODO: need to add decoration icons based on decoration levels */}
        {/* Decorations slots*/}
        {/* display only if they exists */}
        {partInfo.slots.length > 0 ? (
          <div>{partInfo.slots.map(slot => <span key={slot}>slot</span>)}</div>
        ) : null}
        <br />
        {/* Skills */}
        {/* display only if skills exist */}
        {partInfo.skills.length > 0 ? (
          <div>
            <Typography variant="subheading">Skills</Typography>
            {partInfo.skills.map(skill => (
              <ArmorSkill
                key={skill.skillName}
                name={skill.skillName}
                level={skill.level}
              />
            ))}
          </div>
        ) : null}

        <br />
        {/* Skill Bonus */}
        {/* display only if bonus exists */}
        {partInfo.bonus && partInfo.bonus.id ? (
          <div>
            <Typography variant="subheading">Set Bonus</Typography>
            {partInfo.bonus &&
              partInfo.bonus.ranks && (
                <ArmorSkill
                  key={partInfo.bonus.ranks[0].id}
                  name={partInfo.bonus ? partInfo.bonus.name : ""}
                  level={partInfo.bonus.ranks[0].skill.level}
                />
              )}
          </div>
        ) : null}
        {/* Button to equip */}
        <br />
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

interface ArmorInfoWithMobxProps {
  partInfo: {
    name: string;
    rarity: number;
    skills: Array<any>;
    slots: Array<any>;
    bonus: { id: number; name: string; ranks: Array<any> };
  };
}

const ArmorInfoWithMobx: React.SFC<
  ArmorInfoWithMobxProps & RouteComponentProps<any, any>
> = inject("applicationStore")(
  observer((props: AllProps) => <ArmorInfo {...props} />)
);

export default withRouter(withStyles(armorInfoStyles)(ArmorInfoWithMobx));
