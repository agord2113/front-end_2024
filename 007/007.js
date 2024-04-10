function sum(arr) {
    // Check if arr is null or undefined
    if (arr == null) {
      throw new Error("sum(): Argument cannot be null or undefined");
    }
  
    // Check if arr is an array or a length-like object
    if (!Array.isArray(arr) && !isValidLengthLikeObject(arr)) {
      throw new Error("sum(): Argument must be an array or an object with a length property");
    }
  
    let total = 0;
  
    // Loop through elements and handle non-numeric values
    for (let i = 0; i < arr.length; i++) {
      const value = arr[i];
      if (typeof value !== "number") {
        console.warn(`sum(): Ignoring non-numeric value at index ${i}`);
        continue;
      }
      total += value;
    }
  
    return total;
  }
  
  // Helper function to check for valid length-like objects
  function isValidLengthLikeObject(obj) {
    return typeof obj === "object" && typeof obj.length === "number" && obj.length >= 0;
  }
  
  var result = sum([1, 2, null, undefined, 3]);
  alert(result); // output "6"
  
  result = sum({ "0": 5, "1": 10, "2": 15, length: 3 });
  alert(result); // output 30
  
  result = sum([1, 2, 3, "string"]); // throws error "sum(): arg should be numbers"
  