/*
How Much is True?
Create a function which returns the number of true values there are in an array.
Examples
countTrue([true, false, false, true, false]) ➞ 2
countTrue([false, false, false, false]) ➞ 0
countTrue([]) ➞ 0
Notes
Return 0 if given an empty array.
All array items are of the type bool (true or false).*/
function countTrue(arr) {
  return arr.filter(bool=>bool).length;
}

console.log(countTrue([true, false, false, true, false]) === 2)
console.log(countTrue([false, false, false, false]) === 0)
console.log(countTrue([]) === 0)
console.log(countTrue([false, false, true, true, false, false, false, true, true, true, true, false, true, true, false]) === 8)
console.log(countTrue([true, false, true, true, false, false, false, false, false]) === 3)
console.log(countTrue([false, true, true, false, true, true, false, true, false, true, false, true, false, true, false]) === 8)
console.log(countTrue([true, false, true, true, true, false, true, true, false, false]) === 6)
console.log(countTrue([false, false, false, false, true, false, true, false, true, false, false]) === 3)
console.log(countTrue([true, false, false, false, true, false, false, true, false, false, false]) === 3)
console.log(countTrue([true, true, false, true, false, false, false, false, true, false]) === 4)
console.log(countTrue([true, false, true, true, false, true, true, true, true, false, true, false, true, false]) === 9)
console.log(countTrue([true, false, true, true, true, true, false, true, true, false, true, false, false, false, false]) === 8)
console.log(countTrue([true, true, false, false, false, false, true, false, true, true, false, true]) === 6)