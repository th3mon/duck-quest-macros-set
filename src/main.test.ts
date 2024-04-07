import { describe, it, expect, beforeAll } from 'vitest';
import { main } from './main';

describe('main', () => {
  beforeAll(() => {
    const ui = {};

    // @ts-ignore
    globalThis.ui = ui;
  });

  it('should work', async () => {
    expect(main('roll-dice')).toBeTruthy();
  });
});
