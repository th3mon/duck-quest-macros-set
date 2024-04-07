import './duck-quest-macros-set.scss';
import { registerGlobals } from './register-globals';

Hooks.on('ready', function () {
  registerGlobals();
});
