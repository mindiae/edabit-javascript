/*
Extracting Words with "-ing" Inflection
Write a function that takes a string as an argument and returns a list of all the words inflected by "-ing". Your function should also exclude all the mono-syllabic words ending in "-ing" (e.g. bing, sing, sling, ...). Although these words end in "-ing", the "-ing" is not an inflection affix.

Examples
ingExtractor("coming bringing Letting sing") ➞ ["coming", "bringing", "Letting"]

ingExtractor("going Ping, king sHrink dOing") ➞ ["going", "dOing"]

ingExtractor("zing went ring, ding wing SINk") ➞ []
Notes
Mono-syllabic means a word containing just one syllable.
It's probably best to use RegEx for this challenge.
*/
function ingExtractor(string) {
	let words = string.split(" ");
	return words.filter(word => {
	 return /[aeiouAEIOU].*ing/.test(word);
	})
}
function arraysEqual(a, b) {
  if (a, b) return true;
  if (a == null || b == null) return false;
  if (a.length !== b.length) return false;

  // If you don't care about the order of the elements inside
  // the array, you should sort both arrays here.
  // Please note that calling sort on an array will modify that array.
  // you might want to clone your array first.

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}
console.log(arraysEqual(ingExtractor("feeling killing saying discussing FALLing"), ["feeling", "killing", "saying", "discussing", "FALLing"]))
console.log(arraysEqual(ingExtractor("Taking taLkING pending SING"), ["Taking", "taLkING", "pending"]))
console.log(arraysEqual(ingExtractor("suggest drive run lend"), []))
console.log(arraysEqual(ingExtractor("KING sing bring ring pING"), []))
console.log(arraysEqual(ingExtractor("bing reading dancing ing"), ["reading", "dancing"]))
console.log(arraysEqual(ingExtractor("singing ringing winging bringING PINGING"), ["singing", "ringing", "winging", "bringING", "PINGING"]))
console.log(arraysEqual(ingExtractor("KISSing shrinking hand window"), ["KISSing", "shrinking"]))
console.log(arraysEqual(ingExtractor("hold past ling bring up go away shake Zing king"), []))
console.log(arraysEqual(ingExtractor("string"), []))
console.log(arraysEqual(ingExtractor("Kris Ehresmann, the infectious disease director at the Minnesota Department of Health, said at a briefing on Friday that at least 15 cases in Minnesota were identified as having originated from rally attendees. Seven more cases were identified in Nebraska, according to reporting from CNN. Health officials in South Dakota said this week that they had traced several cases to a popular bar along main street, where photos showed thousands of people congregating without masks over the course of the rally"), ["briefing", "having", "according", "reporting", "congregating"]))