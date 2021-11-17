# hertzbel

![npm](https://img.shields.io/npm/v/hertzbel)
![npm](https://img.shields.io/npm/dw/hertzbel)
![NPM](https://img.shields.io/npm/l/hertzbel)

## Installation

`npm add hertzbel` or `yarn add hertzbel`

## Introduction

`hertzbel` is a javascript library created to handle frequency related calculations and conversions, and a comprehensive of decibel calculations.

In telecommunications, frequencies and decibels go hand in hand. In the frequency domain, using decibel logarithmic formulas in place of Volts or Watts allows observers to see very high power levels and minuscule power levels on the same graph. To learn more about the usefulness of decibels visit [wikipedia](<https://en.wikipedia.org/wiki/Decibel#:~:text=The%20decibel%20(symbol%3A%20dB),level%20or%20field%20level%2C%20respectively.>)

The Hertzbel library was designed specifically to be used with spectrum analyzer data, though these calculations will assist in any relatable fields.

## Changelog

- `1.0.7`: added toFixed
- `1.0.5`: removed restriction to number of decimals
- `1.0.3`: added convertFrequency to Hertz
- `1.0.0`: initial launch of Hertzbel.

## Hertz Functions

Hertzbel has several frequency related calculations. Users may enter a string or a number as parameters into the functions.

#### Note: strings must be formatted with conventional Hz units (Hz, kHz, MHz, GHz, THz).

#### Note: Numbers will always be considered to be in Hz.

#### Frequency Conversions

Translate any frequency from Hz, kHz, MHz, GHz, THz to another.

All frequency functions have an optional toDec which set the number of decimals (default is 8).

### Example: `toHz({string|number}, {toDec})`

```js
import {toHz} from "hertzbel";
toHz("100 kHz", 4);
-> "100000.0000 Hz"
```

### Frequncy Conversion Functions

- `toHz({string|number}, {toDec})`
- `toKiloHz({string|number}, {toDec})`
- `toMegaGz({string|number}, {toDec})`
- `toGigaHz({string|number}, {toDec})`
- `toTeraHz({string|number}, {toDec})`
- `convertFrequency({string|number}, {UnitString}, {toDec})`

### Frequency Addition

Summation function of two frequencies. Frequency inputs may be of any combination of units() (e.g., Hz + THz). The leading parameter will always determine the resulting units.

### `addFreq({string|number},{string|number})`

```js
import {addFreq} from "hertzbel";
addFreq("100kHz", "1 MHz");
-> "1100.00000000 kHz"
```

### Frequency Subtraction

The function that calculates the difference between two frequencies. Inputs may be of any combination. The leading parameter will always determine the resulting units.

### `subFreq({string|number},{string|number}, {toDec})`

```js
import {subFreq} from "hertzbel";
subFreq("10 MHZ", "500 khz", 3);
-> "9.500 MHz"
```

### Frequency Multiplcation

Multiplies a frequency against an integer.

### `multFreq({string|number}, {int}, {toDec})`

```js
import {multFreq} from "hertzbel";
multFreq("1.25ghz", 3, 9);
-> "3.750000000 GHz"
```

### Frequency Division

Divides a frequency by an integer.

### `divFreq({string|number}, {int}, {toDec})`

```js
import {divFreq} from "hertzbel";
divFreq("3 GHz", 601, 9);
-> 0.004991681 GHz
```

## Decibel Functions

Hertzbel's decibel functionality was created to relieve the difficult and time-consuming decibel calculations.

### From Watts to Decibel Conversion

Translates units from Watts to decibels. Users may enter a string or a number as parameters into the functions

#### Note: Strings must be formatted with uW, mW, or W.

#### Note: Numbers will always be considered to be in mW.

### Example: `todBm({string|number})`

```js
import {todBm} from "hertzbel";
toDbm("4 mW");
-> "6 dBm"
```

### Watt to Decibel Conversion Functions

- `toDbuW({string|number})`
- `toDbm({string|number})`
- `toDbw({string|number})`

### From Decibel to Watt Conversion

Translates values from decibels to Watts. Only strings may be used.

#### Note: strings must be formatted with dBuw, dBm, or dBW.

### Example: `toW({string})`

```js
import {toW} from "hertzbel";
toW("33 dBm");
-> "1.9952623149688795 W";
```

### Decibel to Watt Conversion Functions

- `toUw({string})`
- `toMw({string})`
- `toW({string})`

## Roadmap

Expected functionality in the future

- Volts to decibel
- Decibel addition
- Decibel subtraction
- Decibel to Decibel conversion
- Wavelength to frequency
- Frequency to wavelength
- Frequency bucket array
