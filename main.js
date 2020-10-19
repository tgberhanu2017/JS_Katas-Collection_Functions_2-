

console.log ("Assessment: JS Katas Collection: Functions 2")
// add
console.log("add");

function add (a, b){
let result = a + b;
return result;
}
console.log (add(2, 4));

// multiply
console.log("multiply");

function multiply(a, b) {
  
let result = 0;
let counter = 0;
while (counter < b){
counter ++;
result = add (result, a);  
}
        
return result;
}

console.log (multiply(6, 4));

console.log(multiply(3,6));

console.log(multiply(2,5));
    
// power
console.log ("power");

function power(n, a){
let result = 1;

let counter = 0;
while (counter < a){

counter ++;
result = multiply (result, n);
}
return result;

}
console.log (power(2, 8));
console.log (power(3, 4));

// factorial
console.log ("factorial")

function factorial (x){
let result = 1;
let counter = 0;

while(counter < x){
result = multiply(result, x-counter);
counter ++;
}
return result;
}
console.log(factorial (5));
console.log(factorial (7));

// Fibonacci
console.log ("Fibonacci")

function Fibonacci (n){
let addArray = [0, 1];

let index = 0;
while (index < n){
addArray.push(addArray[index] + addArray[index + 1]);
index ++;
}
return addArray[n - 1];

}
console.log(Fibonacci(8));

console.log(Fibonacci(9));