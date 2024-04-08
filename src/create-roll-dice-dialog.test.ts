import { describe, it } from 'vitest';

import { createRollDiceDialog } from './create-roll-dice-dialog';

describe.todo('createRollDiceDialog', () => {
  it('should render', () => {
    const doRoll = () => {};
    const doCancel = () => {};
    const dialog = createRollDiceDialog(doRoll, doCancel);

    dialog.render();
  });
});
