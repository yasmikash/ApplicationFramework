// Q1
const sayHello = function () {
  console.log("Hello World");
};

const callAnything = function (fn) {
  fn();
};

callAnything(sayHello);

//Q2
const user = {
  username: "yasmikash",
  age: 24,
  describe: function () {
    console.log(`Hi, I'm ${this.username}!`);
  },
};

//Q3
var vehicleName = "Tesla";

function printVehicleName() {
  console.log(this.vehicleName);
}

const vehicle = {
  vehicleName: "Lamborghini",
  getVehicleName: printVehicleName,
};

vehicle.getVehicleName.call(this);

//Q4
function calculateTax(tax) {
  return function (texableAmount) {
    const taxedAmount = tax * texableAmount + texableAmount;
    this.taxedAmount = taxedAmount;
    return taxedAmount;
  };
}

console.log(calculateTax(0.5)(1000));
console.log(taxedAmount);

//Q5
const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  return await response.json();
};
