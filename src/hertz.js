const unitsArr = ["hz", "khz", "mhz", "ghz", "thz"];

export function toKiloHz(freq) {
  let freqType = typeof freq;
  let conversion = "";
  var units = "khz";

  if (freqType === "number") {
    conversion = (freq / 1000).toString().concat(" kHz");
  } else if (freqType == "string") {
    conversion = toFrequency(freq, units);
  } else {
    conversion = "Error, wrong data type";
  }

  return conversion;
}

function toFrequency(freq, units) {
  const regSpace = /\s/g;
  const freqStrip = freq.replace(regSpace, "").toLowerCase();
  const freqVal = parseFloat(freqStrip);
  const freqUnit = freqStrip.match(/[a-zA-Z]+/g).toString();
  const indexDiff = unitsArr.indexOf(freqUnit) - unitsArr.indexOf(units);
  const output = freqVal * Math.pow(1000, indexDiff);
  return output.toString() + " " + units;
}
