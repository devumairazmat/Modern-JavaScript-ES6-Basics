// Task 1: Introduction

// console.log('Hello, to ES6 Course Folk');

// ---------------------------------------------
// Task 2: Variables (let) and Scoping

var name = "Umair";
console.log(name);
name = "Azmat";
console.log(name);
var name = "latif"; //this can be redefine
console.log(name);

let university = "GCUF";
console.log(university);
university = "Aggri";
console.log(university);
// let university = "NTU"; Errot this can't be redifine
console.log(university);

var car = "BMW";
function cars() {
  var car = "Ferrari";
  console.log("Inside Function:", car);
}
cars();
console.log("Outside Function:", car);

let fruit = "Apple";
function fruits() {
  let fruit = "Banana";
  console.log("Inside Function:", fruit);
}
fruits();
console.log("Outside Function:", fruit);

/* <------------------------------------------------------------> */

// Task 2: Execise 1: Fix the code to print 15

var age = 15;

// for (var age = 1; age <= 10; age++) {
//          console.log(age);
//  }

// solution
for (let age = 1; age <= 10; age++) {
  console.log(age);
}

console.log(age); // Should print 15 instead of 10

/* <------------------------------------------------------------> */

// Task 2: Execise 2: Fix the code to print Jack Russell Terrier

// var myDog = "Jack Russell Terrier";
// var shortLeggies = true;

// if (shortLeggies) {
//     var myDog = "Welsh Corgie";
//     console.log(myDog);
// } else {
//     var myDog = "Border Collie";
//     console.log(myDog);
// }

// Solution
let myDog = "Jack Russell Terrier";
let shortLeggies = true;

if (shortLeggies) {
  let myDog = "Welsh Corgie";
  console.log(myDog);
} else {
  let myDog = "Border Collie";
  console.log(myDog);
}
console.log(myDog); // Jack Russell Terrier

/* <------------------------------------------------------------> */

// ---------------------------------------------
// Task 3: Variables (const) and Immutability

let developer = "Dev Umair";
console.log(developer);
developer = "Dev Uamir Azmat"; // can be redifine
console.log(developer);

const dev = "dev marii";
// dev= "Marii Dev"    error : can't be redefine
console.log(dev);

const stacks = ["Php", "MERN"];
console.log(stacks);
stacks.push("Mean");
console.log(stacks);

const DevDetails = {
  developer: "Umair",
  location: "faisalabad",
  level: "intermediate",
  role: "frontend",
  references: {
    one: "nouman ul Haq",
    two: "Prof Latif",
  },
};
Object.freeze(DevDetails);
Object.freeze(DevDetails.references);
console.log(DevDetails);
DevDetails.Joining = "2022";
console.log(DevDetails);

// TASK 3: Exercise: Refactor the code to use let/const

// var painter = {
//     name: "Van Gogh",
//     nationality: "Dutch",
//     paintings: ["The Starry Night", "Irises", "Almond Blossoms"]
// };

// painter.birthDate = "March 30, 1853";
// painter.paintings.push("Something");

// solution
var painter = {
  name: "Van Gogh",
  nationality: "Dutch",
  paintings: ["The Starry Night", "Irises", "Almond Blossoms"],
};
Object.freeze(painter);
Object.freeze(painter.paintings);
//painter.birthDate = "March 30, 1853";
//painter.paintings.push("Something");

console.log(painter); // Should print { name: 'Van Gogh', nationality: 'Dutch', paintings: [ 'The Starry Night', 'Irises', 'Almond Blossoms' ] }

// ---------------------------------------------
// TASK 4: Destructuring

const academy = {
  namee: "Learn with Umair",
  since: 2002,
  location: "Lahore",
  Achievements: ["1st in 2006", "2nd i  2010"],
};
// const namee = academy.namee;
// const location = academy.location;

const { namee: academyName, location: academyLocation } = academy;
console.log(academyName, academyLocation);

function courses({ namee, location }) {
  // console.log(academy.namee);
  // console.log(academy.location);
  console.log(namee);
  console.log(location);
}
courses(academy);
// console.log(academy);

