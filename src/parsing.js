const unitsArr = ["hz", "khz", "mhz", "ghz", "thz"];

export function freqParser(freq) {
  const freqStrip = freq.replace(/\s/g, "").toLowerCase();
  const freqVal = parseFloat(freqStrip);
  const freqUnit = freqStrip.match(/[a-zA-Z]+/g).toString();
  const unitIndex = unitsArr.indexOf(freqUnit);
  if (freqStrip === null || freqStrip.match(/[a-zA-Z]+/g) === null) {
    throw new Error("Icomplete string");
  }
  if (freqStrip.match(/[a-zA-Z]+/g) === null) {
    throw new Error("Incomplete string");
  }
  if (unitIndex > -1) {
    return [freqVal, unitIndex];
  } else {
    throw new Error("String not valid");
  }
}
