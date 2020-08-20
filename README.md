# hertzbel.js

## Hertz Calculations

Hertzbel has several frequency related calculations. Users may enter a string or a number as params into the functions.

### Note: strings must be formatted with convential Hz units (Hz, kHz, MHz, GHz, THz).

### Note: Numbers will always be considered to be in Hz.

### Frequency Conversions

Translate any frequency from Hz, KHz, MHz, GHz, THz to another.

### Example: `toHz({string|number})`

```js
import {toHz} from "hertzbel.js";
toHz("100 kHz");
-> "100000 Hz"
```

### Frequncy Conversion Functions

- `toHz({string|number})`
- `toKiloHz({string|number})`
- `toMegaGz({string|number})`
- `toGigaHz({string|number})`
- `toTeraHz({string|number})`

### Frequency Addition

Summation function of two frequencies. Frequency inputs may be of any combination of units() e.g., Hz + THz). Leading parameter will always determine the resulting units.

### `addFreq({string|number},{string|number})`

```js
import {addFreq} from "hertzbel.js";
addFreq("100kHz", "1 MHz");
-> "1100.000 kHz"
```

### Frequency Subtraction

Function that calculates the difference between two frequencies. Inputs may be of any combination. Leading parameter will always determine the resulting units.

### `subFreq({string|number},{string|number})`

```js
import {subFreq} from "hertzbel.js";
subFreq("10 MHZ", "500 khz");
-> "9.500000 MHz"
```

### Frequency Multiplcation

Multiplies a frequency against an integer.

### `multFreq({string|number}, {int})`

```js
import {multFreq} from "hertzbel.js";
multFreq("1.25ghz", 3);
-> "3.750000000 GHz"
```

### Frequency Division

Divides a frequency by an integer.

### `divFreq({string|number}, {int})`

```js
import {divFreq} from "hertzbel.js";
divFreq("3 GHz", 601);
-> 0.004991681 GHz
```
