var sports = []

var sports = ["Football", "Tennis", "Rugby"]
var numberOfElements = sports.length
console.log(numberOfElements)

var first = sports[0]
var second = sports[1]
var third = sports[2]

sports.push("Curling")
console.log(sports)
var removedSports = sports.pop()
console.log(removedSports)

sports.unshift("Basketball")
console.log(sports)

//Splice takes the index to start splicing, followed by how many values to affect
var removedSport = sports.splice(2, 1)
console.log(sports)

for(var currentSport of sports){
    var upperCasedSport = currentSport.toUpperCase()
    console.log(upperCasedSport)
}

for (var i = 0; i < sports.length; i++){
    var currentSport = sports[i]
    var upperCasedSport = currentSport.toUpperCase()
    console.log(upperCasedSport)
}

//Objects

var movie = {
    title: "Jaws",
    year: 1978,
    language: "English",
    subtitleLanguage: "German",
    cast: ['James Caan', 'Roy Schneider'],
    ratings: {critic: 94, audience: 95}
}

var title = movie.title
movie.language = "Spanish"
console.log(movie)

movie["language"] = "French"
console.log('movie: ', movie)
// movie["subtitle-language"] = "German"
//Have to use square brackets if a key has special characters such as -

var propertyToAccess = "subtitleLanguage"
movie[propertyToAccess] = "Italian"

console.log('subtitleLanguage', movie.propertyToAccess)

delete movie.year;
console.log(movie)

var audienceRating = movie.ratings.audience;
console.log("Audience rating is: ", audienceRating)

for(var key in movie){
    var value = movie[key]
    console.log(`The ${key} is ${value}`)
}

var keys = Object.keys(movie)
console.log(keys)