export {
  toHz,
  toKiloHz,
  toMegaHz,
  toGigaHz,
  toTeraHz,
  convertFrequency,
  addFreq,
  subFreq,
  multFreq,
  divFreq,
} from './hertz';

export { toDbm, toDbw, toDbuw, toMw, toUw, toW } from './decibel';

import { divFreq } from './hertz';

console.log(divFreq('500 mhz', 11, 6));
