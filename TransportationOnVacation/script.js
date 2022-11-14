//Transportation on vacation
/*
After a hard quarter in the office you decide to get some rest on a vacation.
So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

You will need a rental car in order for you to get around in your vacation.
The manager of the car rental makes you some good offers.

Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total.
Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

Write a code that gives out the total amount for different days(d).

*/
// One way
function baseCost(days, rate) {
    return days * rate;
  }

  function discountRate(days) {
    if ( days >= 7 ) {
      return 50;
    }
    else if ( days >= 3 ) {
      return 20;
    }
    else {
      return 0;
    }
  }

  function rentalCarCost(days) {
    return baseCost(days, 40) - discountRate(days);
  }

  // second way
  function rentalCarCost(d) {
    return d * 40 - (d >= 7 ? 50 : (d >= 3 ? 20 : 0));
  }

  //3 way
  function rentalCarCost(d) {
    if(d<3) return d * 40;
    if(7>d && d>=3) return (d*40 -20);
    if(d>=7) return (d*40 -50);
  }

  //4
  const rentalCarCost = d => d*40 - (d>2)*20 - (d>6)*30;
//   5
  const rentalCarCost = d => d * 40 - ((d > 6) ? 50 : ((d > 2) ? 20 : 0));