// <------------------------------------------------------------------------>

// Task 4: Exercise: Extract data with destructuring

// const ingredients = {
//     tea: 'black',
//     milk: 'soy',
//     sweetener: 'honey',
//     spices: ['ginger', 'cardamom', 'cinnamon', 'nutmeg']
// }

// // Destructure the parameters
// function prepareChai(ingredients) {
//     const tea = ingredients.tea;
//     const spices = ingredients.spices;
//     const milk = ingredients.milk;
//     const sweetener = ingredients.sweetener;

//     console.log("Mix the " + tea + " tea " +
//         "with the " + spices + " in a small pot. " +
//         "Add a cup of water and bring to boil. Boil for 2-3 min. " +
//         "Add " + milk + " milk and " + sweetener + ". " +
//         "Simmer for 3 min. Serve masala chai hot or warm!");
// }

// solution
const ingredients = {
  tea: "black",
  milk: "soy",
  sweetener: "honey",
  spices: ["ginger", "cardamom", "cinnamon", "nutmeg"],
};

// Destructure the parameters
function prepareChai({ tea, spices, milk, sweetener }) {
  console.log(
    "Mix the " +
      tea +
      " tea " +
      "with the " +
      spices +
      " in a small pot. " +
      "Add a cup of water and bring to boil. Boil for 2-3 min. " +
      "Add " +
      milk +
      " milk and " +
      sweetener +
      ". " +
      "Simmer for 3 min. Serve masala chai hot or warm!"
  );
}
prepareChai(ingredients);

//  Some plus

const subjects = ["Programming", "Database", "DataStrucure", "Algorithms"];
[first] = subjects;
[, , third] = subjects;
[first, second, ...restofSubjects] = subjects;
console.log(first);
console.log(third);
console.log(restofSubjects);

// ---------------------------------------------
// TASK 5: Strings and Interpolation

const language = "Urdu";
console.log(language);
console.log(language.startsWith("U"));
console.log(language.startsWith("R")); //false
console.log(language.endsWith("u"));
console.log(language.endsWith("r")); //false
console.log(language.repeat(5));
console.log(`The ${language} is a beautiful language`);

// ---------------------------------------------
// TASK 5: Exercise: Refactor the code to use the ES6 String utility methods

// const country = "Bulgaria";
// const city = "Sofia";

// if (country.indexOf("Bulg") > - 1) {
//     console.log("The country starts with Bulg");
// }

// if (city.indexOf("So") === 0) {
//     console.log("The name starts with So");
// }

// if (city.lastIndexOf("a") === city.length - 1) {
//     console.log("The name ends with a");
// }

//solution
const country = "Bulgaria";
const city = "Sofia";

if (country.indexOf("Bulg") > -1) {
  console.log("The country starts with Bulg");
}

if (city.startsWith("So")) {
  console.log("The name starts with So");
}

if (city.endsWith("a")) {
  console.log("The name ends with a");
}

console.log(`The capital of ${country} is the city of " ${city} `);

// ---------------------------------------------
// TASK 6: Arrow functions

// TASK 6: Exercise: Filter out only the prime numbers from the array

// const primeNumbers = [1, 2, 3, 4, 5, 6].filter(/* add the function to filter out the prime numbers */);
// console.log(primeNumbers);

// ---------------------------------------------
// TASK 7: Arrow functions and this

// Task 7: Exercise

// function Translator() {
//    this.phrase = "good day";
//    this.englishBulgarianDictionary = {
//        good: "ÃÂ´ÃÂ¾ÃÂ±ÃÂÃÂ",
//        day: "ÃÂ´ÃÂµÃÂ½"
//    }
// }

// Translator.prototype.getBulgarianPhrase = function() {
//    return this.phrase
//        .split(" ")
//        .map(function(word) {
//            return this.englishBulgarianDictionary[word]
//        })
//        .join(" ");
// }

// const translator = new Translator();
// console.log(translator.getBulgarianPhrase());
