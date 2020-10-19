import { freqParser, unitIndexer } from "./parsing";
const unitsArr = ["hz", "khz", "mhz", "ghz", "thz"];
const unitsCapArr = ["Hz", "kHz", "MHz", "GHz", "THz"];

export function toHz(freq) {
  const units = unitsArr[0];
  return formatFreqCheck(freq, units);
}

export function toKiloHz(freq) {
  const units = unitsArr[1];
  return formatFreqCheck(freq, units);
}

export function toMegaHz(freq) {
  const units = unitsArr[2];
  return formatFreqCheck(freq, units);
}

export function toGigaHz(freq) {
  const units = unitsArr[3];
  return formatFreqCheck(freq, units);
}

export function toTeraHz(freq) {
  const units = unitsArr[4];
  return formatFreqCheck(freq, units);
}

export function convertFrequency(freq, toUnits) {
  let toArr = unitsArr.indexOf(toUnits.toLowerCase());
  switch (toArr) {
    case 0:
      return toHz(freq);
    case 1:
      return toKiloHz(freq);
    case 2:
      return toMegaHz(freq);
    case 3:
      return toGigaHz(freq);
    case 4:
      return toTeraHz(freq);
  }
}

export function addFreq(pFreq, sFreq) {
  return mathAddFormatCheck(pFreq, sFreq);
}

export function subFreq(pFreq, sFreq) {
  return mathSubFormatCheck(pFreq, sFreq);
}

export function multFreq(freq, multiplier) {
  return mathMulFormatCheck(freq, multiplier);
}

export function divFreq(freq, divisor) {
  return mathDivFormatCheck(freq, divisor);
}

function mathAddFormatCheck(pFreq, sFreq) {
  if (typeof pFreq === "number" && typeof sFreq === "number") {
    return toHz(pFreq + sFreq);
  } else if (typeof pFreq === "number" && typeof sFreq === "string") {
    const pFreqUnit = toHz(pFreq);
    return addFreqMath(pFreqUnit, sFreq);
  } else if (typeof pFreq === "string" && typeof sFreq === "number") {
    return addFreqMath(pFreq, toHz(sFreq));
  } else if (typeof pFreq === "string" && typeof sFreq === "string") {
    return addFreqMath(pFreq, sFreq);
  } else {
    throw new Error("string not valid");
  }
}

function addFreqMath(pFreq, sFreq) {
  const pHzUnit = freqParser(pFreq);
  const pHz = parseFloat(toHz(pFreq));
  const sHz = parseFloat(toHz(sFreq));
  const addedFreq = pHz + sHz;
  switch (pHzUnit[1]) {
    case 0:
      return toHz(addedFreq, pHzUnit[1]);
    case 1:
      return toKiloHz(addedFreq, pHzUnit[1]);
    case 2:
      return toMegaHz(addedFreq, pHzUnit[1]);
    case 3:
      return toGigaHz(addedFreq, pHzUnit[1]);
    case 4:
      return toTeraHz(addedFreq, pHzUnit[1]);
  }
}

function mathSubFormatCheck(pFreq, sFreq) {
  if (typeof pFreq === "number" && typeof sFreq === "number") {
    return toHz(pFreq - sFreq);
  } else if (typeof pFreq === "number" && typeof sFreq === "string") {
    const pFreqUnit = toHz(pFreq);
    return subFreqMath(pFreqUnit, sFreq);
  } else if (typeof pFreq === "string" && typeof sFreq === "number") {
    return subFreqMath(pFreq, toHz(sFreq));
  } else if (typeof pFreq === "string" && typeof sFreq === "string") {
    return subFreqMath(pFreq, sFreq);
  } else {
    throw new Error("string not valid");
  }
}

function subFreqMath(pFreq, sFreq) {
  const pHzUnit = freqParser(pFreq);
  const pHz = parseFloat(toHz(pFreq));
  const sHz = parseFloat(toHz(sFreq));
  const addedFreq = pHz - sHz;
  switch (pHzUnit[1]) {
    case 0:
      return toHz(addedFreq, pHzUnit[1]);
    case 1:
      return toKiloHz(addedFreq, pHzUnit[1]);
    case 2:
      return toMegaHz(addedFreq, pHzUnit[1]);
    case 3:
      return toGigaHz(addedFreq, pHzUnit[1]);
    case 4:
      return toTeraHz(addedFreq, pHzUnit[1]);
  }
}

function mathMulFormatCheck(freq, multiplier) {
  if (typeof freq === "number") {
    return toHz(freq * multiplier);
  } else if (typeof freq === "string") {
    return multFreqMath(freq, multiplier);
  }
}

function mathDivFormatCheck(freq, divisor) {
  if (typeof freq === "number") {
    return toHz(freq / divisor);
  } else if (typeof freq === "string") {
    return divFreqMath(freq, divisor);
  }
}

function multFreqMath(freq, multipler) {
  const freqUnit = freqParser(freq);
  const freqVal = parseFloat(toHz(freq));
  const multFreq = freqVal * multipler;
  switch (freqUnit[1]) {
    case 0:
      return toHz(multFreq, freqUnit[1]);
    case 1:
      return toKiloHz(multFreq, freqUnit[1]);
    case 2:
      return toMegaHz(multFreq, freqUnit[1]);
    case 3:
      return toGigaHz(multFreq, freqUnit[1]);
    case 4:
      return toTeraHz(multFreq, freqUnit[1]);
  }
}

function divFreqMath(freq, divisor) {
  const freqUnit = freqParser(freq);
  const freqVal = parseFloat(toHz(freq));
  const divFreq = freqVal / divisor;
  switch (freqUnit[1]) {
    case 0:
      return toHz(divFreq, freqUnit[1]);
    case 1:
      return toKiloHz(divFreq, freqUnit[1]);
    case 2:
      return toMegaHz(divFreq, freqUnit[1]);
    case 3:
      return toGigaHz(divFreq, freqUnit[1]);
    case 4:
      return toTeraHz(divFreq, freqUnit[1]);
  }
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
  const parsed = freqParser(freq);
  const indexDiff = parsed[1] - unitsArr.indexOf(units);
  const output = parsed[0] * Math.pow(1000, indexDiff);
  return (
    output.toFixed(unitsArr.indexOf(units) * 3).toString() +
    " " +
    unitsCapArr[unitsArr.indexOf(units)]
  );
}

//Assume the frequency is measured in hertz
function toNumberFreq(freq, units) {
  const indexVal = unitsArr.indexOf(units);
  const output = freq / Math.pow(1000, indexVal);
  return (
    output.toFixed(unitsArr.indexOf(units) * 3).toString() +
    " " +
    unitsCapArr[unitsArr.indexOf(units)]
  );
}
