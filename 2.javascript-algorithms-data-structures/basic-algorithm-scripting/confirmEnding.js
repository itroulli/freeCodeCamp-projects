  // We could solve this problem with the built-in method .endsWith() but 
  // for the purpose of the challenge it was required not to do so.

function confirmEnding(str, target) {
  return str.slice(str.length - target.length) === target;
}

confirmEnding("Bastian", "n");
