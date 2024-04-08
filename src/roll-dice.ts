import { createRollDiceDialog } from './create-roll-dice-dialog';

export const rollDice = async () => {
  await showWindow();
};

export const showWindow = async () => {
  const doRoll = async () => {
    const getAttribute = () => {
      const inputAttribute: HTMLInputElement | null = document.getElementById(
        'attribute',
      ) as HTMLInputElement;

      return inputAttribute.value;
    };

    const getDifficultyLevel = () => {
      const inputDifficultyLevel: HTMLInputElement | null =
        document.getElementById('difficulty-level') as HTMLInputElement;

      return inputDifficultyLevel.value;
    };

    const roll = new Roll('d20 + @attribute df=1', {
      attribute: getAttribute(),
    });

    await roll.evaluate();

    const getMessage = (total: number, result: string) => {
      const difficultyLevel = parseInt(getDifficultyLevel());
      const sukcessMessage = `SUKCES!`;
      const failureMessage = `PORAŻKA`;
      const sukcessOrFailure =
        total >= difficultyLevel ? sukcessMessage : failureMessage;

      if (total === -1) {
        return 'Krytyczna PORAŻKA';
      }

      if (result.includes('20 +')) {
        return 'Krytyczny Sukces!';
      }

      return sukcessOrFailure;
    };

    roll.toMessage({
      flavor: getMessage(Number(roll.total), String(roll.result)),
    });
  };
  const doCancel = () => {};
  const dialog = createRollDiceDialog(doRoll, doCancel);
  const force = true;

  dialog.render(force);
};
//
// async function showDialogAdHoc(selectedTokens: Token[]) {
//   const addXPCallback = () => addXP(selectedTokens, 'ad-hoc');
//   const cancelCallback = () => {};
//   const dialog = createDialogAddXP(addXPCallback, cancelCallback);
//
//   dialog.render(true);
// }
