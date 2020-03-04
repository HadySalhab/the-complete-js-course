// for (var i = 0; i < 10; i++) {
//   console.log(i);
// }

var john = ["John", "Smith", 1990, "Teacher", false];

// for (var i = 0; i < john.length; i++) {
//   console.log(john[i]);
// }

// var i = 0;
// while (i < john.length) {
//   console.log(john[i]);
//   i++;
// }

// var Mike = ["Mike", "Doe", 1993, "Programmer", false];

// for (var i = 0; i < Mike.length; i++) {
//   if (typeof Mike[i] !== "string") continue;
//   console.log(Mike[i]);
// }

// for (var i = 0; i < Mike.length; i++) {
//   if (typeof Mike[i] !== "string") break;
//   console.log(Mike[i]);
// }

// Looping backwards
for (var i = john.length - 1; i >= 0; i--) {
  console.log(john[i]);
}
