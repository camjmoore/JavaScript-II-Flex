// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.


/* 

// GIVEN THIS PROBLEM:

function firstItem(arr, cb) {
  // firstItem passes the first item of the given array to the callback function.
}

// SOLUTION:

function firstItem(arr, cb) {
    return cb(arr[0]);
  }
  
  // NOTES ON THE SOLUTION:
  
  // firstItem is a higher order function.
  // It expects a callback (referred to as `cb`) as its second argument.
  // To test our solution, we can use the given `items` array and a variety of callbacks.
  // Note how callbacks can be declared separately, or inlined.
  
  // TEST 1 (inlined callback):
  
  const test1 = firstItem(items, item => `I love my ${item}!`);
  console.log(test1); // "I love my Pencil!"
  
  // TEST 2 (declaring callback before hand):
  
  function logExorbitantPrice(article) {
    return `this ${article} is worth a million dollars!`;
  };
  
  const test2 = firstItem(items, logExorbitantPrice);
  console.log(test2); // "this Pencil is worth a million dollars!"
  */
 
 const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];
 
// upon initial declaration; getLength is a higher order function by definition; it takes a func as a param

//upon invocation we give it the appropriate arguments 
//an array and a function 

//the argument function happens to be an inline, higher order function that takes getLength as its parameter function

//this inline, higher order function is passing our initially declared higher order function as an argument
//getLength(items, getLength => {console.log(getLength)})

//this argument gets passed to the cb parameter of getLength our initially declared higher order function

//the function we are passing as an argument logic in the inline invocation acts upon the 
//the logic in the intial declaration

// getLength passes the length of the array into the callback.

 function getLength(arr, cb) {
   return cb(arr.length)
}
getLength(items, getLength => {console.log(getLength)})


// last passes the last item of the array into the callback.
function last(arr, cb) {
return cb(arr[arr.length-1])
}

last(items, last => {console.log(last)})


// sumNums adds two numbers (x, y) and passes the result to the callback.
function sumNums(x, y, cb) {
  return cb(x + y)
}

sumNums(2, 3, sumNums => {console.log(sumNums)})


// multiplyNums multiplies two numbers and passes the result to the callback.
function multiplyNums(x, y, cb) {
  return cb(x * y)
}

multiplyNums(3, 7, multiplyNums => {console.log(multiplyNums)})


// contains checks if an item is present inside of the given array/list.
// Pass true to the callback if it is, otherwise pass false.
function contains(item, list, cb) {
  if(list.includes(item)){
    cb(true)
  } else {cb(false)}
}

contains('yo-yo', items, contains => {console.log(contains)})


/* STRETCH PROBLEM */
const duplicates = ['Pencil','Pencil', 'Notebook', 'yo-yo', 'yo-yo', 'yo-yo', 'Gum'];

function removeDuplicates(array, cb) {
  cb(array.filter((item, index) => array.indexOf(item) === index))
}
//filter makes a new array and populates it with values whose index matches the index
// the new array now has a set its own indexes just like any other array
//at the time it encounters a duplicate; if it has already obtained that value at an index, it
//will say: sorry, that value for my index of i has been filled, and move on
//it says: does the value from the array (removeDuplicates) that I'm checking 
//have the index of the value that I have? no ? then I must move on and 
//keep searching for new values whose index = an index that has not been assigned already
removeDuplicates(duplicates, removeDuplicates => {console.log(removeDuplicates)})
