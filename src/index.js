export {
  toHz,
  toKiloHz,
  toMegaHz,
  toGigaHz,
  toTeraHz,
  addFreq,
  subFreq,
  multFreq,
  divFreq,
} from "./hertz";

export { toDbm, toDbw, toDbuw, toMw, toUw, toW } from "./decibel";
import {
  toHz,
  toKiloHz,
  toMegaHz,
  toGigaHz,
  toTeraHz,
  addFreq,
  subFreq,
  multFreq,
  divFreq,
} from "./hertz";

import { toDbm, toDbw, toDbuw, toMw, toUw, toW } from "./decibel";

// console.log(toHz("100 khz"));
// console.log(addFreq("100kHz", "1 MHz"));
console.log(subFreq("10 mhz", "500 kHz"));
console.log(multFreq("1.25 ghz", 3));
console.log(divFreq("3 ghz", 601));
