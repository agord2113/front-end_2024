function findUnique(arr) {
    return arr.reduce((acc, value) => {
      if (!acc.includes(value)) {
        acc.push(value);
      }
      return acc;
    }, []);
  }
  
  var initialArr = [1, 2, 3, 1, 5, 3, 4, 1];
  
  var unique = findUnique(initialArr);
  
  console.log("Initial array: " + initialArr);
  console.log("Unique elements:", unique);
  