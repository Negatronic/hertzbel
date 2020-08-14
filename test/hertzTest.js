var assert = require("assert");
import { toKiloHz, addFreq, subFreq } from "../src/hertz";

describe("hertzTest", () => {
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

  const sumHz = "2 Hz";
  const sumKhz = "2 kHz";
  const sumMhz = "2 MHz";
  const sumGhz = "2 GHz";
  const sumThz = "2 THz";

  describe("freq conversion: no space", () => {
    it("should be 2000.000 kHz", () => {
      const result = toKiloHz(twoMhz);
      assert.equal(result, expected);
    });
  });
  describe("freq conversion: 1 space", () => {
    it("should be 2000.000 kHz", () => {
      const result = toKiloHz(twoSpaMhz);
      assert.equal(result, expected);
    });
  });
  describe("freq conversion: 2 space", () => {
    it("should be 2000.000 kHz", () => {
      const result = toKiloHz(twoSpaMhz2);
      assert.equal(result, expected);
    });
  });
  describe("freq conversion: end space", () => {
    it("should be 2000.000 kHz", () => {
      const result = toKiloHz(twoSpaMhz3);
      assert.equal(result, expected);
    });
  });
  describe("freq conversion: to correct cap 1", () => {
    it("should be 2000.000 kHz", () => {
      const result = toKiloHz(twoCapMhz);
      assert.equal(result, expected);
    });
  });
  describe("freq conversion: to correct cap 2", () => {
    it("should be 2000.000 kHz", () => {
      const result = toKiloHz(twoCapMhz2);
      assert.equal(result, expected);
    });
  });
  describe("freq conversion: to correct cap 3", () => {
    it("should be 2000.000 kHz", () => {
      const result = toKiloHz(twoCapMhz3);
      assert.equal(result, expected);
    });
  });
  describe("freq conversion: from number", () => {
    it("should be 2000.000 kHz", () => {
      const result = toKiloHz(twoNum);
      assert.equal(result, expected);
    });
  });
  describe("From Hz to kHz", () => {
    it("should be 2000.000 kHz", () => {
      const result = toKiloHz(twoHz);
      assert.equal(result, expected);
    });
  });
  describe("From kHz to kHz", () => {
    it("should be 2000.000 kHz", () => {
      const result = toKiloHz(twoKhz);
      assert.equal(result, expected);
    });
  });
  describe("From MHz to kHz", () => {
    it("should be 2000.000 kHz", () => {
      const result = toKiloHz(twoMhz);
      assert.equal(result, expected);
    });
  });
  describe("From GHz to kHz", () => {
    it("should be 2000.000 kHz", () => {
      const result = toKiloHz(twoGhz);
      assert.equal(result, expected);
    });
  });
  describe("From THz to kHz", () => {
    it("should be 2000.000 kHz", () => {
      const result = toKiloHz(twoThz);
      assert.equal(result, expected);
    });
  });

  describe("Hz Add", () => {
    var tests = [
      { args: [twoNum, twoNum], expected: "4000000 Hz" },
      { args: [twoNum, sumHz], expected: "2000002 Hz" },
      { args: [sumHz, twoNum], expected: "2000002 Hz" },
      { args: [sumHz, sumHz], expected: "4 Hz" },
      { args: [sumHz, sumKhz], expected: "2002 Hz" },
      { args: [sumHz, sumMhz], expected: "2000002 Hz" },
      { args: [sumHz, sumGhz], expected: "2000000002 Hz" },
      { args: [sumHz, sumThz], expected: "2000000000002 Hz" },
      { args: [sumKhz, sumHz], expected: "2.002 kHz" },
      { args: [sumKhz, sumKhz], expected: "4.000 kHz" },
      { args: [sumKhz, sumMhz], expected: "2002.000 kHz" },
      { args: [sumKhz, sumGhz], expected: "2000002.000 kHz" },
      { args: [sumKhz, sumThz], expected: "2000000002.000 kHz" },
      { args: [sumMhz, sumHz], expected: "2.000002 MHz" },
      { args: [sumMhz, sumKhz], expected: "2.002000 MHz" },
      { args: [sumMhz, sumMhz], expected: "4.000000 MHz" },
      { args: [sumMhz, sumGhz], expected: "2002.000000 MHz" },
      { args: [sumMhz, sumThz], expected: "2000002.000000 MHz" },
      { args: [sumGhz, sumHz], expected: "2.000000002 GHz" },
      { args: [sumGhz, sumKhz], expected: "2.000002000 GHz" },
      { args: [sumGhz, sumMhz], expected: "2.002000000 GHz" },
      { args: [sumGhz, sumGhz], expected: "4.000000000 GHz" },
      { args: [sumGhz, sumThz], expected: "2002.000000000 GHz" },
      { args: [sumThz, sumHz], expected: "2.000000000002 THz" },
      { args: [sumThz, sumKhz], expected: "2.000000002000 THz" },
      { args: [sumThz, sumMhz], expected: "2.000002000000 THz" },
      { args: [sumThz, sumGhz], expected: "2.002000000000 THz" },
      { args: [sumThz, sumThz], expected: "4.000000000000 THz" },
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
      { args: [twoNum, sumHz], expected: "1999998 Hz" },
      { args: [sumHz, twoNum], expected: "-1999998 Hz" },
      { args: [sumHz, sumHz], expected: "0 Hz" },
      { args: [sumHz, sumKhz], expected: "-1998 Hz" },
      { args: [sumHz, sumMhz], expected: "-1999998 Hz" },
      { args: [sumHz, sumGhz], expected: "-1999999998 Hz" },
      { args: [sumHz, sumThz], expected: "-1999999999998 Hz" },
      { args: [sumKhz, sumHz], expected: "1.998 kHz" },
      { args: [sumKhz, sumKhz], expected: "0.000 kHz" },
      { args: [sumKhz, sumMhz], expected: "-1998.000 kHz" },
      { args: [sumKhz, sumGhz], expected: "-1999998.000 kHz" },
      { args: [sumKhz, sumThz], expected: "-1999999998.000 kHz" },
      { args: [sumMhz, sumHz], expected: "1.999998 MHz" },
      { args: [sumMhz, sumKhz], expected: "1.998000 MHz" },
      { args: [sumMhz, sumMhz], expected: "0.000000 MHz" },
      { args: [sumMhz, sumGhz], expected: "-1998.000000 MHz" },
      { args: [sumMhz, sumThz], expected: "-1999998.000000 MHz" },
      { args: [sumGhz, sumHz], expected: "1.999999998 GHz" },
      { args: [sumGhz, sumKhz], expected: "1.999998000 GHz" },
      { args: [sumGhz, sumMhz], expected: "1.998000000 GHz" },
      { args: [sumGhz, sumGhz], expected: "0.000000000 GHz" },
      { args: [sumGhz, sumThz], expected: "-1998.000000000 GHz" },
      { args: [sumThz, sumHz], expected: "1.999999999998 THz" },
      { args: [sumThz, sumKhz], expected: "1.999999998000 THz" },
      { args: [sumThz, sumMhz], expected: "1.999998000000 THz" },
      { args: [sumThz, sumGhz], expected: "1.998000000000 THz" },
      { args: [sumThz, sumThz], expected: "0.000000000000 THz" },
    ];
    tests.forEach(function (tests) {
      it("should be " + tests.expected, () => {
        const result = subFreq(tests.args[0], tests.args[1]);
        assert.equal(result, tests.expected);
      });
    });
  });
});
//ready for mult testing
