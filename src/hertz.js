import { freqParser } from "./parsing";
const unitsArr = ["hz", "khz", "mhz", "ghz", "thz"];
const unitsCapArr = ["Hz", "kHz", "MHz", "GHz", "THz"];

export function toKiloHz(freq) {
  const units = unitsArr[1];
  return formatFreqCheck(freq, units);
}

function formatFreqCheck(freq, units) {
  const freqType = typeof freq;
  if (freqType === "number") {
    return toNumberFreq(freq, units);
  } else if (freqType === "string") {
    return toStringFreq(freq, units);
  }
}

function toStringFreq(freq, units) {
  const parsed = freqParser(freq, units);
  const output = parsed[1] * Math.pow(1000, parsed[0]);
  return output.toString() + " " + unitsCapArr[unitsArr.indexOf(units)];
}

//Assume the frequency is measured in hertz
function toNumberFreq(freq, units) {
  const indexVal = unitsArr.indexOf(units);
  const output = freq / Math.pow(1000, indexVal);
  return output.toString() + " " + unitsCapArr[unitsArr.indexOf(units)];
}
