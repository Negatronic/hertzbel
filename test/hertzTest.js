var assert = require("assert");
import {
  toKiloHz,
  addFreq,
  subFreq,
  multFreq,
  divFreq,
  convertFrequency,
} from "../src/hertz";

const expected = "2000.000 kHz";
const twoMhz = "2mhz";
const twoSpaMhz = "2 mhz";
const twoSpaMhz2 = "2  mhz";
const twoSpaMhz3 = "2 mhz ";
const twoCapMhz = "2mhZ";
const twoCapMhz2 = "2MHz";
const twoCapMhz3 = "2MHZ";

const twoNum = 2000000;

const twoHz = "2000000 hz";
const hzExpected = "4 Hz";
const twoKhz = "2000 khz";
const twoGhz = ".002 ghz";
const twoThz = ".000002 thz";

const testHz = "2 Hz";
const testKhz = "2 kHz";
const testMhz = "2 MHz";
const testGhz = "2 GHz";
const testThz = "2 THz";
describe("hertzTest", () => {
  describe("toKilo Test ", () => {
    var tests = [
      { args: [twoMhz], expected: "2000.000 kHz" },
      { args: [twoSpaMhz], expected: "2000.000 kHz" },
      { args: [twoSpaMhz2], expected: "2000.000 kHz" },
      { args: [twoSpaMhz3], expected: "2000.000 kHz" },
      { args: [twoCapMhz], expected: "2000.000 kHz" },
      { args: [twoCapMhz2], expected: "2000.000 kHz" },
      { args: [twoCapMhz3], expected: "2000.000 kHz" },
      { args: [twoNum], expected: "2000.000 kHz" },
      { args: [twoHz], expected: "2000.000 kHz" },
      { args: [twoKhz], expected: "2000.000 kHz" },
      { args: [twoMhz], expected: "2000.000 kHz" },
      { args: [twoGhz], expected: "2000.000 kHz" },
      { args: [twoThz], expected: "2000.000 kHz" },
    ];
    tests.forEach(function (tests) {
      it("should be " + tests.expected, () => {
        const result = toKiloHz(tests.args[0]);
        assert.equal(result, tests.expected);
      });
    });
  });
  describe("Hz Add", () => {
    var tests = [
      { args: [twoNum, twoNum], expected: "4000000 Hz" },
      { args: [twoNum, testHz], expected: "2000002 Hz" },
      { args: [testHz, twoNum], expected: "2000002 Hz" },
      { args: [testHz, testHz], expected: "4 Hz" },
      { args: [testHz, testKhz], expected: "2002 Hz" },
      { args: [testHz, testMhz], expected: "2000002 Hz" },
      { args: [testHz, testGhz], expected: "2000000002 Hz" },
      { args: [testHz, testThz], expected: "2000000000002 Hz" },
      { args: [testKhz, testHz], expected: "2.002 kHz" },
      { args: [testKhz, testKhz], expected: "4.000 kHz" },
      { args: [testKhz, testMhz], expected: "2002.000 kHz" },
      { args: [testKhz, testGhz], expected: "2000002.000 kHz" },
      { args: [testKhz, testThz], expected: "2000000002.000 kHz" },
      { args: [testMhz, testHz], expected: "2.000002 MHz" },
      { args: [testMhz, testKhz], expected: "2.002000 MHz" },
      { args: [testMhz, testMhz], expected: "4.000000 MHz" },
      { args: [testMhz, testGhz], expected: "2002.000000 MHz" },
      { args: [testMhz, testThz], expected: "2000002.000000 MHz" },
      { args: [testGhz, testHz], expected: "2.000000002 GHz" },
      { args: [testGhz, testKhz], expected: "2.000002000 GHz" },
      { args: [testGhz, testMhz], expected: "2.002000000 GHz" },
      { args: [testGhz, testGhz], expected: "4.000000000 GHz" },
      { args: [testGhz, testThz], expected: "2002.000000000 GHz" },
      { args: [testThz, testHz], expected: "2.000000000002 THz" },
      { args: [testThz, testKhz], expected: "2.000000002000 THz" },
      { args: [testThz, testMhz], expected: "2.000002000000 THz" },
      { args: [testThz, testGhz], expected: "2.002000000000 THz" },
      { args: [testThz, testThz], expected: "4.000000000000 THz" },
    ];
    tests.forEach(function (tests) {
      it("should be " + tests.expected, () => {
        const result = addFreq(tests.args[0], tests.args[1]);
        assert.equal(result, tests.expected);
      });
    });
  });
  describe("Hz Sub", () => {
    var tests = [
      { args: [twoNum, twoNum], expected: "0 Hz" },
      { args: [twoNum, testHz], expected: "1999998 Hz" },
      { args: [testHz, twoNum], expected: "-1999998 Hz" },
      { args: [testHz, testHz], expected: "0 Hz" },
      { args: [testHz, testKhz], expected: "-1998 Hz" },
      { args: [testHz, testMhz], expected: "-1999998 Hz" },
      { args: [testHz, testGhz], expected: "-1999999998 Hz" },
      { args: [testHz, testThz], expected: "-1999999999998 Hz" },
      { args: [testKhz, testHz], expected: "1.998 kHz" },
      { args: [testKhz, testKhz], expected: "0.000 kHz" },
      { args: [testKhz, testMhz], expected: "-1998.000 kHz" },
      { args: [testKhz, testGhz], expected: "-1999998.000 kHz" },
      { args: [testKhz, testThz], expected: "-1999999998.000 kHz" },
      { args: [testMhz, testHz], expected: "1.999998 MHz" },
      { args: [testMhz, testKhz], expected: "1.998000 MHz" },
      { args: [testMhz, testMhz], expected: "0.000000 MHz" },
      { args: [testMhz, testGhz], expected: "-1998.000000 MHz" },
      { args: [testMhz, testThz], expected: "-1999998.000000 MHz" },
      { args: [testGhz, testHz], expected: "1.999999998 GHz" },
      { args: [testGhz, testKhz], expected: "1.999998000 GHz" },
      { args: [testGhz, testMhz], expected: "1.998000000 GHz" },
      { args: [testGhz, testGhz], expected: "0.000000000 GHz" },
      { args: [testGhz, testThz], expected: "-1998.000000000 GHz" },
      { args: [testThz, testHz], expected: "1.999999999998 THz" },
      { args: [testThz, testKhz], expected: "1.999999998000 THz" },
      { args: [testThz, testMhz], expected: "1.999998000000 THz" },
      { args: [testThz, testGhz], expected: "1.998000000000 THz" },
      { args: [testThz, testThz], expected: "0.000000000000 THz" },
    ];
    tests.forEach(function (tests) {
      it("should be " + tests.expected, () => {
        const result = subFreq(tests.args[0], tests.args[1]);
        assert.equal(result, tests.expected);
      });
    });
  });
  describe("Hz Multiply", () => {
    var tests = [
      { args: [twoNum, 0], expected: "0 Hz" },
      { args: [twoNum, 1], expected: "2000000 Hz" },
      { args: [testHz, 1], expected: "2 Hz" },
      { args: [testKhz, 1.1], expected: "2.200 kHz" },
      { args: [testHz, 2], expected: "4 Hz" },
      { args: [testHz, 100], expected: "200 Hz" },
      { args: [testHz, 1000], expected: "2000 Hz" },
      { args: [testHz, 10000], expected: "20000 Hz" },
      { args: [testHz, 100000], expected: "200000 Hz" },
      { args: [testKhz, 2], expected: "4.000 kHz" },
      { args: [testMhz, 2], expected: "4.000000 MHz" },
      { args: [testGhz, 2], expected: "4.000000000 GHz" },
      { args: [testThz, 2], expected: "4.000000000000 THz" },
    ];
    tests.forEach(function (tests) {
      it("should be " + tests.expected, () => {
        const result = multFreq(tests.args[0], tests.args[1]);
        assert.equal(result, tests.expected);
      });
    });
  });
  describe("Hz Division", () => {
    var tests = [
      { args: [twoNum, 0], expected: "Infinity Hz" },
      { args: [twoNum, 1], expected: "2000000 Hz" },
      { args: [testHz, 1], expected: "2 Hz" },
      { args: [testKhz, 1.1], expected: "1.818 kHz" },
      { args: [testHz, 2], expected: "1 Hz" },
      { args: [testHz, 100], expected: "0 Hz" },
      { args: [testKhz, 100], expected: "0.020 kHz" },
      { args: [testKhz, 1000], expected: "0.002 kHz" },
      { args: [testKhz, 10000], expected: "0.000 kHz" },
      { args: [testKhz, 100000], expected: "0.000 kHz" },
      { args: [testKhz, 2], expected: "1.000 kHz" },
      { args: [testMhz, 2], expected: "1.000000 MHz" },
      { args: [testGhz, 2], expected: "1.000000000 GHz" },
      { args: [testThz, 2], expected: "1.000000000000 THz" },
    ];
    tests.forEach(function (tests) {
      it("should be " + tests.expected, () => {
        const result = divFreq(tests.args[0], tests.args[1]);
        assert.equal(result, tests.expected);
      });
    });
  });

  describe("convertFreqeuncy", () => {
    var tests = [
      { args: [testHz, "Hz"], expected: "2 Hz" },
      { args: [testHz, "kHz"], expected: "0.002 kHz" },
      { args: [testHz, "MHz"], expected: "0.000002 MHz" },
      { args: [testHz, "GHz"], expected: "0.000000002 GHz" },
      { args: [testHz, "THz"], expected: "0.000000000002 THz" },
      { args: [testKhz, "Hz"], expected: "2000 Hz" },
      { args: [testKhz, "kHz"], expected: "2.000 kHz" },
      { args: [testKhz, "MHz"], expected: "0.002000 MHz" },
      { args: [testKhz, "GHz"], expected: "0.000002000 GHz" },
      { args: [testKhz, "THz"], expected: "0.000000002000 THz" },
      { args: [testMhz, "Hz"], expected: "2000000 Hz" },
      { args: [testMhz, "kHz"], expected: "2000.000 kHz" },
      { args: [testMhz, "MHz"], expected: "2.000000 MHz" },
      { args: [testMhz, "GHz"], expected: "0.002000000 GHz" },
      { args: [testMhz, "THz"], expected: "0.000002000000 THz" },
      { args: [testGhz, "Hz"], expected: "2000000000 Hz" },
      { args: [testGhz, "kHz"], expected: "2000000.000 kHz" },
      { args: [testGhz, "MHz"], expected: "2000.000000 MHz" },
      { args: [testGhz, "GHz"], expected: "2.000000000 GHz" },
      { args: [testGhz, "THz"], expected: "0.002000000000 THz" },
      { args: [testThz, "Hz"], expected: "2000000000000 Hz" },
      { args: [testThz, "kHz"], expected: "2000000000.000 kHz" },
      { args: [testThz, "MHz"], expected: "2000000.000000 MHz" },
      { args: [testThz, "GHz"], expected: "2000.000000000 GHz" },
      { args: [testThz, "THz"], expected: "2.000000000000 THz" },
    ];
    tests.forEach(function (tests) {
      it("should be " + tests.expected, () => {
        const result = convertFrequency(tests.args[0], tests.args[1]);
        assert.equal(result, tests.expected);
      });
    });
  });
});
