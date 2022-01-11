// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

var colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
var colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

describe('shuffleArray', () => {
  it('should return a randomized instance of a given array', () => {
    const randomized1 = shuffleArray(colors1);
    const randomized2 = shuffleArray(colors2);

    expect(randomized1.length).toEqual(4);
    expect(randomized2.length).toEqual(5);

    expect(randomized1).not.toEqual(expect.arrayContaining(colors1));
    expect(randomized2).not.toEqual(expect.arrayContaining(colors2));
 });
});


// b) Create the function that makes the test pass.

/**
 * Make an empty array called `shuffled` to story values
 * Slice off the first string in `arr` and encapsulate it in something called `contents`
 * Loop over the size of `contents`
 * Determine a random position of `contents` (e.g., `position`)
 * Push a random value into `shuffled` with the random position
 */

const shuffleArray = (arr) => {
  const shuffled = [];
  const contents = arr.slice(1);

  for (let i = 0; i < contents.length; i += 1) {
    let position = Math.floor(Math.random() * contents.length);
    shuffled.push(contents[position]);
  }

  return shuffled;
};

// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.

var nums1 = [3, 56, 90, -8, 0, 23, 6]

// Expected output: [-8, 90]

var nums2 = [109, 5, 9, 67, 8, 24]

// Expected output: [5, 109]

describe('minMax', () => {
  it('should return an array of the smallest and largest number', () => {
   expect(minMax(nums1)).toEqual([-8, 90]);
   expect(minMax(nums2)).toEqual([5, 109]);
 });
});

// b) Create the function that makes the test pass.

/**
 * Use min() and max() to determine the smallest and largest number of `arr`
 * These functions return one single value
 * Return the result of this inside of an array
 */

const minMax = (arr) => {
  return [
    Math.min(...arr),
    Math.max(...arr),
  ];
};

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

var testArray1 = [3, 7, 10, 5, 4, 3, 3]
var testArray2 = [7, 8, 2, 3, 1, 5, 4]

// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]

describe('combineArray', () => {
  it('should return a joined array with unique values', () => {
   expect(combineArray(testArray1, testArray2)).toEqual([3, 7, 10, 5, 4, 8, 2, 1]);
 });
});

// b) Create the function that makes the test pass.

/**
 * Combined the two arrays using concat()
 * Once you have that, create a Set of the new array
 * Sets will only contains unique values
 * Convert the Set back into a standard array
 */

const combineArray = (arr1, arr2) => {
  return Array.from(new Set(arr1.concat(arr2)));
};
