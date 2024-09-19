// ========== 1. Function to calculate the difference between two arguments ==========
function calculateDifference(a, b) {
    return a - b;
}
let result = calculateDifference(10, 4);
console.log(result); // Output: 6



// ========== 2. Function to check if a number is odd ==========
function isOdd(num) {
    return num % 2 !== 0;
}
console.log(isOdd(5));  // Output: true
console.log(isOdd(8));  // Output: false



// ========== 3. Function to find the minimum number in an array ==========
function findMin(numbers) {
    return Math.min(...numbers);
}
let nums = [10, 5, 8, 3, 12];
console.log(findMin(nums));  // Output: 3



// ========== 4. Function to filter even numbers from an array ==========
function filterEvenNumbers(numbers) {
    return numbers.filter(num => num % 2 === 0);
}
let nums = [1, 2, 3, 4, 5, 6];
let evenNums = filterEvenNumbers(nums);
console.log(evenNums);  // Output: [2, 4, 6]



// ========== 5. Function to sort an array in descending order ==========
function sortArrayDescending(numbers) {
    return numbers.slice().sort((a, b) => b - a);
}
let nums = [10, 3, 6, 1, 9];
let sortedNums = sortArrayDescending(nums);
console.log(sortedNums);  // Output: [10, 9, 6, 3, 1]



// ========== 6. Function to lowercase the first letter of a string ==========
function lowercaseFirstLetter(str) {
    if (!str) return str;  // Check if the string is empty
    return str.charAt(0).toLowerCase() + str.slice(1);
}

let result = lowercaseFirstLetter("Hello");
console.log(result);  // Output: "hello"

let result2 = lowercaseFirstLetter("JavaScript");
console.log(result2);  // Output: "javaScript"



// ========== 7. Function to count the number of vowels in a string ==========
function countVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    return str.split('').filter(char => vowels.includes(char)).length;
}


let result = countVowels("Hello World");
console.log(result);  // Output: 3

let result2 = countVowels("JavaScript");
console.log(result2);  // Output: 3



// ========== 8. Function to find the average of an array of numbers ==========
function findAverage(numbers) {
    if (numbers.length === 0) return 0; // Handle empty array
    let sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
}


let nums = [4, 8, 15, 16, 23, 42];
let average = findAverage(nums);
console.log(average);  // Output: 18

let emptyNums = [];
let emptyAverage = findAverage(emptyNums);
console.log(emptyAverage);  // Output: 0



