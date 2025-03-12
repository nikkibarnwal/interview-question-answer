// How do you find the first non-repeating character in a string?

const firstNonRepeatingChar = (str) =>
  [...str].find((c) => str.indexOf(c) === str.lastIndexOf(c)) || null;

console.log(firstNonRepeatingChar("swiss")); // Output: "w"
console.log(firstNonRepeatingChar("aabbcddcbe")); // Output: "e"
console.log(firstNonRepeatingChar("aabb")); // Output: null

// Second method
function firstNonRepeatingChar2(str) {
  let charCount = {};

  // Count occurrences of each character
  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Find the first character with count 1
  for (let char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }

  return null; // If no unique character found
}

// Example usage
console.log(firstNonRepeatingChar2("aabbcddcbe")); // Output: "e"
console.log(firstNonRepeatingChar2("racecars")); // Output: "e"
console.log(firstNonRepeatingChar2("aabb")); // Output: null
