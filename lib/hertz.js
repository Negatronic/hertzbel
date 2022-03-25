"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toHz = toHz;
exports.toKiloHz = toKiloHz;
exports.toMegaHz = toMegaHz;
exports.toGigaHz = toGigaHz;
exports.toTeraHz = toTeraHz;
exports.convertFrequency = convertFrequency;
exports.addFreq = addFreq;
exports.subFreq = subFreq;
exports.multFreq = multFreq;
exports.divFreq = divFreq;

var _parsing = require("./parsing");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var unitsArr = ['hz', 'khz', 'mhz', 'ghz', 'thz'];
var unitsCapArr = ['Hz', 'kHz', 'MHz', 'GHz', 'THz'];

function toHz(freq, toDec) {
  var units = unitsArr[0];
  return formatFreqCheck(freq, units, toDec);
}

function toKiloHz(freq) {
  var toDec = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 8;
  var units = unitsArr[1];
  return formatFreqCheck(freq, units, toDec);
}

function toMegaHz(freq) {
  var toDec = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 8;
  var units = unitsArr[2];
  return formatFreqCheck(freq, units, toDec);
}

function toGigaHz(freq) {
  var toDec = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 8;
  var units = unitsArr[3];
  return formatFreqCheck(freq, units, toDec);
}

function toTeraHz(freq) {
  var toDec = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 8;
  var units = unitsArr[4];
  return formatFreqCheck(freq, units, toDec);
}

function convertFrequency(freq, toUnits) {
  var toDec = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 8;
  var toArr = unitsArr.indexOf(toUnits.toLowerCase());

  switch (toArr) {
    case 0:
      return toHz(freq, toDec);

    case 1:
      return toKiloHz(freq, toDec);

    case 2:
      return toMegaHz(freq, toDec);

    case 3:
      return toGigaHz(freq, toDec);

    case 4:
      return toTeraHz(freq, toDec);
  }
}

function addFreq(pFreq, sFreq) {
  var toDec = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 8;
  return mathAddFormatCheck(pFreq, sFreq, toDec);
}

function subFreq(pFreq, sFreq) {
  var toDec = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 8;
  return mathSubFormatCheck(pFreq, sFreq, toDec);
}

function multFreq(freq, multiplier) {
  var toDec = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 8;
  return mathMulFormatCheck(freq, multiplier, toDec);
}

function divFreq(freq, divisor) {
  var toDec = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 8;
  return mathDivFormatCheck(freq, divisor, toDec);
}

function mathAddFormatCheck(pFreq, sFreq, toDec) {
  if (typeof pFreq === 'number' && typeof sFreq === 'number') {
    return toHz(pFreq + sFreq, toDec);
  } else if (typeof pFreq === 'number' && typeof sFreq === 'string') {
    var pFreqUnit = toHz(pFreq);
    return addFreqMath(pFreqUnit, sFreq, toDec);
  } else if (typeof pFreq === 'string' && typeof sFreq === 'number') {
    return addFreqMath(pFreq, toHz(sFreq), toDec);
  } else if (typeof pFreq === 'string' && typeof sFreq === 'string') {
    return addFreqMath(pFreq, sFreq, toDec);
  } else {
    throw new Error('string not valid');
  }
}

function addFreqMath(pFreq, sFreq, toDec) {
  var pHzUnit = (0, _parsing.freqParser)(pFreq);
  var pHz = parseFloat(toHz(pFreq));
  var sHz = parseFloat(toHz(sFreq));
  var addedFreq = pHz + sHz;

  switch (pHzUnit[1]) {
    case 0:
      return toHz(addedFreq, toDec);

    case 1:
      return toKiloHz(addedFreq, toDec);

    case 2:
      return toMegaHz(addedFreq, toDec);

    case 3:
      return toGigaHz(addedFreq, toDec);

    case 4:
      return toTeraHz(addedFreq, toDec);
  }
}

