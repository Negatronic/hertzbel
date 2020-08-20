import { wattParser, decibelParser } from "./parsing";
const wArr = ["uW", "mW", "W"];
const dbArr = ["dBuW", "dBm", "dBW"];

export function toDbuw(power) {
  return formatDecibelCheck(power, "dBuW");
}

export function toDbm(power) {
  return formatDecibelCheck(power, "dBm");
}

export function toDbw(power) {
  return formatDecibelCheck(power, "dBW");
}
export function toUw(power) {
  return formatWattCheck(power, "uW");
}

export function toMw(power) {
  return formatWattCheck(power, "mW");
}

export function toW(power) {
  return formatWattCheck(power, "W");
}
function formatDecibelCheck(power, units) {
  const powerType = typeof power;
  if (powerType === "number") {
    return toNumberDecibel(power, units);
  } else if (powerType === "string") {
    return toStringDecibel(power, units);
  } else {
    new Error("invalid type");
  }
}

function toNumberDecibel(power, units) {
  const indexDiff = 1 - dbArr.indexOf(units);
  const output = 10 * Math.log10(power) + indexDiff * 30;
  return output.toFixed(0) + " " + units;
}

function toStringDecibel(power, units) {
  const parsed = wattParser(power);
  const indexDiff = parsed[1] - dbArr.indexOf(units);
  const output = 10 * Math.log10(parsed[0]) + indexDiff * 30;
  return output.toFixed(0) + " " + units;
}

function formatWattCheck(power, units) {
  const powerType = typeof power;
  if (powerType === "string") {
    return toStringWatt(power, units);
  } else {
    throw new Error("invalid type");
  }
}

function toStringWatt(power, units) {
  const parsed = decibelParser(power);
  const indexDiff = parsed[1] - wArr.indexOf(units);
  const output = Math.pow(10, (parsed[0] + 30 * indexDiff) / 10);
  return output + " " + units;
}
