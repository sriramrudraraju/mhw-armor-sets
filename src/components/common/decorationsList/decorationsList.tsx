import * as React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import Decoration from "../decoration/decoration";

interface DecorationsListProps {
  decorations: Array<any>;
  clickDecoration: (event: any) => any;
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
          <Decoration name={value.name} imageUrl={value.imageUrl} />
        </ListItem>
      ))}
    </List>
  );
};

export default DecorationsList;
