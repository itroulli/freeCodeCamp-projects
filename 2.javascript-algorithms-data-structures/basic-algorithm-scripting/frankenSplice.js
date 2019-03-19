// Use the array methods slice and splice to copy each element of the first array into the second array, in order.

// Begin inserting elements at index n of the second array.

// Return the resulting array. The input arrays should remain the same after the function runs.

function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
  let result = arr2.slice(0);
  for (let i=0; i<arr1.length; i++){
    result.splice(n,0, arr1[i]);
    n++;
  }
  return result;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);						// expected output: [4, 1, 2, 3, 5, 6]
frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2); // expected output: ["head", "shoulders", "claw", "tentacle", "knees", "toes"]
