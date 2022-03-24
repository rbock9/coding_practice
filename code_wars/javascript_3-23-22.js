// String Transformer
// Given a string, return a new string that has transformed based on the input:

// --Change case of every character, ie. lower case to upper case, upper case to lower case.
// --Reverse the order of words from the input.
// Note: You will have to handle multiple spaces, and leading/trailing spaces.
// For example: "Example Input" ==> "iNPUT eXAMPLE"
// You may assume the input only contain English alphabet and spaces.

// let testString = ' g F e D c B a '

// function stringTransformer(str) {
//     result = ''
//     for (let i = 0; i < str.length; i++) {
//         char = str[i]
//         if (char === char.toUpperCase()) {
//             result += char.toLowerCase()
//         } else if (char === char.toLowerCase()) {
//             result += char.toUpperCase()
//         } else {
//             result += char
//         }
//     }
//     let transformedString = result.split(' ').reverse().join(" ")
//     return transformedString
// }

// console.log(stringTransformer(testString))

/////////////////////////////////////////

// Is Integer Array?
// Write a function with the signature shown below:
// --returns true / True if every element in an array is an integer or a float with no decimals.
// --returns true / True if array is empty.
// --returns false / False for every other input.

// let array1 = [1, 2, 3, 4, 5]
// let array2 = ["dog", "cat", "panda", 2, 3.3]
// let array3 = [1.1, 2.2, 3.3, 4, 5.5]

// function isIntArray(arr) {
//     if (!Array.isArray(arr)) return false
//     if (!arr.length) return true
//     const isAnInteger = (num) => Number.isInteger(num)
//     return arr.every(isAnInteger)
// }

// console.log(isIntArray(array3))

/////////////////////////////////////////

