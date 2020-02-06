//Given a string reverse it
//Reverse a string diferent ways
(function rev(str) {
    let rev1 = str.split('').reverse().join('');
    return rev1;
})('edwin');

(function rev2(str) {
    console.log([...str].reverse().join('')); //sprise str into an array
})('edwin');

(function rev3(str) {  // es6 sintax for of 
    let rev = '';
    for (let char of str) {
        rev = char + rev;
    }
    console.log(rev);
})('edwin');


// Its a Palindrom
//Option 1:
const Palindrom = (str) => {
    const rev = str.split("").reverse().join("");
    console.log(str === rev);
}
Palindrom('oso');
//Option 2:
(function (str) {
    let rev = '';
    for (let x of str) {
        rev = x + rev;
    }
    console.log(str === rev);
})('pal');


//find the charecter that apppears the most an total number of times it appears
const maxCahr = (str) => {
    let obj = {};
    for (let char of str) { // each char of the str
        if (!obj[char]) { // if the char is not in the obj
            obj[char] = 1; // then the value of the char is 1 
        } else {            //else the value of the obj increments +1 
            obj[char]++;
        }
    }
    let maxNum = 0;
    let maxChar = '';
    for (let char in obj) {
        if (obj[char] >= maxNum) {
            maxNum = obj[char];
            maxChar = char
        }
    }
    console.log(maxChar, maxNum);
}
maxCahr('assseasdfed1');


/*Fizz buzz write a progrma 1 to n
for multiples of 3 print fizz and for multiples of 5 print buzz
for multiples of both 3 and 5 print fizzbuzz
*/
((num) => {
    for (let i = 1; i <= 15; i++) {
        //check 15
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('fizzbuzz');
            ++i;
        }
        //check 3
        if (i % 3 === 0) {
            console.log('fizz');
            ++i;
        }
        //check 5
        if (i % 5 === 0) {
            console.log('buzz');
            ++i;
        }
        //check 15
        if (i % 3 === 0) {
            console.log('fizz');
            ++i;
        }
        if (i > num) {
            break;
        } else {
            console.log(i);
        }
    }
})(15);

/* write a function chunk(arr,n); that returns chunked 
array of the size of n at the least. look at the example*/
const chunks = ((arr, n) => {
    const chunked = [];

    for (let elem of arr) {
        let last = chunked[chunked.length - 1];

        if (!last || last.length === n)
            chunked.push([elem]);
        else
            last.push(elem);
    }
    return chunked;
})([1, 4, 12, 3, 2, 6, -9, 0], 3)
console.log({ chunks });


/**
 Implement an algorithm to determine is a string has all unique characters
 */
(function (str) {
    let obj = {}; //turn string to obj
    for (let char of str) { //loop the string
        if (!obj[char]) {     // check the obj char dosnt exist
            obj[char] = 1;      // value of the obj = 1
        } else {
            obj[char]++;      // incress the value a of the obj
        }
    }

    for (let i in obj) {      // loop trou each the obj i
        if (obj[i] > 1) {         // if its greater than 1   
            return false;
        } else {
            return true;
        }
    }
})('uniqe');


/* Given two strings, write method to decide if one is a 
permutation of the other*/
// permutation same strings diferent order.
(function (str1, str2) {
    let first = str1.split('').sort().join('').toLowerCase();
    let second = str2.split('').sort().join('').toLowerCase();
    return (first === second);
})('qwe', 'ewq');


/*
NOTES for in (loop trhouw property names or indexes) objects  and for of ( vproporty values) arrays  
**/


/* factorialize a number */
//productor of the int a  5 ->   1*2*3*4*5 = 120
(function factorialize(num) {
    let bucket = 1;
    for (let i = 1; i <= num; i++) {
        bucket = bucket * i
    }
    return bucket;
})(5);

//Find the longest word in a string
function findLongest(str) {
    var words = str.split(' ');
    var longest = '';
    for (var word of words) {
        if (word.length > longest.length) { //if the (3) is greater that longestlength (0) 
            longest = word;
        }
    }
    return longest;
}
findLongest('the thing is that evereything');

//Return an array consisting of the largest number from 
//each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.
function largestOfFour(arr) {
    let array = [];
    for (let i = 0; i < arr.length; i++) {
        let bigNum = arr[i][0]; // 0,13
        for (let j = 0; j < arr[i].length; j++) {
            if (bigNum < arr[i][j]) {
                bigNum = arr[i][j];
            }
        }
        array[i] = bigNum;
    }
    return array;
}
largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]])
/*Code Explanation
Create a variable to store the results as an array.
Create an outer loop to iterate through the outer array.
Create a second variable to hold the largest number and initialise it with the first number.
 This must be outside an inner loop so it won’t be reassigned until we find a larger number.
Create said inner loop to work with the sub-arrays.
Check if the element of the sub array is larger than the currently stored largest number. If so, then update the number in the variable.
After the inner loop, save the largest number in the corresponding position inside of the results array.
And finally return said array.*/


/**Check if a string (first argument, str) ends with the given target string (second argument, target).*/
//array.slice(start, end)
function confirmEnding(str, target) {
    return str.slice(str.length - target.length) === target; //slice starts at the position 12 beginning of 'on'
}
confirmEnding("Congratulation", "on");


//Repeat a given string str (first argument) for num times (second argument). 
//Return an empty string if num is not a positive number.

function repeatStringNumTimes(str, num) {
    // repeat after me
    let temp = "";
    for (let i = 0; i < num; i++) {
        if (num <= 0) {
            temp = "";
        } else {
            temp += str
        }
    }
    return temp;
}
repeatStringNumTimes("abc", 3);


//Truncate a string (first argument) if it is longer than the given 
//maximum string length (second argument). Return the truncated string with a ... ending.

function truncateString(str, num) {
    // Clear out that junk in your trunk
    if (str.length > num) {
        return str.slice(0, num) + '...';
    } else {
        return str;
    }
}
truncateString("A-tisket a-tasket A green and yellow basket", 8);


/*Create a function that looks through an array (first argument) and returns the first element in the array 
that passes a truth test (second argument). If no element passes the test, return undefined.*/
function findElement(arr, func) {
    let num = 0;
    for (let i of arr) {
        if (func(i)) {
            return num = i;
        } else {
            num = undefined;
        }
    }
    return num;
}
findElement([1, 2, 3, 4], num => num % 2 === 0);

/**
 * Boo who
Check if a value is classified as a boolean primitive. Return true or false.
Boolean primitives are true and false.
 */

function booWho(bool) {
    // What is the new fad diet for ghost developers? The Boolean.
    if (typeof bool === 'boolean') {
        return true;
    } else {
        return false;
    }
}
booWho(null);

/**
 * Title Case a Sentence
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
 */

function titleCase(str) {
    let e = str.split(" ");
    //let len = e.length;
    for (let i = 0; i < e.length; i++) {
        if (e[i][0]) {
            e[i][0].toUpperCase();
        }
    }
    return str;
}
titleCase("I'm a little tea pot");

/**
Slice and Splice
You are given two arrays and an index.
Use the array methods slice and splice to copy each element of the first array into the second array, in order.
Begin inserting elements at index n of the second array.
Return the resulting array. The input arrays should remain the same after the function runs.
 */
function frankenSplice(arr1, arr2, n) {
    // It's alive. It's alive!
    arr1.reverse();
    for (let i = 0; i < arr1.length; i++) {
        arr2.splice(n, 0, arr1[i]);
    }
    return (arr2);
}
frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2);



