let empBasic = { name: "Naveen", role: "Trainee", salary: 20000 };
let empPromotion = { role: "Developer", bonus: 10000 };

let employee = {
  ...empBasic,
  ...empPromotion,
  salary: 40000,
  experience: "2 years"
};console.log(employee);

let cart1 = ["Shoes", "Shirt"];
let cart2 = ["Watch", "Cap"];
let finalCart = ["Socks", ...cart1, ...cart2, "Bag"];
console.log(finalCart);


function calculateTotalSalary(baseSalary, ...bonuses) {
  let totalBonus = bonuses.reduce((sum, b) => sum + b, 0);
  return baseSalary + totalBonus;
}
let total = calculateTotalSalary(30000, 2000, 3000, 5000);
console.log("Total Salary:", total);

let student = {
  name: "Ravi",
  marks: { maths: 92, science: 65, english: 78 }
};
let { name } = student;
let { maths, science } = student.marks;
console.log(`${name} scored ${maths} in maths and ${science} in science`);


let numbers = [10, 20, 30, 40, 50];
numbers.splice(2, 1, 25);  // remove 30 and add 25
numbers.reverse(); // reverse array
console.log("50 exists:", numbers.includes(50));
console.log(numbers);

let apiData = [1, 2, [3, 4, [5, 6, [7, 8]]]];
let flatArray = apiData.flat(Infinity);
console.log(flatArray);
console.log("Index of 6:", flatArray.indexOf(6));



let prices = [100, 5, 25, 300, 45];
let asc = [...prices].sort((a, b) => a - b);// Ascending
console.log("Ascending:", asc);
let desc = [...prices].sort((a, b) => b - a);// Descending
console.log("Descending:", desc);


let users = [
  { name: "A", salary: 20000 },
  { name: "B", salary: 40000 },
  { name: "C", salary: 30000 }
];

let updatedUsers = users.map(user => ({
  ...user,salary: user.salary + 5000
}));
console.log(updatedUsers);