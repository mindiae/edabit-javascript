function binary(decimal) {
  if (decimal === 0) return "0";
	let quotient=decimal, reminder, binary="";
	while (true) {
	  binary = (quotient % 2) + binary;
	  quotient = Math.floor(quotient/2);
	  if (quotient === 0) return binary;
	}
}

console.log(binary(100) === "1100100")
console.log(binary(1) === "1")
console.log(binary(0) === "0")
console.log(binary(69) === "1000101")
console.log(binary(1023) === "1111111111")
console.log(binary(511) === "111111111")
console.log(binary(666) === "1010011010")
console.log(binary(123) === "1111011")