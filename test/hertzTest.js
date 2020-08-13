var assert = require("assert");
import { toKiloHz } from "../src/hertz";
// import { expect } from "chai";

// describe("Frequency Test", () => {
//   describe("getKiloHz() string1", function () {
//     it("should return 123 khz when 123khz is entered", function () {
//       assert.equal(toKiloHz("123khz"), "123 khz");
//     });
//   });

//   describe("getKiloHz() string2", function () {
//     it("should return 123 khz when 123khz is entered", function () {
//       assert.equal(toKiloHz("123khz"), "123 khz");
//     });
//   });

//   describe("getKiloHz() string3", () => {
//     it("description", () => {
//       const result = toKiloHz("1mhz");
//       const expectedResult = "1000 khz";
//       assert.equal(result, expectedResult);
//     });
//   });
// });

describe("hertzTest", () => {
  const twoMhz = "2mhz";
  const twoSpaMhz = "2 mhz";
  const twoSpaMhz2 = "2  mhz";
  const twoSpaMhz3 = "2 mhz ";
  const twoCapMhz = "2mhZ";
  const twoCapMhz2 = "2MHz";
  const twoCapMhz3 = "2MHZ";

  const twoNum = 2;

  const twoKhz = "2 khz";
  const twoHz = "2 hz";
  const twoGhz = "2 ghz";
  const twoThz = "2 thz";

  describe("nospace", () => {
    it("should be 2 MHz");
  });
});
