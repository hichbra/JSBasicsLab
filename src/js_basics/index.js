
export const isNumberEven = (i) => {
  return (i % 2 === 0);
};

// str will be a string, but it may not have a file extension.
// Return the file extension (with no period) if it has one, otherwise false
export const getFileExtension = (str) => {
  str = str.split('.');

  if (str.length < 2) {
    return false;
  }

  return str.pop();
};

// arr will be an array.
// Return the longest string in the array
export const longestString = (arr) => {
  let long;
  let tailleLong = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > tailleLong && typeof arr[i] === 'string') {
      long = arr[i];
      tailleLong = arr[i].length;
    }
  }

  return long;
};

// str will be an string
// Return a new string who's characters are in the opposite order to str's.
export const reverseString = (str) => {
  return str.split('').reverse().join('');
};

// str will be an string
// Return true if it is a palindrome and false otherwise.
// It should be case insensitive and not consider space or punctuation.
export const isPalindrome = (str) => {
  str = str.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~ ()]/g, '');
  let reverse = str.split('').reverse().join('');

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== reverse[i]) {
      return false;
    }
  }

  return true;
};


function sumArray(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (!(arr[i] instanceof Array)) {
      if (typeof (arr[i]) === 'number') {
        sum += parseInt(arr[i], 10);
      }
    } else {
      sum += sumArray(arr[i]);
    }
  }

  return sum;
}

// arr will be an array, containing integers, strings and/or arrays like itself
// Return the sum all the numbers you find, anywhere in the nest of arrays.
export const nestedSum = (arr) => {
  return sumArray(arr);
};
