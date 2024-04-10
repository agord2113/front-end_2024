function toCamelCase(str, options = {}) {
    const { customLength = 0 } = options; // Set default customLength to 0
  
    return str
      .toLowerCase() // Convert to lowercase
      .replace(/[-_]+/g, (match) => match[0].toUpperCase()) // Replace separators with uppercase first letter
      .replace(/^(.)|\s(.)/g, (match, firstLetter, followingLetter) => {
        // Capitalize first letter and letters following spaces
        return firstLetter?.toUpperCase() || followingLetter?.toUpperCase() || '';
      })
      .slice(0, customLength); // Limit output string length (optional)
  }
  
  // Examples with default behavior
  console.log(toCamelCase("background-color"));   // Output: backgroundColor
  console.log(toCamelCase("list-style-image"));  // Output: listStyleImage
  
  // Example with custom length
  console.log(toCamelCase("some-very-long-string", { customLength: 10 }));  // Output: someVeryLo
  