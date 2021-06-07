
//var - Function scoped
//let - Block scoped
//const
//lexical scoping - functions can see variables in scope above

// var secretsFunction = function(){
//     var pinCode = [0, 0, 0, 0]
//     console.log('pincode inside secrets function: ', pinCode)
// }

// secretsFunction()

// console.log('Pincode outside secrets function: ', pinCode)

// var filterNamesByFirstLetter = function(names, letter){
//     var filterNames = []
//     for(let name of names){
//         if(name[0] === letter){
//             filterNames.push(name)
//         }
//     }
//     console.log('Name after loop: ', name)
//     return filterNames;
// }

// var students = ["Alice", "Bob", "Alyssia", "Artem", "Babs"]
// var filteredStudents = filterNamesByFirstLetter(students, "A")
// console.log(filteredStudents)

// let isItFive = function(number){
//     let result;
//     if (number === 5){
//         result = true;
//     } else {
//         result = false
//     }
//     return result
// }

let temperature = 30;
if (temperature > 15) {
  let jacket = false;
  var happy = true;
} else {
  let jacket = true;
  var happy = false;
}
// console.log('jacket after if-else blocks:', jacket);
// console.log('happy after if-else blocks:', happy);

//jacket is undefined because let is within a code block

const calculateEnergy = function(mass){
    const speedOfLight = 299792458;
    return mass * speedOfLight ** 2
}

const energryOfMe = calculateEnergy(78);
// console.log(energryOfMe)

const song = {
    title: "Raspberry Beret",
    artist: "Prince"
}

// console.log('Song before mutation: ', song)
// song.title = "When doves cry"
// console.log('Song after mutation: ', song)

// const songs = [song, "Happy Birthday", "Hey Jude"]
// console.log(songs)
// songs.pop()
// console.log(songs)

const helloWorld = function(){
    result = "Hello World"
}

helloWorld()
console.log(result)