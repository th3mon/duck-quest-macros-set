declare global {
  interface GlobalThis {
    rollDice: () => void;
  }
}

import { MacroType, main } from './main';

export const registerGlobals = () => {
  // @ts-ignore
  globalThis.rollDice = () => main(MacroType.RollDice);
};
