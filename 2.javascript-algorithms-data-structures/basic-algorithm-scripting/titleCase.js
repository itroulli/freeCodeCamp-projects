// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".


function titleCase(str) {
  let arr = str.split(" ");
  for (let i=0;i<arr.length;i++){
    arr[i] = arr[i].substring(0,1).toUpperCase() 
    + arr[i].substring(1).toLowerCase();
  }
  str = arr.join(" ");
  return str;
}

titleCase("I'm a little tea pot"); 			// expected output: "I'm A Little Tea Pot"
titleCase("sHoRt AnD sToUt");				// expected output: "Short And Stout"
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT");	// expected output: "Here Is My Handle Here Is My Spout"
