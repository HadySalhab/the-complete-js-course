// var a = "hello";
// first();

// function first() {
//   var b = "hi!";
//   second();
// }
// function second() {
//   var c = "Hey!";
//   console.log(a + b + c); //cannot access b, second() is declared in the parent scope and b belongs to the child scope.
// }

//Inner scope has access to the variable available in the parent scope
//parent cannot access variables declared inside an inner/child scope
//the above example does not work

//Solution: pass the variable as parameter

var a = "hello";
first();

function first() {
  var b = "hi!";
  second(b);
}
function second(b) {
  var c = "Hey!";
  console.log(a + b + c); //cannot access b, second() is declared in the parent scope and b belongs to the child scope.
}
