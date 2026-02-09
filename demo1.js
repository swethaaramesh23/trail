
function calculateSalary(basicSalary, bonusPercentage)
{
    
    const bonus = basicSalary * (bonusPercentage / 100);
    const grossSalary = basicSalary + bonus;
    const tax = grossSalary * 0.05; 
    const finalSalary = grossSalary - tax;

    console.log(`--- Salary Breakdown ---`);
    console.log(`Basic: ${basicSalary}`);
    console.log(`Bonus: ${bonus}`);
    console.log(`Tax (5%): ${tax}`);
    console.log(`Final: ${finalSalary}`);

    return finalSalary;
}
(calculateSalary(40000,10));


function generateResult(name, marksArray)

{
    const total = marksArray.reduce((acc, curr) => acc + curr, 0);
    const average = total / marksArray.length;
    let grade;

    if (average >= 90) {grade = "A";}
    else if (average >= 75) {grade = "B";}
    else if (average >= 50) {grade = "C";}
    else {grade = "Fail";}

    return { name, total, average, grade };
}

console.log(generateResult("Arun", [80, 90, 70]));

//What will happen?
// console.log(a)` will print `10`, but `console.log(b)` will throw a `ReferenceError`.

//Why?

// var is **function-scoped**. Since `a` is inside `demo()`, it is accessible
 //anywhere in that function.
//let is **block-scoped**. `b` only exists inside the `if(true){...}`
 //block and is "dead" outside of it.


function demo() {
    let a = 10;
    let b = 20; 
    if (true) {
        // logic here
    }
    console.log(a);
    console.log(b);
}

let c=200;
console.log(c);




const generateInvoice = (id) => console.log(`Invoice generated for ID: ${id}`);

function processOrder(orderId, callback) {
    console.log("Order Processed");
    callback(orderId);
}

processOrder("ORD123", generateInvoice);


const priceBuilder = (basePrice) => (discount) => (tax) => 
    {
    const discountedPrice = basePrice - (basePrice * (discount / 100));
    const finalPrice = discountedPrice + (discountedPrice * (tax / 100));
    return finalPrice;
};

console.log(priceBuilder(2000)(15)(18)); 

const companyModule = (function() {
    let companyCode = "SECRET_123"; 

    return {
        getCompanyStatus: function() {
            return `Company is Active.
            Code length: ${companyCode.length}`;
        }
    };
})
();

console.log(companyModule.getCompanyStatus());
console.log(companyModule.companyCode); 


function* orderIdGenerator() {
    let id = 1001;
    while(true) {
        yield `ORD${id++}`;
    }
}

function* couponSpin() {
    const outcomes = ["10% OFF", "20% OFF", "50% OFF", "No Luck", "Jackpot"];
    while(true) {
        yield outcomes[Math.floor(Math.random() * outcomes.length)];
    }
}

const gen = orderIdGenerator();
console.log(gen.next().value); 

//1. Function Declaration vs Expression: Declarations can be called before they
//  are defined expressions are not.
//2. Higher Order Function: A function that takes another function as an argument 
// or returns a function.
//3. Generator Example: Generating infinite unique IDs or handling large data streams
//  without loading everything into memory.
//4. Why IIFE? To create a private scope, preventing variable "pollution"
//  in the global namespace and protecting sensitive data.
//5. Var, Let, Const: 
// var :Function scope, can be redeclared, hoisted with `undefined`.
//let: Block scope, cannot be redeclared in same scope, no hoisting initialization.
//const: Like `let`, but the reference cannot be reassigned.


