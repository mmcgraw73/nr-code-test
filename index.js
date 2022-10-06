/**
 * -----{ TO START: run `node index.js` in the terminal below }-----
 **/

var fs = require('fs');
// var text = fs.readFileSync('./big_test.txt');
var text = fs.readFileSync('./test.txt');
var STR = text.toString('utf-8');
var PHRASE_STRS = []

/**
 * @param str String: the parsed string
 * @param phrase String: the search string
 * @returns Number: count of times phrase appears
 */
function phraseCount(str, phrase) {
  return str.split(phrase).length - 1;
}

function cycleText(str) {
  // punctuation removal
  str = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
  // \n (as a string) removal
  str = str.replace(/(\r\n|\n|\r)/gm, '');
  // double space removal
  str = str.replace(/ +(?= )/g, '');
  // give me an array of words from the imported .txt file split at space
  let strArr = str.split(' ');
  let phrases = [];
  let len = Math.round(strArr.length / 3);
  // console.log('long', len);
  // for the length of the word array divided by 3 to account for 3 word phrases?? ...
  for (let i = 0; i < len; i++) {
    // count the times phrase appears
    let pc = phraseCount(str, `${strArr[0]} ${strArr[1]} ${strArr[2]}`);
    
    // then take out that phrase and loop back with the updated parsed string value
    let threewords = strArr.splice(0, 3);
    // package up a new array of objects, each object with 2 properties `count` and `phrase`
    phrases.push({ count: pc, phrase: threewords.join(' ') });
  }

  // ** remove duplicates hack ** -- culprit: for loop - number of times?
  phrases = phrases.filter(
    (value, index, self) =>
      index ===
      self.findIndex(
        (t) => t.count === value.count && t.phrase === value.phrase
      )
  );
  // only need 100 items
  if (len > 100) {
    phrases = phrases.splice(0, 100);
  }
  // return the array objects sorted by count and ordered high>low
  return phrases.sort((a, b) => (a.count > b.count ? 1 : -1)).reverse();
}

//console.log(cycleText(STR));

var processedArr = cycleText(STR);

//formatter - output correct format
function formatter(arr) {
  console.log('----- FORMATTED OUTPUT START -----');
  for (let i = 0; i < arr.length; i++) {
    console.log(`${arr[i].phrase} - ${arr[i].count}`);
  }
  console.log('----- FORMATTED OUTPUT END -----');
}

formatter(processedArr);

// fs.writeFile('common_phrases.txt', processedArr.join(' '), function (err) {
//   if (err) return console.log(err);
//   console.log('common_phrases.txt');
// });
