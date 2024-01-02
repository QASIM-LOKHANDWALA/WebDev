const sum = function(num1,num2){
    return num1+num2;
}
const difference = function(num1,num2){
    return num1-num2;
}
const product = function(num1,num2){
    return num1*num2;
}
const division = function(num1,num2){
    return num1/num2;
}

// FUNCTION CAN BE PASSED INSIDE A FUNCTION : (CALLBACK)
const calculation = function(num1,num2,func){
    return func(num1,num2);
}
var result = calculation(10,23098,division);

// RECURSION SUM
const recSum = function(num){
    if(num==0){
        return num;
    }
    return num+recSum(num-1);
}

// RECURSION FACTORIAL
function recFactorial(num){
    if(num==1){
        return 1;
    }
    return num*recFactorial(num-1);
}
const factorial = recFactorial(5);
console.log(factorial);

// SET TIMEOUT FUNCTION
console.log("Please wait for 2 seconds!");
function fun1(){
    console.log("Matching the brain waves...");
}
setTimeout(fun1,1*1000);
function greet(){
    console.log("THANK YOU FOR YOUR PATIENCE!");
}
setTimeout(greet,2*1000);