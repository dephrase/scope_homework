
//Named functions

// function sayHello(greeting, name = "World"){
//     return `${greeting} ${name}`
// }

// console.log('Say hello: ', sayHello("Hi", "David"));

//Anonymous function

var add = function(firstNumber, secondNumber){
    return firstNumber + secondNumber;
}

// console.log(add(1, 3))

//Declare a named function that takes an array of numbers, 
//and returns the sum, or total, of all of the numbers in the array.
function sumNumbers(numbers){
    total = 0
    for(var number of numbers){
        total += number
    }
    return total
}

myArray = [1, 2, 3]
// console.log(sumNumbers(myArray))

//Define an anonymous function expression that takes two arguments:
//an object, for example, { name: 'Harry', age: 30 }
//a string, for example, 'name'

var myObj =  {
    name: "David",
    age: 29
}

var myName = "name"
var notName = "Jeremy"

var isStringKey = function(object1, string1){
    for(var key in object1){
        if(string1 === key){
            return true
        }
    }
    return false
}

// console.log(isStringKey(myObj, myName))
// console.log(isStringKey(myObj, notName))

//Arrow functions

var multiply = (firstNumber, secondNumber) => {
    return firstNumber * secondNumber;
}

var multiple = (firstNumber, secondNumber) => firstNumber * secondNumber

console.log(multiple(2, 5))