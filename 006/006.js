function copyPropertyNamesToArray(obj, arr = []) {
    // Check if the first argument is a valid object
    if (typeof obj !== "object" || obj === null) {
      throw new Error("The first argument must be an object");
    }
  
    // Loop through the object's properties using a for-in loop
    for (const prop in obj) {
      // Add the property name to the array
      arr.push(prop);
    }
  
    // Return the populated array
    return arr;
  }
  
  var obj1 = { a: 10, b: 20 };
  var obj2 = { c: 30, d: 40 };
  
  var a = copyPropertyNamesToArray(obj1);  // a = ["a", "b"]
  
  copyPropertyNamesToArray(obj2, a);        // Add properties from obj2 to a
  
  alert(a); // Output: "a,b,c,d" (arr is modified in-place)
  