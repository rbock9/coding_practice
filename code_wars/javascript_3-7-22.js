// Reversed Strings
// Complete the solution so that it reverses the string passed into it.

// let str = 'world'
// function solution(str){
//     return str.split('').reverse().join('').toString()
// }

// console.log(solution(str))

///////////////////////////////////////////////////////

// Are You Playing Banjo?
// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!
// The function takes a name as its only argument, and returns one of the following strings:
// name + " plays banjo" 
// name + " does not play banjo"
// Names given are always valid strings.

// function areYouPlayingBanjo(name) {
//     if (name.startsWith('R') || name.startsWith('r')) {
//         return `${name} plays banjo`
//     } else {
//         return `${name} does not play banjo`
//     }
// }

// console.log(areYouPlayingBanjo('rob'))

///////////////////////////////////////////////////////

// Who likes it?
// You probably know the "like" system from Facebook and other pages. We want to create the text that should be displayed next to such an item.
// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:
// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
// Note: For 4 or more names, the number in "and 2 others" simply increases.


// function likes(names) {
//     if (names.length <= 0) {
//        return `no one likes this`
//     } else if (names.length <= 1) {
//         return `${names[0]} likes this`
//     } else if (names.length === 2) {
//         return `${names[0]} and ${names[1]} like this`
//     } else if (names.length === 3) {
//         return `${names[0]}, ${names[1]} and ${names[2]} like this`
//     } else if (names.length >= 4) {
//         return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
//     } 
// }
// const names = ["Alex", "Jacob", "Mark", "Max", "Rob"]  
// console.log(likes(names))

///////////////////////////////////////////////////////

// Stop gninnipS My sdroW!
// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"

// let string = "This is rehtona test"

// function spinWords(string){
//     let words = string.split(' ')
//     let newArray = []
//     for (let word of words) {
//         if (word.length >= 5) {
//             let newWord = word.split('').reverse().join('')
//             newArray.push(newWord)
//         } else {
//             newArray.push(word)
//         }
//     } 
//     return newArray.join(' ').toString()
// }

///////////////////////////////////////////////////////

// Find The Parity Outlier
// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.
// Examples:
// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)


// const integers = [15113786, 155836346, -21002476, 658092, -25659577,-21472382, 118911468, -170055452, 145235232, 43099686, 171638958]

// function findOutlier(integers){
//     let evenArray = []
//     let oddArray = []
//     for (let i = 0; i <= integers.length; i++) {
//         if (integers[i] % 2 === 0 || integers[i] % 2 === -0) {
//             evenArray.push(integers[i])
//         } else if (integers[i] % 2 === 1 || integers[i] % 2 === -1) {
//             oddArray.push(integers[i])
//         }
//     }
//     if (evenArray.length > oddArray.length) {
//         return oddArray[0]
//     }
//     return evenArray[0]
// }

// console.log(findOutlier(integers))