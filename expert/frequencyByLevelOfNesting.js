/*
Frequency by Level of Nesting
Create a function that takes in a nested array and an element and returns the frequency of that element by nested level.

Examples
freqCount([1, 4, 4, [1, 1, [1, 2, 1, 1]]], 1)
➞ [[0, 1], [1, 2], [2, 3]]
// The array has one 1 at level 0, 2 1's at level 1, and 3 1's at level 2.

freqCount([1, 5, 5, [5, [1, 2, 1, 1], 5, 5], 5, [5]], 5)
➞ [[0, 3], [1, 4], [2, 0]]

freqCount([1, [2], 1, [[2]], 1, [[[2]]], 1, [[[[2]]]]], 2)
➞ [[0, 0], [1, 1], [2, 1], [3, 1], [4, 1]]
Notes
Start the default nesting (an array with no nesting) at 0.
Output the nested levels in order (e.g. 0 first, then 1, then 2, etc.).
Output 0 for the frequency if that particular level has no instances of that element (see example #2).
*/
function freqCount(arr, el) {
  let result = [];
  let flattened = [];
  let count = 0;
  for (let level = 0;arr.length > 0;level++) {
    
    for (let i=0; i<arr.length; i++) {
      if (arr[i] === el) count++;
      if (arr[i].constructor === Array) {
        flattened = [...flattened,...arr[i]];
      }
    }
    result.push([level, count]);
    arr = flattened;
    count = 0;
    flattened = [];
  }
  return result;
}
function arrayEquals(a, b) {
  // If length is not equal
  if(a.length!=b.length) return "False";
  else {
    // Comparing each element of array
    for(var i=0;i<a.length;i++)
      if (Array.isArray(a[i])) {
        arrayEquals(a[i], b[i]);
      }
      if(a[i]!=b[i]) return "False";
    return "True";
  }
}
console.log(arrayEquals(freqCount([1, 1, 1, 1], 1), [[0, 4]]))
console.log(arrayEquals(freqCount([1, 1, 2, 2], 1), [[0, 2]]))
console.log(arrayEquals(freqCount([1, 1, 2, [1]], 1), [[0, 2], [1, 1]]))
console.log(arrayEquals(freqCount([1, 1, 2, [[1]]], 1), [[0, 2], [1, 0], [2, 1]]))
console.log(arrayEquals(freqCount([[[1]]], 1), [[0, 0], [1, 0], [2, 1]]))
console.log(arrayEquals(freqCount([1, 4, 4, [1, 1, [1, 2, 1, 1]]], 1), [[0, 1], [1, 2], [2, 3]]))
console.log(arrayEquals(freqCount([1, 5, 5, [5, [1, 2, 1, 1], 5, 5], 5, [5]], 5), [[0, 3], [1, 4], [2, 0]]))
console.log(arrayEquals(freqCount([1, [2], 1, [[2]], 1, [[[2]]], 1, [[[[2]]]]], 2), [[0, 0], [1, 1], [2, 1], [3, 1], [4, 1]]))