/*
Substring Consonant-Vowel Groups
Write two functions:

One to retrieve all unique substrings that start and end with a vowel.
One to retrieve all unique substrings that start and end with a consonant.
The resulting array should be sorted in lexicographic ascending order (same order as a dictionary).

Examples
getVowelSubstrings("apple"))
➞ ["a", "apple", "e"]

getVowelSubstrings("hmm") ➞ []

getConsonantSubstrings("aviation"))
➞ ["n", "t", "tion", "v", "viat", "viation"]

getConsonantSubstrings("motor"))
➞ ["m", "mot", "motor", "r", "t", "tor"]
Notes
Remember the output array should have unique values.
The word itself counts as a potential substring.
Exclude the empty string when outputting the array.
*/

function getVowelSubstrings(str) {
  result = [];
  vowels = ["a", "e", "i", "o", "u"];
  for (i=0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      for (j = i; j < str.length; j++){
        if (vowels.includes(str[j])) {
          result.push(str.slice(i, j+1));
        }
      }
    }
  }
  result = [...new Set(result)];
  result.sort();
  return result;
}

function getConsonantSubstrings(str) {
  result = [];
  vowels = ["a", "e", "i", "o", "u"];
  for (i=0; i < str.length; i++) {
    if (!vowels.includes(str[i])) {
      for (j = i; j < str.length; j++){
        if (!vowels.includes(str[j])) {
          result.push(str.slice(i, j+1));
        }
      }
    }
  }
  result = [...new Set(result)];
  result.sort();
  return result;
}
function arrayEquals(a, b) {
  // If length is not equal
  if(a.length!=b.length) return "False";
  else {
    // Comparing each element of array
    for(var i=0;i<a.length;i++)
      if(a[i]!=b[i]) return "False";
    return "True";
  }
}
console.log(arrayEquals(getVowelSubstrings("apple"), ["a", "apple", "e"]))
console.log(arrayEquals(getVowelSubstrings("carrot"), ["a", "arro", "o"]))
console.log(arrayEquals(getVowelSubstrings("aviation"), ["a", "ati", "atio", "avi", "avia", "aviati", "aviatio", "i", "ia", "iati", "iatio", "io", "o"]))
console.log(arrayEquals(getVowelSubstrings("motor"), ["o", "oto"]))
console.log(arrayEquals(getVowelSubstrings("rhyme"), ["e"]))
console.log(arrayEquals(getVowelSubstrings("hmm"), []))

console.log(arrayEquals(getConsonantSubstrings("apple"), ["l", "p", "pl", "pp", "ppl"]))
console.log(arrayEquals(getConsonantSubstrings("carrot"), ["c", "car", "carr", "carrot", "r", "rot", "rr", "rrot", "t"]))
console.log(arrayEquals(getConsonantSubstrings("aviation"), ["n", "t", "tion", "v", "viat", "viation"]))
console.log(arrayEquals(getConsonantSubstrings("motor"), ["m", "mot", "motor", "r", "t", "tor"]))
console.log(arrayEquals(getConsonantSubstrings("rhyme"), ["h", "hy", "hym", "m", "r", "rh", "rhy", "rhym", "y", "ym"]))
console.log(arrayEquals(getConsonantSubstrings("hmm"), ["h", "hm", "hmm", "m", "mm"]))