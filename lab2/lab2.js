// Q1
// function task(cb) {
//   setTimeout(() => {
//     cb(10);
//   }, 1000);
// }

// function callWithValue(value) {
//   console.log(value);
// }

// task(callWithValue);

//Q2
function task() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(10);
    }, 1000);
  });
}

task().then((val) => console.log(val));

//Q3
// function Vehicle(type) {
//   this.type = type;
//   Vehicle.vehicleCount++;
// }

// Vehicle.prototype.drive = function () {
//   console.log("Vehicle is driving");
// };

// Vehicle.vehicleCount = 0;

// const v1 = new Vehicle("type1");
// const v2 = new Vehicle("type2");

// console.log(Vehicle.vehicleCount);

// function Car(type) {
//   Vehicle.call(this, type);
// }

// Car.prototype = Object.create(Vehicle.prototype);
// Car.prototype.constructor = Car;

// Car.prototype.balanceWheels = function () {
//   console.log("Wheels are balanced");
// };

// const c1 = new Car("car type1");
// const c2 = new Car("car type2");

// v1.drive();
// c1.balanceWheels();

// console.log(c1.type, c2.type);

// console.log(Vehicle.vehicleCount);

//Q4
const getValueAsync = async () => {
  const value = await task();
  console.log(value);
};

getValueAsync();

//Q5

class Vehicle {
  static vehicleCount = 0;

  constructor(type) {
    this.type = type;
    Vehicle.vehicleCount++;
  }

  drive() {
    console.log("Vehicle is driving");
  }
}

class Car extends Vehicle {
  constructor(type) {
    super(type);
  }

  balanceWheels() {
    console.log("Wheels are balanced");
  }
}

const v1 = new Vehicle("type1");
const v2 = new Vehicle("type2");

const c1 = new Car("car type1");
const c2 = new Car("car type2");

v1.drive();
c2.balanceWheels();

console.log(Vehicle.vehicleCount);
