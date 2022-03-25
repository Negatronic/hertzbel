"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toDbuw = toDbuw;
exports.toDbm = toDbm;
exports.toDbw = toDbw;
exports.toUw = toUw;
exports.toMw = toMw;
exports.toW = toW;

var _parsing = require("./parsing");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var wArr = ["uW", "mW", "W"];
var dbArr = ["dBuW", "dBm", "dBW"];

function toDbuw(power) {
  return formatDecibelCheck(power, "dBuW");
}

function toDbm(power) {
  return formatDecibelCheck(power, "dBm");
}

function toDbw(power) {
  return formatDecibelCheck(power, "dBW");
}

function toUw(power) {
  return formatWattCheck(power, "uW");
}

function toMw(power) {
  return formatWattCheck(power, "mW");
}

function toW(power) {
  return formatWattCheck(power, "W");
}

function formatDecibelCheck(power, units) {
  var powerType = _typeof(power);

  if (powerType === "number") {
    return toNumberDecibel(power, units);
  } else if (powerType === "string") {
    return toStringDecibel(power, units);
  } else {
    new Error("invalid type");
  }
}

function toNumberDecibel(power, units) {
  var indexDiff = 1 - dbArr.indexOf(units);
  var output = 10 * Math.log10(power) + indexDiff * 30;
  return output.toFixed(0) + " " + units;
}

function toStringDecibel(power, units) {
  var parsed = (0, _parsing.wattParser)(power);
  var indexDiff = parsed[1] - dbArr.indexOf(units);
  var output = 10 * Math.log10(parsed[0]) + indexDiff * 30;
  return output.toFixed(0) + " " + units;
}

function formatWattCheck(power, units) {
  var powerType = _typeof(power);

  if (powerType === "string") {
    return toStringWatt(power, units);
  } else {
    throw new Error("invalid type");
  }
}

function toStringWatt(power, units) {
  var parsed = (0, _parsing.decibelParser)(power);
  var indexDiff = parsed[1] - wArr.indexOf(units);
  var output = Math.pow(10, (parsed[0] + 30 * indexDiff) / 10);
  return output + " " + units;
}