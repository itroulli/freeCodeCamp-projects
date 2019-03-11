function reverseStringLong(str) {
  // Because split, reverse and join methods return modified values,
  // they need to be assigned back to a variable 
  let arr = str.split("");
  arr = arr.reverse();
  str = arr.join("");
  return str;
}

reverseStringLong("hello");

// We can also chain these methods and return the modified value straight away
function reverseString(str) {
  return str.split("").reverse().join("");
}

reverseString("hola!");
