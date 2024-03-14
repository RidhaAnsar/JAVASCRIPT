function countVowels(str) {
    // Define a regular expression to match vowels (case-insensitive)
    const vowelRegex = /[aeiou]/gi; // 'g' for global match, 'i' for case-insensitive match
    // Match the vowels in the string and count them
    const vowelMatches = str.match(vowelRegex);
    // Return the count of vowels found
    return vowelMatches ? vowelMatches.length : 0;
}

// Example usage:
const inputString = "Hello, World!";
const vowelCount = countVowels(inputString);
console.log("Number of vowels:", vowelCount);
