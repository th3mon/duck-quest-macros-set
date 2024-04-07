import { rollDice } from './roll-dice';

export type Macro = 'roll-dice';

export enum MacroType {
  RollDice = 'roll-dice',
}

export async function main(macro: Macro) {
  switch (macro) {
    case MacroType.RollDice:
      return rollDice();

    default:
      // TODO: Create meaningful error message
      return ui.notifications?.error('Not implemented');
  }
}
