//Object.create();
let personProto = {
  calculateAge: function() {
    console.log(2019 - this.yearOfBirth);
  }
};

//First way
let john = Object.create(personProto);
//Dynamic(@runtime) we create property.
john.name = "John";
john.yearOfBirth = 1990;
john.job = "teacher";

//Second Way
let jane = Object.create(personProto, {
  name: { value: "jane" },
  yearOfBirth: { value: 1969 },
  job: { value: "designer" }
});
