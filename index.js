// write your code below!

function happyHolidays () {
  return "Happy holidays!";
}

function happyHolidaysTo(name){
  return `Happy holidays, ${name}!`;
}

function happyHolidayTo(holiday, name){
  return `Happy ${holiday}, ${name}!`;
}
function holidayCountdown(holiday, days) {
  return "It\'s ${days} days until ${holiday}!";
}
 1) functions holidayCountdown(holiday, days) returns "It's ${days} days until${holiday}!":

      Error: Expected 'It\'s ${days} days until ${holiday}!' to equal 'It\'s 20days until Mother\'s Day!'
      + expected - actual

      -It's ${days} days until ${holiday}!
      +It's 20 days until Mother's Day!

      at assert (node_modules/expect/lib/assert.js:29:9)
      at Expectation.toEqual (node_modules/expect/lib/Expectation.js:81:30)
      at Context.it (test/index-test.js:24:52)