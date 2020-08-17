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

const sdf = "2 Hz";
const sumKhz = "2 kHz";
const sumMhz = "2 MHz";
const sumGhz = "2 GHz";
const sumThz = "2 THz";

// console.log(addFreq(2000000, 2000000));
// console.log(addFreq(2000000, "2mhz"));
// console.log(addFreq("2 hz", 2000000));
// console.log(subFreq("2khz", "2 thz"));

// console.log(divFreq("2 khz", 10000));
console.log(divFreq(sumKhz, 2));
console.log(divFreq(sumMhz, 2));
console.log(divFreq(sumGhz, 2));
console.log(divFreq(sumThz, 2));
