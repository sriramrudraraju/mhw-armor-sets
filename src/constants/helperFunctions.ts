// converts the defence and resistance from received api format to displayable data table formats
// just renaming
export const convertReceivedStatsToDisplayableFormat = (
  armorPiece: any
): Array<{ stat: string; value: number }> => [
  { stat: "Defence", value: armorPiece.defense.base },
  { stat: "Vs. Fire", value: armorPiece.resistances.fire },
  { stat: "Vs. Water", value: armorPiece.resistances.water },
  { stat: "Vs. Thunder", value: armorPiece.resistances.thunder },
  { stat: "Vs. Ice", value: armorPiece.resistances.ice },
  { stat: "Vs. Dragon", value: armorPiece.resistances.dragon }
];