function mathSubFormatCheck(pFreq, sFreq, toDec) {
  if (typeof pFreq === 'number' && typeof sFreq === 'number') {
    return toHz(pFreq - sFreq, toDec);
  } else if (typeof pFreq === 'number' && typeof sFreq === 'string') {
    var pFreqUnit = toHz(pFreq);
    return subFreqMath(pFreqUnit, sFreq, toDec);
  } else if (typeof pFreq === 'string' && typeof sFreq === 'number') {
    return subFreqMath(pFreq, toHz(sFreq), toDec);
  } else if (typeof pFreq === 'string' && typeof sFreq === 'string') {
    return subFreqMath(pFreq, sFreq, toDec);
  } else {
    throw new Error('string not valid');
  }
}

function subFreqMath(pFreq, sFreq, toDec) {
  var pHzUnit = (0, _parsing.freqParser)(pFreq);
  var pHz = parseFloat(toHz(pFreq));
  var sHz = parseFloat(toHz(sFreq));
  var addedFreq = pHz - sHz;

  switch (pHzUnit[1]) {
    case 0:
      return toHz(addedFreq, toDec);

    case 1:
      return toKiloHz(addedFreq, toDec);

    case 2:
      return toMegaHz(addedFreq, toDec);

    case 3:
      return toGigaHz(addedFreq, toDec);

    case 4:
      return toTeraHz(addedFreq, toDec);
  }
}

function mathMulFormatCheck(freq, multiplier, toDec) {
  if (typeof freq === 'number') {
    return toHz(freq * multiplier, toDec);
  } else if (typeof freq === 'string') {
    return multFreqMath(freq, multiplier, toDec);
  }
}

function mathDivFormatCheck(freq, divisor, toDec) {
  if (typeof freq === 'number') {
    return toHz(freq / divisor, toDec);
  } else if (typeof freq === 'string') {
    return divFreqMath(freq, divisor, toDec);
  }
}

function multFreqMath(freq, multipler, toDec) {
  var freqUnit = (0, _parsing.freqParser)(freq);
  var freqVal = parseFloat(toHz(freq));
  var multFreq = freqVal * multipler;

  switch (freqUnit[1]) {
    case 0:
      return toHz(multFreq, toDec);

    case 1:
      return toKiloHz(multFreq, toDec);

    case 2:
      return toMegaHz(multFreq, toDec);

    case 3:
      return toGigaHz(multFreq, toDec);

    case 4:
      return toTeraHz(multFreq, toDec);
  }
}

function divFreqMath(freq, divisor, toDec) {
  var freqUnit = (0, _parsing.freqParser)(freq);
  var freqVal = parseFloat(toHz(freq, toDec));
  var divFreq = freqVal / divisor;

  switch (freqUnit[1]) {
    case 0:
      return toHz(divFreq, toDec);

    case 1:
      return toKiloHz(divFreq, toDec);

    case 2:
      return toMegaHz(divFreq, toDec);

    case 3:
      return toGigaHz(divFreq, toDec);

    case 4:
      return toTeraHz(divFreq, toDec);
  }
}

function formatFreqCheck(freq, units, toDec) {
  var freqType = _typeof(freq);

  if (freqType === 'number') {
    return toNumberFreq(freq, units, toDec);
  } else if (freqType === 'string') {
    return toStringFreq(freq, units, toDec);
  }
}

function toStringFreq(freq, units, toDec) {
  var parsed = (0, _parsing.freqParser)(freq);
  var indexDiff = parsed[1] - unitsArr.indexOf(units);
  var output = (parsed[0] * Math.pow(1000, indexDiff)).toFixed(toDec);
  return output.toString() + ' ' + unitsCapArr[unitsArr.indexOf(units)];
} //Assume the frequency is measured in hertz


function toNumberFreq(freq, units, toDec) {
  var indexVal = unitsArr.indexOf(units);
  var output = (freq / Math.pow(1000, indexVal)).toFixed(toDec);
  return output.toString() + ' ' + unitsCapArr[unitsArr.indexOf(units)];
}