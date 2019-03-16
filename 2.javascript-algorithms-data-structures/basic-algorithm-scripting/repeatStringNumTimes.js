// We could solve the problem using the built-in .repeat() method but
// for the purspose of the challenge we were required not to

function repeatStringNumTimes(str, num) {
  // repeat after me
  let full_str = ""
  if (num <= 0){
    return "";
  }
  else {
    for (let i=0;i<num;i++){
    full_str += str;
    }
  }
  return full_str;
}

repeatStringNumTimes("abc", 3);

// We could have also solved the problem using recursion
