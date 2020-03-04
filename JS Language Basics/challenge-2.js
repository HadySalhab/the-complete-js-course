var johnPointOne = 95;
var johnPointTwo = 130;
var johnPointThree = 103;
var mikePointOne = 116;
var mikePointTwo = 84;
var mikePointThree = 125;

var johnPointAvg = (johnPointOne + johnPointTwo + johnPointThree) / 3;
var mikePointAvg = (mikePointOne + mikePointTwo + mikePointThree) / 3;

if (johnPointAvg === mikePointAvg) {
  console.log(`Draw: average=${johnPointAvg}`);
} else if (johnPointAvg > mikePointAvg) {
  console.log(
    `John won, John Average = ${johnPointAvg} , Mike Average = ${mikePointAvg}`
  );
} else {
  console.log(
    `Mike won, John Average = ${johnPointAvg} , Mike Average = ${mikePointAvg}`
  );
}
