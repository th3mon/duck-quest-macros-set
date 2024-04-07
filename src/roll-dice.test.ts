import { describe, it, expect } from 'vitest';

import { rollDice } from './roll-dice';

describe('Roll Dice macro', () => {
  it('should work', () => {
    expect(rollDice).toBeTruthy();
  });

  it('should NOT throw an error', () => {
    expect(() => {
      rollDice();
    }).not.toThrow();
  });
});
