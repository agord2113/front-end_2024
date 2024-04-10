function createMultiplicationMatrix() {
    // Create a 100x100 matrix filled with zeros
    const mulTable = new Array(100).fill(null).map(() => new Array(100).fill(0));
  
    // Fill the multiplication table
    for (let i = 0; i < 100; i++) {
      for (let j = 0; j < 100; j++) {
        mulTable[i][j] = i * j;
      }
    }
  
    return mulTable;
  }
  
  // Create the multiplication matrix
  const mulTable = createMultiplicationMatrix();
  
  // Print examples
  console.log("3 * 9 =", mulTable[3][9]); // Output: 3 * 9 = 27
  console.log("5 * 7 =", mulTable[5][7]); // Output: 5 * 7 = 35
  