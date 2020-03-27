let a = 23;
let b = a;
a = 46;

//it pass a value
console.log(a);
console.log(b);

let object1 = {
  name: "John",
  age: 27
};

//it pass the reference.
//now both will point to the same point in the memory
let object2 = object1;

object1.age = 30;

console.log(object1);
console.log(object2);

//Functions
let age = 27;
let object = {
  name: "Jonas",
  city: "Lisbon"
};

function change(a, b) {
  a = 30;
  b.city = "San Francisco";
}

change(age, object);
console.log(age); //will not be affected
console.log(object.city); //will be affected.
