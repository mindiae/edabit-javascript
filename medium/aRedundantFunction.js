/*Write a function redundant that takes in a string str and returns a function that returns str.
Examples
const f1 = redundant("apple")
f1() ➞ "apple"
const f2 = redundant("pear")
f2() ➞ "pear"
const f3 = redundant("")
f3() ➞ ""
Notes
Your function should return a function, not a string.*/
function redundant(str) {
	return () => str;
}

const f1 = redundant("apple")
const f2 = redundant("pear")
const f3 = redundant("")

console.log(f1() === "apple")
console.log(f2() === "pear")
console.log(f3() === "")
