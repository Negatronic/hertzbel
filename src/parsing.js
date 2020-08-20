const unitsArr = ["hz", "khz", "mhz", "ghz", "thz"];
const wArr = ["uw", "mw", "w"];
const dbArr = ["dbuw", "dbm", "dbw"];

export function freqParser(freq) {
  const freqStrip = freq.replace(/\s/g, "").toLowerCase();
  const freqVal = parseFloat(freqStrip);
  const freqUnit = freqStrip.match(/[a-zA-Z]+/g).toString();
  const unitIndex = unitsArr.indexOf(freqUnit);
  if (freqStrip === null || freqStrip.match(/[a-zA-Z]+/g) === null) {
    throw new Error("Incomplete string");
  }
  // if (freqStrip.match(/[a-zA-Z]+/g) === null) {
  //   throw new Error("Incomplete string");
  // }
  if (unitIndex > -1) {
    return [freqVal, unitIndex];
  } else {
    throw new Error("String not valid");
  }
}

export function wattParser(power) {
  const powerStrip = power.replace(/\s/g, "").toLowerCase();
  const powerVal = parseFloat(powerStrip);
  const powerUnit = powerStrip.match(/[a-zA-Z]+/g).toString();
  const unitIndex = wArr.indexOf(powerUnit);
  if (powerStrip === null || powerStrip.match(/[a-zA-Z]+/g) === null) {
    throw new Error("Incomplete string");
  }
  if (unitIndex > -1) {
    return [powerVal, unitIndex];
  } else {
    throw new Error("String not valid");
  }
}

export function decibelParser(power) {
  const powerStrip = power.replace(/\s/g, "").toLowerCase();
  const powerVal = parseFloat(powerStrip);
  const powerUnit = powerStrip.match(/[a-zA-Z]+/g).toString();
  const unitIndex = dbArr.indexOf(powerUnit);
  if (powerStrip === null || powerStrip.match(/[a-zA-Z]+/g) === null) {
    throw new Error("Incomplete string");
  }
  if (unitIndex > -1) {
    return [powerVal, unitIndex];
  } else {
    throw new Error("String not valid");
  }
}
