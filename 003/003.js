function findStringOnce(arr) {
    var obj = {};
  
    // Add elements as properties with a value of true (doesn't matter)
    arr.forEach(function(str) {
      obj[str] = true;
    });
  
    // Return the keys (unique strings) from the object
    return Object.keys(obj);
  }
  
  var initialArr = ["First", "Second", "First", "Third", "Fourth", "Fourth"];
  
  var strings = findStringOnce(initialArr);
  
  console.log("Initial array: " + initialArr.join(', '));
  console.log("Unique elements: " + strings.join(', '));
  