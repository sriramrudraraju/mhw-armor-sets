import * as React from "react";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import decorationStyles from "./decorationStyles";

type WithStylesProps = WithStyles<"decoration" | "typography">;
interface DecorationProps {
  name: string;
  imageUrl: string;
}
type AllProps = DecorationProps & WithStylesProps;

const Decoration: React.SFC<AllProps> = (props: AllProps) => {
  const { classes } = props;
  return (
    <div className={classes.decoration}>
      <div>svg</div>
      <div>
        <Typography variant="body2" className={classes.typography}>
          {props.name}
        </Typography>
      </div>
    </div>
  );
};

export default withStyles(decorationStyles)(Decoration);
