

let subjects = ["Maths", "Science", "English", "History"];

subjects.forEach((subject, index) => {
  console.log(`Subject ${index + 1}: ${subject}`);
});

let prices=[100,200,300,400]

let gstprice = prices.map(price => price + price *.10);
console.log(gstprice);

let students = [
  { name: "A", marks: 45 },
  { name: "B", marks: 75 },
  { name: "C", marks: 35 },
  { name: "D", marks: 85 },
];

let passedStudents = students.filter(student => student.marks > 50);
console.log(passedStudents);
let topper = students.find(student => student.marks > 50);
console.log(topper);

let cart = [
  { item: "Shirt", price: 1000 },
  { item: "Shoes", price: 2000 },
  { item: "Watch", price: 3000 }
];

let totalPrice = cart.reduce((sum, product) => {
  return sum + product.price * 1.05;
}, 0);

console.log(totalPrice);

let numbers = [1, 3, 5, 7, 8];

let hasEven = numbers.some(num => num % 2 === 0);
console.log(hasEven);

let ages = [22, 25, 19, 30];

let allAdults = ages.every(age => age > 18);
console.log(allAdults);

let salaries = [50000, 10000, 70000, 30000];
console.log(salaries.sort((a, b) => a - b));
console.log(salaries.sort((a, b) => b - a));


let arr = [10, 20, 30, 40];
console.log(arr.toString());
console.log(arr.join("-"));

let word = "Developer";
console.log(word.charAt(4));
console.log(word.charCodeAt(4));

let company = "StacklyCompany";
console.log(company.slice(7));

let userInput = "javaScript";
console.log(userInput.toUpperCase());
console.log(userInput.toLowerCase());

let email = " naveen@gmail.com ";
console.log(email.trim());

let message = "Welcome to JavaScript Training";
console.log(message.includes("JavaScript"));

let movie = "spider-man-no-way-home";
console.log(movie.split("-"));

let text = "programming";
console.log(text.indexOf("m"));
console.log(text.lastIndexOf("m"));

let tech = "I love python";
console.log(tech.replace("python", "javascript"));

let filename = "report.pdf";
console.log(filename.startsWith("report"));
console.log(filename.endsWith(".pdf"));

let star = "*";
console.log(star.repeat(10));

let employees = [
  { name: "Naveen", salary: 50000 },
  { name: "Arun", salary: 30000 },
  { name: "Kiran", salary: 70000 }
];

let namesUpper = employees.map(emp => emp.name.toUpperCase());
console.log(namesUpper);

let highSalary = employees.filter(emp => emp.salary > 40000);
console.log(highSalary);

let firstHigh = employees.find(emp => emp.salary > 60000);
console.log(firstHigh);

let totalSalary = employees.reduce((sum, emp) => sum + emp.salary, 0);
console.log(totalSalary);

let sorted = employees.sort((a, b) => b.salary - a.salary);
console.log(sorted);
