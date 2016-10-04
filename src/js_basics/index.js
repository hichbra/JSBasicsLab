
export const isNumberEven = (i) => {
  return (i % 2 === 0);
};

export const getFileExtension = (str) => {
  // str will be a string, but it may not have a file extension.
  // Return the file extension (with no period) if it has one, otherwise false
  str = str.split('.');

  if (str.length < 2) {
    return false;
  }

  return str.pop();
};


export const longestString = (arr) => {
  // arr will be an array.
  // Return the longest string in the array
};

export const reverseString = (str) => {
  // str will be an string
  // Return a new string who's characters are in the opposite order to str's.
};

export const isPalindrome = (str) => {
  // str will be an string
  // Return true if it is a palindrome and false otherwise.
  // It should be case insensitive and not consider space or punctuation.
};

export const nestedSum = (arr) => {
  // arr will be an array, containing integers, strings and/or arrays like itself
  // Return the sum all the numbers you find, anywhere in the nest of arrays.
};
