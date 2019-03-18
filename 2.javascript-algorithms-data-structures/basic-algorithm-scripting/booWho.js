// Check if a value is classified as a boolean primitive. Return true or false.

// Boolean primitives are true and false.

function booWho(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
  return (typeof bool === "boolean");
}

booWho(null);   // expected output: false
booWho(false);  // expected output: true
booWho(1);      // expected output: false
booWho("true"); // expected output: false
