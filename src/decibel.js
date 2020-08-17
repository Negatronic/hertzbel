import { decibelParser } from "./parsing";
const wArr = ["uw", "mw", "w"];
const dbArr = ["dBuW", "dBm", "dBW"];

export function toDbuw(power) {
  const units = wArr[0];
  return formatDecibelCheck(power, units);
}

export function toDbm(power) {
  const units = wArr[1];
  return formatDecibelCheck(power, units);
}

export function toDbw(power) {
  const units = wArr[2];
  return formatDecibelCheck(power, units);
}

function formatDecibelCheck(power, units) {
  const powerType = typeof power;
  if (powerType === "number") {
    return toNumberDecibel(power, units);
  } else if (powerType === "string") {
    return toStringDecibel(power, units);
  }
}

// Assume from mW to dBm
function toNumberDecibel(power, units) {
  const indexDiff = 1 - wArr.indexOf(units);
  const output = 10 * Math.log10(power) + indexDiff * 30;
  return output.toFixed(0) + " " + dbArr[wArr.indexOf(units)];
}

function toStringDecibel(power, units) {
  const parsed = decibelParser(power);
  const indexDiff = parsed[1] - wArr.indexOf(units);
  const output = 10 * Math.log10(parsed[0]) + indexDiff * 30;
  return output.toFixed(0) + " " + dbArr[wArr.indexOf(units)];
}
