/*
The Fiscal Code (Part II): the Check Letter
In this challenge, you must build a program that generates the last character of an Italian Codice Fiscale, an alphanumeric identifying ID code.

The last character, also called check letter or CIN (Control Internal Number) === is calculated after converting every other character into a numeric value, in relation to the parity of their natural position into the string (treating so the string as a 1-indexed sequence).

CONVERSION TABLE
Char	Odd	Even		Char	Odd	Even
0	1	0		I	19	8
1	0	1		J	21	9
2	5	2		K	2	10
3	7	3		L	4	11
4	9	4		M	18	12
5	13	5		N	20	13
6	15	6		O	11	14
7	17	7		P	3	15
8	19	8		Q	6	16
9	21	9		R	8	17
A	1	0		S	12	18
B	0	1		T	14	19
C	5	2		U	16	20
D	7	3		V	10	21
E	9	4		W	22	22
F	13	5		X	25	23
G	15	6		Y	24	24
H	17	7		Z	23	25
When all characters will be converted accordingly to the conversion table, you have to sum these values and divide the result by 26: the remainder will give you the index of a letter, from A = 0 up to Z = 25.

Given a string code being a partial Fiscal Code, implement a function that returns the CIN as a capitalized single letter.

Example
fiscalCodeCIN("MRTMTT25D09F205") ➞ "Z"

Convert the characters in odd positions:

Pos   Char   Value
1st  -> M -> 18
3rd  -> T -> 14
5th  -> T -> 14
7th  -> 2 -> 5
9th  -> D -> 7
11th -> 9 -> 21
13th -> 2 -> 5
15th -> 5 -> 13

Convert the characters in even positions:

Pos   Char   Value
2nd  -> R -> 17
4th  -> M -> 12
6th  -> T -> 19
8th  -> 5 -> 5
10th -> 0 -> 0
12th -> F -> 5
14th -> 0 -> 0

Sum of the values:

18 + 14 + 14 + 5 + 7 + 21 + 5 + 13 +
17 + 12 + 19 + 5 + 0 + 5 + 0 = 155

The remainder (modulo) of 155 % 26 is 25

Starting from A = 0, Z is the 25th letter
Notes
Remember that the positions of characters into the string are 1-indexed. On the other hand, when returning the check letter, the positions of the letters into the alphabet are 0-indexed.
You can expect only valid data: uppercase alpha-numeric strings made of 15 valid characters.
Check the Resources tab for more info on Codice Fiscale.
*/
conversions = [
{char: "0", odd: 1, even: 0},
{char: "1", odd: 0, even: 1},
{char: "2", odd: 5, even: 2},
{char: "3", odd: 7, even: 3},
{char: "4", odd: 9, even: 4},
{char: "5", odd: 13, even: 5},
{char: "6", odd: 15, even: 6},
{char: "7", odd: 17, even: 7},
{char: "8", odd: 19, even: 8},
{char: "9", odd: 21, even: 9},
{char: "A", odd: 1, even: 0},
{char: "B", odd: 0, even: 1},
{char: "C", odd: 5, even: 2},
{char: "D", odd: 7, even: 3},
{char: "E", odd: 9, even: 4},
{char: "F", odd: 13, even: 5},
{char: "G", odd: 15, even: 6},
{char: "H", odd: 17, even: 7},
{char: "I", odd: 19, even: 8},
{char: "J", odd: 21, even: 9},
{char: "K", odd: 2, even: 10},
{char: "L", odd: 4, even: 11},
{char: "M", odd: 18, even: 12},
{char: "N", odd: 20, even: 13},
{char: "O", odd: 11, even: 14},
{char: "P", odd: 3, even: 15},
{char: "Q", odd: 6, even: 16},
{char: "R", odd: 8, even: 17},
{char: "S", odd: 12, even: 18},
{char: "T", odd: 14, even: 19},
{char: "U", odd: 16, even: 20},
{char: "V", odd: 10, even: 21},
{char: "W", odd: 22, even: 22},
{char: "X", odd: 25, even: 23},
{char: "Y", odd: 24, even: 24},
{char: "Z", odd: 23, even: 25}];
onlyLetters = conversions.slice(10);
function fiscalCodeCIN(code) {
	let array = code.split("");
	let values = array.map((letter, index) => {
	  let pos;
	  if ((index + 1) % 2 === 0) pos = "even";
	  else pos = "odd";
	  conversion = conversions.find(obj => obj.char === letter);
	  return conversion[pos];
	});
	valuesSum = values.reduce((previous, current) => previous + current);
	remainder = valuesSum % 26;
	letterObj = onlyLetters.find(obj => obj.even === remainder);
	return letterObj.char;
}
console.log(fiscalCodeCIN("MRTMTT25D09F205") === "Z")
console.log(fiscalCodeCIN("BTTRSE85M20C351") === "V")
console.log(fiscalCodeCIN("MLLSNT82P65Z404") === "U")
console.log(fiscalCodeCIN("CPNLAX99A17H501") === "O")
console.log(fiscalCodeCIN("CRUMRA67S47F704") === "O")
console.log(fiscalCodeCIN("MSOMKY28A16B230") === "V")
console.log(fiscalCodeCIN("YUXHLN50T41E999") === "X")
console.log(fiscalCodeCIN("CHEBND61T01Z799") === "R")