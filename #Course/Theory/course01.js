console.log("Data Types: string, integer, float, boolean, null, undefiened, NaN, array, object")

const mon = "mon";
const tue = "tue";

const todayAndYestday = mon + tue;
console.log(todayAndYestday);

const theSameOne = ["sun", "mon", "tue", "wed", "thu", "fri"];
console.log(theSameOne);

//console.logging an element of an array!
console.log(theSameOne[0]);

const anyTypes = [1, 3, "hey", null, true, false, undefined];
console.log(anyTypes); 

//appending element in an array const!
theSameOne.push("sat");
console.log(theSameOne);

//objects - when you need an explanation on a list of data
const player = {
    name: "WorkingMo",
    points: 10,
    fat: true
};
console.log(player.name);

player.fat = false;
console.log(player)

player.lastName = "Lee";
console.log(player);

player.points = player.points + 15;
console.log(player.points);

console.log("/////////////////////////////////////////////////////////////")


function sayHello(theArgument = "WorkingMo", Age){
    console.log("Hello my name is " + theArgument + " and I am " + Age);
}

sayHello("Sungmo", 29);

//Function inside of an object, just like console.log
const NewPlayer = {
    name: "Sungmo",
    sayBye: function(otherName){
        console.log("Bye " + otherName);
    },
};

NewPlayer.sayBye("Chong")


console.log("----------practice: calculator----------");


const calc = {
   plus: function(a, b){
    return a + b;
   },
   minus: function(a, b){
    return a - b;
   },
   multiply: function(a, b){
    return a * b;
   },
   divide: function(a, b){
    return a / b;
   },
   power: function(a, b){
    return a ** b;
   }
};
calc.remain = function (a, b){
    return a % b;
};

calc["root"] = function (numberToSquareRoot){
    return Math.sqrt(numberToSquareRoot);
};

console.log(calc);

const plusResult = calc.plus(2, 3);

console.log("-------Conditionals-------");

//change data type: string to integer

const ageTest = prompt("Age Test! Try any texts or numbers");

console.log(typeof ageTest, typeof parseInt(ageTest));
console.log(ageTest, parseInt(ageTest));


const age = parseInt(prompt("How old are you?"));

console.log(age);
if (isNaN(age) || age < 0) {        // || === Or operator
    console.log("Please write a real positive number.");
} else if (age < 18) {
    console.log("You are too young.");
} else if (age >= 18 && age <= 50) {        // && === And operator
    console.log("You can drink.");
} else if (age > 50 && age <= 80) {
    console.log("You shouldn't drink.");
} else if (age === 100) {       // === !== checking values
    console.log("You are wise!");
} else if (age > 80) {
    console.log("Do whatever you want.");
}
