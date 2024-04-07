import { createRollDiceDialog } from './create-roll-dice-dialog';

export const rollDice = () => {
  showWindow();
};

export const showWindow = () => {
  const dialog = createRollDiceDialog();

  dialog.render();
};
