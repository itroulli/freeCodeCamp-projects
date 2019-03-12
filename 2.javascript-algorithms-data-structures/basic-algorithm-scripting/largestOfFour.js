// The spread operator comes handy in this case because Math.max() function cannot be applied to an array without it
// In addition, the number of sub-arrays inside the array it's irrelevant this way although in the description of the problem
// we were given a fixed number of four for simplicity

function largestOfFour(arr) {
  return arr.map(function(x){return Math.max(...x)});
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
