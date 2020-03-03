var names = ["Marc", "John", "Jane"];

var years = new Array(2); //set the size of your array
years[0] = 1940;
years[1] = 2020;

console.log(names[0]);
console.log(names);

console.log(names.length);
names[names.length] = "Miled"; //we are adding an element to an array at the end
console.log(years);

//Different data types

var john = ["John", "Smith", 1990, "Teacher", false];

john.push("blue"); //add element at the end of the array
john.unshift("Mr."); //add element at the begining of the array
john.pop(); //remove the elemen at the end of the array
john.shift(); //remove the element at the begining of the array

console.log(john.indexOf(1990)); //return the index of the element in the array , otherwise -1

var isDesigner =
  john.indexOf("designer") === -1
    ? "John is NOT a designer"
    : "John is a designer";
console.log(isDesigner);

console.log(john);
