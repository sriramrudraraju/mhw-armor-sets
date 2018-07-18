import * as React from "react";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

import statsDataTableStyles from "./statsDataTableStyles";

type WithStylesProps = WithStyles<"statsDataTable" | "tableCell" | "tablerow">;
interface StatsDataTableProps {
  statsAttributes: Array<{ stat: string; value: number | string }>;
}
interface StatsDataTableState {}
type AllProps = StatsDataTableProps & WithStylesProps;

class StatsDataTable extends React.Component<AllProps, StatsDataTableState> {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.statsDataTable}>
        <Table>
          <TableBody>
            {this.props.statsAttributes.map(n => {
              return (
                <TableRow key={n.stat} classes={{ root: classes.tablerow }}>
                  <TableCell padding="none" className={classes.tableCell}>
                    {n.stat}
                  </TableCell>
                  <TableCell padding="none" className={classes.tableCell}>
                    {n.value}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    );
  }
}

export default withStyles(statsDataTableStyles)(StatsDataTable);
