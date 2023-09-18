// Using a for-loop
function sumFor(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

// Using a while-loop
function sumWhile(numbers) {
  let sum = 0;
  let i = 0;
  while (i < numbers.length) {
    sum += numbers[i];
    i++;
  }
  return sum;
}

// Using recursion
function sumRecursion(numbers, index = 0) {
  if (index === numbers.length) {
    return 0;
  }
  return numbers[index] + sumRecursion(numbers, index + 1);
}

// Using underscore
function sumTheSimpleWay(numbers) {
  return _.reduce(numbers, (memo, num) => memo + num, 0);
}

// Example usage
const numbers = [1, 2, 3, 4, 5];
console.log(sumFor(numbers));// Output: 15
console.log(sumWhile(numbers));// Output: 15
console.log(sumRecursion(numbers));// Output: 15
console.log(sumTheSimpleWay(numbers)); // Output: 15
