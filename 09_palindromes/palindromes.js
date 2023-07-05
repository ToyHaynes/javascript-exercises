const palindromes = function (word) {
    // Remove non-alphanumeric characters and convert to lowercase
    const alphanumericWord = word.toLowerCase().replace(/[^a-z0-9]/g, '');
  
    // Reverse the string
    const reversedWord = alphanumericWord.split('').reverse().join('');
  
    // Compare the reversed string with the original string
    return alphanumericWord === reversedWord;
  };

// Do not edit below this line
module.exports = palindromes;
