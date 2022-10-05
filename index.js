// run `node index.js` in the terminal

var fs = require('fs');
var text = fs.readFileSync('./test.txt');

console.log(text.toString('utf-8'));

const STR = text.toString('utf-8');

function phraseCount(str, phrase) {
  //console.log(str.split(phrase).length - 1);
  return str.split(phrase).length - 1;
}

function cycleString(str) {
  // punctuation removal
  str = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
  let strArr = str.split(' ');
  let phrases = [];
  for (let i = 0; i < strArr.length; i++) {
    let pc = phraseCount(str, `${strArr[0]} ${strArr[1]} ${strArr[2]}`);
    let threewords = strArr.splice(0, 3);
    // console.log(pc, '| ', threewords.join(' '));
    phrases.push({ count: pc, phrase: threewords.join(' ') });
  }
  console.log(phrases.sort((a, b) => (a.count > b.count ? 1 : -1)).reverse());
  return phrases;
}

cycleString(STR);
