//Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method.
const reverseString = (inputString) => {
  return inputString
    .split("")
    .reduce((reversedString, char) => char + reversedString, "");
};
console.log("task 1");
console.log(reverseString("hello world"));

//Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array.

const sumOfPositive = (arr) => {
  return arr.reduce((sum, current) => {
    if (current >= 0) {
      sum += current;
    }
    return sum;
  }, 0);
};
console.log("task 2");
console.log(sumOfPositive([2, -5, 10, -3, 7]));

//Task 3: Write a JavaScript program to find the most frequent element in an array and return it.
const mostFrequent = (arr) => {
  const frequencyMap = new Map();
  let maxCount = 0;
  let maxElement = arr[0];
  for (let item of arr) {
    const count = (frequencyMap.get(item) || 0) + 1;
    frequencyMap.set(item, count);
    if (count > maxCount) {
      maxCount = count;
      maxElement = item;
    }
  }
  console.log(maxElement);
};
console.log("task 3");
mostFrequent([3, 5, 2, 5, 3, 3, 1, 4, 5, 4, 6, 5, 8, 4, 4, 5]);

// Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.
const findNumbers = (arr, targetedNumber) => {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === targetedNumber) {
      return [left, right];
    } else if (sum < targetedNumber) {
      left++;
    } else {
      right--;
    }
  }
  return null;
};
console.log("task 4");
console.log(findNumbers([1, 3, 6, 8, 11, 15], 9));

//Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.
const calculator = (number1, number2, operator) => {
  switch (operator) {
    case "+":
      return number1 + number2;
    case "-":
      return number1 - number2;
    case "*":
      return number1 * number2;
    case "/":
      return number1 / number2;
    default:
      return null;
  }
};
console.log("task 5");
console.log(calculator(5, 8, "*"));

//Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.
const randomPassword = (length = 8) => {
  const validChars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_+=[]{}|;:,.<>?";
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * validChars.length);
    password += validChars[randomIndex];
  }
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSpecialChars = /[!@#$%^&*()\-_=+[{\]}\|;:,.<>?]/.test(password);

  // If the password does not meet the criteria, generate a new one recursively
  if (!(hasUppercase && hasLowercase && hasNumber && hasSpecialChars)) {
    return randomPassword(length);
  }
  return password;
};
console.log("task 6");
console.log(randomPassword(10));

//Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.
const romanToNumber = (roman) => {
  const romanToInt = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;
  let previousValue = 0;
  for (let i of roman) {
    const current = romanToInt[i];
    if (current > previousValue) {
      result += current - 2 * previousValue;
    } else {
      result += current;
    }
    previousValue = current;
  }
  return result;
};
console.log("task 7");
console.log(romanToNumber("IV"));
console.log(romanToNumber("XIV"));
console.log(romanToNumber("XX"));
console.log(romanToNumber("MXX"));

//Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.

function secondSmallest(arr) {
  if (arr.length < 2) {
    throw new Error("Array must have at least two elements.");
  }

  let smallest = arr[0];
  let secondSmallest = arr[1];
  for (let num of arr) {
    if (num < smallest) {
      secondSmallest = smallest;
      smallest = num;
    } else if (num < secondSmallest && num !== smallest) {
      secondSmallest = num;
    }
  }

  return secondSmallest;
}
console.log("task 8");
console.log(secondSmallest([5, 2, 8, 1, 9, 3, 0]));
