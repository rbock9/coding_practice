// Task: Get the Middle Character
// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// My Solution: 
// function getMiddle(s)
// {
//   let position;
//   let length;
  
//     if (s.length % 2 == 1) {
//         position = s.length / 2;
//         length = 1;
//     } else {
//         position = s.length / 2 - 1;
//         length = 2;
//     }

//     return s.substring(position, position + length)
// }


////////////////////////////////////////////////////////////////
// Task: A square of squares
// Given an integral number, determine if it's a square number.

// My Solution:
// var isSquare = function(n){
//     if (Math.sqrt(n) % 1 != 0) {
//         return false;
//     }
//     return true; // fix me
// }

// console.log(isSquare(10))


////////////////////////////////////////////////////////////////
// Task: Disemvowel Trolls
// Your task is to write a function that takes a string and return a new string with all vowels removed.
// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
// Note: for this kata y isn't considered a vowel.

// My Solution:
// function disemvowel(str) {
//     let word = str.split("")
//     let newWord = []
    
//     for (let i = 0; i < word.length; i++) {
//         if (word[i] === "a" || word[i] === "A") {
//             word[i].slice()
//         } else if (word[i] === "e" || word[i] === "E") {
//             word[i].slice()
//         } else if (word[i] === "i" || word[i] === "I") {
//             word[i].slice()
//         } else if (word[i] === "o" || word[i] === "O") {
//             word[i].slice()
//         } else if (word[i] === "u" || word[i] === "U") {
//             word[i].slice()
//         } else {
//             newWord.push(word[i])
//         }

//     }
//     let newString = newWord.join('')
//     return newString;
// }

// console.log(disemvowel("HELLO"))


////////////////////////////////////////////////////////////////
// Task: Vowel Count
// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

// My Solution:
// function getCount(str) {
//     var vowelsCount = 0;
//     let word = str.split("")
//       for (let i = 0; i < word.length; i++) {
//           if (word[i] === "a" || word[i] === "e" || word[i] === "i" || word[i] === "o" || word[i] === "u") {
//               vowelsCount++
//           } 
//       }
//     return vowelsCount;
// }
// console.log(getCount("hello"))


////////////////////////////////////////////////////////////////
// Task: Remove First and Last Character
// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

// My Solution: 
// function removeChar(str){
//     let newWord = str.split("")
//     newWord.pop()
//     newWord.shift()
//     let newString = newWord.join('')
//     return newString
// };

// Another solution:
// function removeChar(str) {
//     return str.slice(1, -1);
// }


////////////////////////////////////////////////////////////////
// Task: Convert a String to a Number!
// We need a function that can transform a string into a number. What ways of achieving this do you know?
// Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

// My Solution: 
// var stringToNumber = function(str){
//     return parseInt(str);
// }


////////////////////////////////////////////////////////////////
// Task: Returning Strings
// Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".
// [Make sure you type the exact thing I wrote or the program may not execute properly]

// My Solution:
// function greet(name){
//     return `Hello, ${name} how are you doing today?`
// }


////////////////////////////////////////////////////////////////
// Task: The highest profit wins!
// Write a function that returns both the minimum and maximum number of the given list/array.

// My Solution:
// function minMax(arr){
//     let newArray = []
//     let sortedArray = arr.sort((a, b) => (a - b));
//     newArray[0] = sortedArray[0]
//     newArray[1] = sortedArray[sortedArray.length-1]
//     return newArray; 
// }
// console.log(minMax([140000, 104, 99, 200, 50, 1]))

// Another solution: 
// function minMax(arr){
//   return [Math.min(...arr), Math.max(...arr)];
// }


////////////////////////////////////////////////////////////////
// Task: List Filtering
// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// My Solution:
// function filter_list(l) {
//     let newList = [];
//     for (const element of l) {
//         if (typeof element === 'number') {
//             newList.push(element)
//         }
//     }
//     return newList
// }


////////////////////////////////////////////////////////////////
// Task: Detect Panagram
// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).
// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

// My Solution: (Didn't actually get this one, had to look up answer online. I was on the right track, but didn't know about indexOf string method).

// function isPangram(string){
//     let strArr = string.toLowerCase()
//     let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

//     for (let i = 0; i < alphabet.length; i++) {
//         if(strArr.indexOf(alphabet[i]) < 0) {
//             return false;
//         }
//     }
//     return true;
// }


////////////////////////////////////////////////////////////////
// Task: Sum of two lowest positive integers
// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.
// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// My Solution:
// function sumTwoSmallestNumbers(numbers) {  
//     let newArray = numbers.sort((a, b) => a - b).slice(0,2);
//     return newArray[0] + newArray[1]
// }


////////////////////////////////////////////////////////////////
// Task: Find the stray number
// You are given an odd-length array of integers, in which all of them are the same, except for one single number.
// Complete the method which accepts such an array, and returns that single different number.

// My Solution: 
// function stray(numbers) {
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] !== numbers[i + 1] && numbers[i] !== numbers[i + 2]) {
//             return numbers[i]
//         }
//     }
// }


////////////////////////////////////////////////////////////////
// Task: Odd or Even?
// Given a list of integers, determine whether the sum of its elements is odd or even.
// Give your answer as a string matching "odd" or "even".
// If the input array is empty consider it as: [0] (array with a zero).

// My Solution:
// function oddOrEven(array) {
//     let sum = array.reduce(function (previousValue, currentValue) {
//         return previousValue + currentValue
//       }, 0)
//     if (sum % 2 === 0) {
//         return "even"
//     }
//     return "odd"
// }


////////////////////////////////////////////////////////////////
// Task: Exes and Ohs
// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// My Solution:
// function XO(str) {
//     let xArray = []
//     let oArray = []

//     let strArray = str.toLowerCase().split('')
//     for (element of strArray) {
//         if (element === "x") {
//             xArray.push(element)
//         }
//         if (element === "o") {
//             oArray.push(element)
//         }
//     }

//     if (xArray.length === oArray.length) {
//         return true
//     }
//     return false
// }


////////////////////////////////////////////////////////////////
// Task: Reverse words
// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// My Solution:
// function reverseWords(str) {
//     return str.split("").reverse().join("").split(" ").reverse().join(" ")
// }


////////////////////////////////////////////////////////////////