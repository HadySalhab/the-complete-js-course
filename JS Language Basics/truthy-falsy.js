// falsy values: undefined , null , 0 , '' , NaN;
//truthy values: All values that are not falsy.

var height;
height = 23;
height = 0; //this is a falsy value
//work around, to avoid printing value is not defined when its actually defined with value 0
if (height || height === 0) {
  console.log("Variable is defined");
} else {
  console.log("Variable has not been defined");
}

// ==  type coersion, they are equal even if their type does not match , of course their value must match
// === their value and type must be equal (preferable way)

if (height == "23") {
  console.log("the == operator does type coersion");
}
