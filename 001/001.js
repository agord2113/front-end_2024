function findDuplicates(arr) {
    // Use a Set to efficiently keep track of unique elements
    const uniqueElements = new Set();
    const duplicates = [];
  
    // Iterate through the array
    for (const element of arr) {
      // If the element is already in the Set, it's a duplicate
      if (uniqueElements.has(element)) {
        duplicates.push(element);
      } else {
        // Add the element to the Set
        uniqueElements.add(element);
      }
    }
  
    // Return the array of duplicates
    return duplicates;
  }
  
  // Example usage
  const initialArr = [1, 2, 3, 1, 5, 3, 4, 1];
  const duplicates = findDuplicates(initialArr);
  
  console.log("Initial array:", initialArr);
  console.log("Duplicate elements:", duplicates);
  