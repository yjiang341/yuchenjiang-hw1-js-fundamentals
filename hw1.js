//Part 1: Arrays

//Get the total sum out of single array;
function sum(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}

//Calculate the average from single array;
function average(arr) {
    let size = arr.length;
    let total = sum(arr);
    return total / size;
}

//Find the minimum value from single array;
function min(arr) {
    let currentMin = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < currentMin) {
            currentMin = arr[i];
        }
    }
    return currentMin;
}

//Find the maximum value from single array;
function max(arr) {
    let currentMax = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > currentMax) {
            currentMax = arr[i];
        }
    }
    return currentMax;
}

const myArray = [14, 23, 9, 18, 5]
console.log("Testing sum: " + sum(myArray) + "\n")
console.log("Testing average: " + average(myArray).toFixed(2) + "\n")
console.log("Testing minimum: " + min(myArray) + "\n")
console.log("Testing maximum: " + max(myArray) + "\n\n")

//-------------------------------------------------------------------------------
//Part 2: Strings

//Capitalize any given string;
function capitalize(str) {
    return str.toUpperCase();
}

//Reverse the character order of given string;
function reverse(str) {
    const stringInArray = str.split('');
    const reverseArray = stringInArray.reverse();
    return reverseArray.join('');
}

//Counts how many vowels from given string;
function countVowels(str) {
    const vowels = "aeiouAEIOU";
    let counter = 0;

    for (const letter of str) {
        if (vowels.includes(letter)) {
            counter++;
        }
    }
    return counter;
}

const myString = "Hello"
console.log("Testing capitalize: " + capitalize(myString) + "\n")
console.log("Testing reverse: " + reverse(myString) + "\n")
console.log("Testing countVowels: " + countVowels(myString) + "\n\n")

//-------------------------------------------------------------------------------
//Part 3: Objects

//Creat Student object with following property:
//name, age, grades.
const student = {
    name: "John Doe",
    age: 24,
    grades: [73, 85, 91],
    getAverage: function(grades) {
        return average(grades);
    },
    isHonorRoll: function(age) {
        return age > 85;
    }
}

console.log(student.name + " is " + student.age + " years old.\n");
console.log(student.name + " has a average of " + student.getAverage(student.grades) + ".\n")
console.log(student.name + " is " + (student.isHonorRoll(student.age) ?
            "in honor roll." : "not in honor roll.") + "\n")