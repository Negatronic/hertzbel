import {
  toHz,
  toKiloHz,
  toMegaHz,
  toGigaHz,
  toTeraHz,
  addFreq,
  subFreq,
  multFreq,
} from "./hertz";

const sumHz = "2 Hz";
const sumKhz = "2 kHz";
const sumMhz = "2 MHz";
const sumGhz = "2 GHz";
const sumThz = "2 THz";

// console.log(addFreq(2000000, 2000000));
// console.log(addFreq(2000000, "2hz"));
// console.log(addFreq("2 hz", 2000000));
// console.log(subFreq("2khz", "2 thz"));

console.log(multFreq("123 mhz", 2));
