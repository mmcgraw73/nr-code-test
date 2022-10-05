// run `node index.js` in the terminal

var fs = require('fs');
var text = fs.readFileSync('./big_test.txt');
const STR = text.toString('utf-8');

/**
 * @param str String: the parsed string
 * @param phrase String: the search string
 * @returns Number: count of times phrase appears
 */
function phraseCount(str, phrase) {
  return str.split(phrase).length - 1;
}

function cycleString(str) {
  // punctuation removal
  str = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
  str = str.replace(/(\r\n|\n|\r)/gm, '');
  // give me an array of words from the imported .txt file
  let strArr = str.split(' ');
  let phrases = [];
  // for the length of the word array...
  for (let i = 0; i < strArr.length; i++) {
    // count the times phrase appears
    let pc = phraseCount(str, `${strArr[0]} ${strArr[1]} ${strArr[2]}`);
    // then take out that phrase and loop back with the updated parsed string value
    let threewords = strArr.splice(0, 3);
    // package up a new array of objects with 2 properties `count` and `phrase`
    phrases.push({ count: pc, phrase: threewords.join(' ') });
  }

  // return the array objects sorted by count and ordered high>low
  return phrases.sort((a, b) => (a.count > b.count ? 1 : -1)).reverse();
}

console.log(cycleString(STR));
