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
// console.log(toDbm(2));

const valArr = [0.001, 1, 1000];

// console.log(Math.pow(10, -30 / 10) / valArr[0]);
// console.log(toDbm("20w"));
// console.log(toMw("2dBw"));
// console.log(toMw("-70dBm"));
console.log(toW("2dbuw"));
console.log(toW("2dbm"));
console.log(toW("2dbw"));
// console.log(toW("10dbuW"));
// console.log(toW("2dbuw"));
// console.log(toW("2dbm"));
// console.log(toW("2dbw"));
// console.log(toDbw("2 uw"));
// console.log(toDbw("2 mw"));
// console.log(toDbw("2 w"));
