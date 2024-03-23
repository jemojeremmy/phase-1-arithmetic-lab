// helpers.js

// Function to calculate multiply
function calculateMultiply(num1, num2) {
    return num1 * num2;
  }
  
  // Function to generate a random integer greater than 0
  function generateRandomInteger() {
    return Math.floor(Math.random() * Number.MAX_SAFE_INTEGER) + 1;
  }
  
  // Function to calculate mod
  function calculateMod(num3, num4) {
    return num3 % num4;
  }
  
  // Function to find the highest number in a set
  function findMax(...numbers) {
    return Math.max(...numbers);
  }
  
  // Variables
  const num1 = 31;
  const num2 = 2;
  const num3 = 20;
  const num4 = 16;
  
  // Assigning values to variables based on instructions
  const multiply = calculateMultiply(num1, num2); // 31 * 2 = 62
  const random = generateRandomInteger();
  const mod = calculateMod(num3, num4); // 20 % 4 = 0 (remainder = 0)
  const max = findMax(20, 10, 5, 15, 7); // 20 is the highest number in the set
  
  