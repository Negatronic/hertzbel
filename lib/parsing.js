"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.freqParser = freqParser;
exports.wattParser = wattParser;
exports.decibelParser = decibelParser;
var unitsArr = ["hz", "khz", "mhz", "ghz", "thz"];
var wArr = ["uw", "mw", "w"];
var dbArr = ["dbuw", "dbm", "dbw"];

function freqParser(freq) {
  var freqStrip = freq.replace(/\s/g, "").toLowerCase();
  var freqVal = parseFloat(freqStrip);
  var freqUnit = freqStrip.match(/[a-zA-Z]+/g).toString();
  var unitIndex = unitsArr.indexOf(freqUnit);

  if (freqStrip === null || freqStrip.match(/[a-zA-Z]+/g) === null) {
    throw new Error("Incomplete string");
  } // if (freqStrip.match(/[a-zA-Z]+/g) === null) {
  //   throw new Error("Incomplete string");
  // }


  if (unitIndex > -1) {
    return [freqVal, unitIndex];
  } else {
    throw new Error("String not valid");
  }
}

function wattParser(power) {
  var powerStrip = power.replace(/\s/g, "").toLowerCase();
  var powerVal = parseFloat(powerStrip);
  var powerUnit = powerStrip.match(/[a-zA-Z]+/g).toString();
  var unitIndex = wArr.indexOf(powerUnit);

  if (powerStrip === null || powerStrip.match(/[a-zA-Z]+/g) === null) {
    throw new Error("Incomplete string");
  }

  if (unitIndex > -1) {
    return [powerVal, unitIndex];
  } else {
    throw new Error("String not valid");
  }
}

function decibelParser(power) {
  var powerStrip = power.replace(/\s/g, "").toLowerCase();
  var powerVal = parseFloat(powerStrip);
  var powerUnit = powerStrip.match(/[a-zA-Z]+/g).toString();
  var unitIndex = dbArr.indexOf(powerUnit);

  if (powerStrip === null || powerStrip.match(/[a-zA-Z]+/g) === null) {
    throw new Error("Incomplete string");
  }

  if (unitIndex > -1) {
    return [powerVal, unitIndex];
  } else {
    throw new Error("String not valid");
  }
}