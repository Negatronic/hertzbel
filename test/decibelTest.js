var assert = require("assert");
import { toDbuw, toDbm, toDbw } from "../src/decibel";

// const expected = "3 dBm";

const twoMw = "2mw";
const twoSpaMw = "2 mw";
const twoSpaMw2 = "2  mw";
const twoSpaMw3 = "2 mw ";
const twoCapMw = "2mW";
const twoCapMw2 = "2Mw";
const twoCapMw3 = "2MW";

const twoNum = 2;

const twoUw = "2 uW";
const twoW = "2 W";

describe("decibelTest", () => {
  //   describe("db conversion: no space", () => {
  //     it("should be 1 dbm", () => {
  //       const result = toDbm(twoMw);
  //       assert.equal(result, expected);
  //     });
  //   });
  describe("toDBMTest", () => {
    var tests = [
      { args: [twoMw], expected: "3 dBm" },
      { args: [twoSpaMw], expected: "3 dBm" },
      { args: [twoSpaMw2], expected: "3 dBm" },
      { args: [twoSpaMw3], expected: "3 dBm" },
      { args: [twoCapMw], expected: "3 dBm" },
      { args: [twoCapMw2], expected: "3 dBm" },
      { args: [twoCapMw3], expected: "3 dBm" },
      { args: [twoCapMw3], expected: "3 dBm" },
      { args: [twoUw], expected: "-27 dBm" },
      { args: [twoNum], expected: "3 dBm" },
      { args: [0], expected: "-Infinity dBm" },
      { args: [twoW], expected: "33 dBm" },
    ];
    tests.forEach(function (tests) {
      it("should be " + tests.expected, () => {
        const result = toDbm(tests.args[0]);
        assert.equal(result, tests.expected);
      });
    });
  });
});
