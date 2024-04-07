import { describe, it, expect } from 'vitest';

import { rollDice } from './roll-dice';

describe('Roll Dice macro', () => {
  it('should work', () => {
    expect(rollDice).toBeTruthy();
  });
});
