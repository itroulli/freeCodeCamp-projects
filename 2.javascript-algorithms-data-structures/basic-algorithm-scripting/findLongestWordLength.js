function findLongestWordLength(str) {
  let lengths = str.split(" ").map(function(x){return x.length});
  return Math.max(...lengths);
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
