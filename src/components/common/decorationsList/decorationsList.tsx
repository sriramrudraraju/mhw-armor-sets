import * as React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import Decoration from "../decoration/decoration";

import { DecorationType } from "../../../types/decorationTypes";

interface DecorationsListProps {
  decorations: Array<DecorationType>;
  clickDecoration: (value: DecorationType) => void;
}

const DecorationsList: React.SFC<DecorationsListProps> = (
  props: DecorationsListProps
) => {
  const { decorations } = props;
  return (
    <List>
      {decorations.map(value => (
        <ListItem
          key={value.name}
          button={true}
          divider={true}
          onClick={props.clickDecoration.bind(props, value)}
        >
          <Decoration name={value.name} />
        </ListItem>
      ))}
    </List>
  );
};

export default DecorationsList;
