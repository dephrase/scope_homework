
var name = "Mickey";


name = 27;


console.log(typeof(name))
console.log(typeof("Test"))
console.log(typeof(true))

console.log("no way!".toUpperCase());

console.log(typeof(1));
console.log(typeof(0.75));

console.log(2 ** 3);
console.log(3 % 2);

console.log(String(5));
var name = "Minnie";
"Hello " + name;

`Hello ${name}`;
//Must use backtick for interpolation

var myVariable;

console.log(typeof(myVariable));
// console.log(bananas); will give reference error

//Can we see a symbol, find out later   

if(1 > 0){
    var message = "1 is greater than 0";
    } else if (1 == 0){
        var message = "1 is equal to 0";
    } else {
        var message = "1 is not greater than 0"
}

if(null){
    var result = "This expression resolves to true"
} else {
    var result = "This expression resolves to false"
}

console.log(result)

console.log(Boolean(null))
console.log(Boolean("Test"))

//falsy things, null, NaN, 0, empty string, false

