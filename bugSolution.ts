function compare(a: any, b: any): number {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  } else {
    return 0; 
  }
}

const arr = [1, 2, 3, 4, 5];
arr.sort(compare);
console.log(arr); // Output: [1, 2, 3, 4, 5]

// Handling potential issues: Type checking and NaN
function robustCompare(a: number, b: number): number {
  if (isNaN(a) || isNaN(b)) {
    // Handle NaN values appropriately
    return isNaN(a) ? (isNaN(b) ? 0 : 1) : -1; // NaN is greater than any number
  }
  return a < b ? -1 : (a > b ? 1 : 0);
}

const arr2 = [1, NaN, 3, 4, 5];
arr2.sort(robustCompare);
console.log(arr2); //Output: [1, 3, 4, 5, NaN]