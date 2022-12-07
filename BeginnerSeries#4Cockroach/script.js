/*

DESCRIPTION:
The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

For example:
1.08 --> 30
Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.
 */

// 1
const cockroachSpeed = s => Math.floor(s / 0.036);

// 2
function cockroachSpeed(s) {
    const secsInHour = 3600;
    const centimetersInKilometers = 100000;

    return Math.floor((s*centimetersInKilometers)/secsInHour);
  }

//   3
function cockroachSpeed(s) {
    const KILOMETER_IN_CENTIMETERS = 1 * 1000 * 100;
    const HOUR_IN_SECONDS = 1 * 60 * 60;

    return Math.floor(s * KILOMETER_IN_CENTIMETERS / HOUR_IN_SECONDS);
  }