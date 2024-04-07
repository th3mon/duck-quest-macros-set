export type Macro = 'roll-dice';

export enum MacroType {
  RollDice = 'roll-dice',
}

export async function main(macro: Macro) {
  switch (macro) {
    case MacroType.RollDice:
      throw new Error('Not implemented');

    default:
      // TODO: Create meaningful error message
      return ui.notifications?.error('Not implemented');
  }
}
