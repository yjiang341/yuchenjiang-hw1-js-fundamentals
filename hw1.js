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
console.log("Testing countVowels: " + countVowels(myString) + "\n")