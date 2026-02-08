let  num = 35
if (num > 10 && num < 50) {
  console.log("Valid Number");
} else {
  console.log("Invalid Number");}


  let username ="admin";
  let password = "1234"; 
  if (username === "admin" && password === "1234") {
  console.log("Login Success");
} else {
  console.log("Invalid Credentials");
}


let n = 9;
let result = (n % 2 === 0) ? "Even" : "Odd";
console.log(result);

console.log(10 === "10" || (5 > 2 && 3 < 1));
10 === "10" 
5 > 2 
3 < 1 
true && false 
false || false


console.log("5" + 2); 
console.log("5" - 2); 
console.log("5" * 2); 
console.log("5" / 2); 

let value = "100";
console.log(Number(value));
console.log(Boolean(value));

console.log(Boolean("")); 
console.log(Boolean(" "));
console.log(Boolean(0)); 
console.log(Boolean(1)); 

let marks = 78;

if (marks >= 90) {
  console.log("Grade A");
} 
else if (marks >= 75) {
  console.log("Grade B");
}
 else if (marks >= 50) {
  console.log("Grade C");
} 
else {
  console.log("Fail");
}

let signal = "green";

switch (signal) {
  case "red":
    console.log("Stop");
    break;
  case "yellow":
    console.log("Ready");
    break;
  case "green":
    console.log("Go");
    break;
  default:
    console.log("Invalid Signal");
}

let age = 20, height = 165, weight = 55;

if (age >= 18) {
  if (height >= 160) {
    if (weight >= 50) {
      console.log("Selected");
    } else {
      console.log("Weight condition failed");
    }
  } else {
    console.log("Height condition failed");
  }
} else {
  console.log("Age condition failed");
}



for (let i = 1; i <= 20; i++) {
  console.log(i);
}

for (let i = 1; i <= 20; i++) {
  if (i % 2 !== 0) console.log(i);
}


let i = 10;
while (i >= 1) {
  console.log(i);
  i--;
}

let j=1;
do{
  console.log(j);
 j++;
} while  (j<=5)



let word = "STACKLY";

for (let ch of word) {
  console.log(ch);
}

let student = {
  name: "Anu",
  course: "MERN",
  duration: "6 months"
};

for (let key in student) {
  console.log(`${key} : ${student[key]}`);
}

let u = "admin", p = "1234";
console.log(u === "admin" && p === "1234" ? "Login Success" : "Invalid Credentials");

let salary = 60000, exp = 4;

if (salary > 50000 && exp > 3) {
  console.log("Eligible for bonus");
} else {
  console.log("Not eligible");
}

let amount = 3500;

if (amount >= 5000) {
  console.log("20% Discount");
} else if (amount >= 2000) {
  console.log("10% Discount");
} else {
  console.log("No Discount");
}

let even = 0;

for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0) even++;
}
console.log("Even numbers:", even);

let hour = 15;

if (hour >= 1 && hour <= 6) console.log("Good Morning");
else if (hour <= 12) console.log("Morning");
else if (hour <= 16) console.log("Good Afternoon");
else if (hour <= 19) console.log("Good Evening");
else console.log("Good Night");
