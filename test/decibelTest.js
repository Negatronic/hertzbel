var assert = require('assert');
import { toDbuw, toDbm, toDbw, toUw, toMw, toW } from '../src/decibel';

const twoMw = '2mw';
const twoSpaMw = '2 mw';
const twoSpaMw2 = '2  mw';
const twoSpaMw3 = '2 mw ';
const twoCapMw = '2mW';
const twoCapMw2 = '2Mw';
const twoCapMw3 = '2MW';

const twoUw = '2 uW';
const twoW = '2 W';

const twoNum = 2;

const twoDbm = '2dBm';
const twoSpaDbm = '2 dbm';
const twoSpaDbm2 = '2  dbm';
const twoSpaDbm3 = '2 dbm ';
const twoCapDbm = '2dbM';
const twoCapDbm2 = '2dBm';
const twoCapDbm3 = '2dBM';
const twoCapDbm4 = '2Dbm';
const twoCapDbm5 = '2DbM';
const twoCapDbm6 = '2DBm';
const twoCapDbm7 = '2DBM';

const zeroDbm = '0 dBm';
const twoDbuw = '2 dBuW';
const twoDbw = '2 dBw';

describe('decibel Test', () => {
  describe('toDBM Test', () => {
    var tests = [
      { args: [twoMw], expected: '3 dBm' },
      { args: [twoSpaMw], expected: '3 dBm' },
      { args: [twoSpaMw2], expected: '3 dBm' },
      { args: [twoSpaMw3], expected: '3 dBm' },
      { args: [twoCapMw], expected: '3 dBm' },
      { args: [twoCapMw2], expected: '3 dBm' },
      { args: [twoCapMw3], expected: '3 dBm' },
      { args: [twoCapMw3], expected: '3 dBm' },
      { args: [twoUw], expected: '-27 dBm' },
      { args: [twoNum], expected: '3 dBm' },
      { args: [0], expected: '-Infinity dBm' },
      { args: [twoW], expected: '33 dBm' },
    ];
    tests.forEach(function (tests) {
      it('should be ' + tests.expected, () => {
        const result = toDbm(tests.args[0]);
        assert.equal(result, tests.expected);
      });
    });
  });
  describe('toDbuw Test', () => {
    var tests = [
      { args: [twoUw], expected: '3 dBuW' },
      { args: [twoMw], expected: '33 dBuW' },
      { args: [twoW], expected: '63 dBuW' },
    ];
    tests.forEach(function (tests) {
      it('should be ' + tests.expected, () => {
        const result = toDbuw(tests.args[0]);
        assert.equal(result, tests.expected);
      });
    });
  });
  describe('toDbw Test', () => {
    var tests = [
      { args: [twoUw], expected: '-57 dBW' },
      { args: [twoMw], expected: '-27 dBW' },
      { args: [twoW], expected: '3 dBW' },
    ];
    tests.forEach(function (tests) {
      it('should be ' + tests.expected, () => {
        const result = toDbw(tests.args[0]);
        assert.equal(result, tests.expected);
      });
    });
  });
  describe('toMw Test', () => {
    var tests = [
      { args: [twoDbm], expected: '1.5848931924611136 mW' },
      { args: [twoSpaDbm], expected: '1.5848931924611136 mW' },
      { args: [twoSpaDbm2], expected: '1.5848931924611136 mW' },
      { args: [twoSpaDbm3], expected: '1.5848931924611136 mW' },
      { args: [twoCapDbm], expected: '1.5848931924611136 mW' },
      { args: [twoCapDbm2], expected: '1.5848931924611136 mW' },
      { args: [twoCapDbm3], expected: '1.5848931924611136 mW' },
      { args: [twoCapDbm4], expected: '1.5848931924611136 mW' },
      { args: [twoCapDbm5], expected: '1.5848931924611136 mW' },
      { args: [twoCapDbm6], expected: '1.5848931924611136 mW' },
      { args: [twoCapDbm7], expected: '1.5848931924611136 mW' },
      { args: [zeroDbm], expected: '1 mW' },
      { args: [twoDbuw], expected: '0.001584893192461114 mW' },
      { args: [twoDbw], expected: '1584.893192461114 mW' },
    ];
    tests.forEach(function (tests) {
      it('should be ' + tests.expected, () => {
        const result = toMw(tests.args[0]);
        assert.equal(result, tests.expected);
      });
    });
  });
  describe('toUw Test', () => {
    var tests = [
      { args: [twoDbuw], expected: '1.5848931924611136 uW' },
      { args: [twoDbm], expected: '1584.893192461114 uW' },
      { args: [twoDbw], expected: '1584893.1924611141 uW' },
    ];
    tests.forEach(function (tests) {
      it('should be ' + tests.expected, () => {
        const result = toUw(tests.args[0]);
        assert.equal(result, tests.expected);
      });
    });
  });
  describe('toW Test', () => {
    var tests = [
      { args: [twoDbuw], expected: '0.000001584893192461114 W' },
      { args: [twoDbm], expected: '0.001584893192461114 W' },
      { args: [twoDbw], expected: '1.5848931924611136 W' },
    ];
    tests.forEach(function (tests) {
      it('should be ' + tests.expected, () => {
        const result = toW(tests.args[0]);
        assert.equal(result, tests.expected);
      });
    });
  });
});
