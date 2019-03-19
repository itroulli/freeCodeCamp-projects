// Remove all falsy values from an array.

// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

// Hint: Try converting each value to a Boolean.

function falsyBouncer(arr) {
  // Don't show a false ID to this bouncer.
  for (let i=0; i<arr.length; i++){
    if (!arr[i]){
      arr.splice(i,1);
      i--;
    }
  }
  return arr;
}

bouncer([7, "ate", "", false, 9]);
