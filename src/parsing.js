const unitsArr = ["hz", "khz", "mhz", "ghz", "thz"];

export function freqParser(freq, units) {
  const freqStrip = freq.replace(/\s/g, "").toLowerCase();
  const freqVal = parseFloat(freqStrip);
  if (freqStrip === null || freqStrip.match(/[a-zA-Z]+/g) === null) {
    throw new Error("imcomplete string");
  }
  const freqUnit = freqStrip.match(/[a-zA-Z]+/g).toString();
  const unitIndex = unitsArr.indexOf(freqUnit);
  if (freqStrip.match(/[a-zA-Z]+/g) === null) {
    throw new Error("Incomplete string");
  }
  if (unitIndex > -1) {
    const indexDiff = unitIndex - unitsArr.indexOf(units);
    return [indexDiff, freqVal, unitIndex];
  } else {
    throw new Error("String not valid");
  }
}
