export function createRollDiceDialog(
  doRoll: () => void,
  doCancel: () => void,
): Dialog {
  const title = 'Roll Dice';
  const attribute = 'Atrybut';
  const difficultyLevel = 'Stopień Trudności';
  const cancelLabel = 'Anuluj';
  const okLabel = 'Rzucaj!';

  const content = `
    <div class="form-group">
      <label for="attribute">${attribute}</label>
      <input type="number" id="attribute" name="attribute">
    </div>
    <div class="form-group">
      <label for="difficulty-level">${difficultyLevel}</label>
      <input type="text" id="difficulty-level" name="difficulty-level">
    </div>
  `;

  return new Dialog({
    title,
    content,
    buttons: {
      roll: {
        icon: '<i class="fas fa-dice-d20"></i>',
        label: okLabel,
        callback: doRoll,
      },
      cancel: {
        icon: '<i class="fas fa-times"></i>',
        label: cancelLabel,
        callback: doCancel,
      },
    },
  });
}
