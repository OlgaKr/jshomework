// V1
function pow(x, y) {
  let result = x;
  for (let i = 1; i < y; i++) {
    result *= x;
  }
  return result;
}

console.log(pow(2, 3)); // 8
console.log(pow(5, 2)); // 25
console.log(pow(3, 4)); // 81

// V2
function pow(x, y) {
  let result = x;
  for (let i = 0; i < y-1; i++) {
    result *= x;
  }
  return result;
}

console.log(pow(2, 3)); // 8
console.log(pow(5, 2)); // 25
console.log(pow(3, 4)); // 81

// V3
function pow(x, y) {
  let result = 1; // Будь-яке число в нульовому степені = 1
  for (let i = 0; i < y; i++) {
    result *= x;
  }
  return result;
}

console.log(pow(2, 3)); // 8
console.log(pow(5, 2)); // 25
console.log(pow(3, 4)); // 81