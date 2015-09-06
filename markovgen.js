//get the text file
fs = require('fs')
fs.readFile('lyrics.txt', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
//console.log("file accepted!");

//removes anything that isn't alpha or single apostrophe
//removes multiple adjacent spaces into single spaces

var editedData = data.replace(/[^a-zA-Z']/g," ").replace(/\s+/g, " ");


//console.log(editedData);
});




// for (var i = 0; i < titles.length; i++) {
//     var words = titles[i].split(' ');
//     terminals[words[words.length-1]] = true;
//     startwords.push(words[0]);
//     for (var j = 0; j < words.length - 1; j++) {
//         if (wordstats.hasOwnProperty(words[j])) {
//             wordstats[words[j]].push(words[j+1]);
//         } else {
//             wordstats[words[j]] = [words[j+1]];
//         }
//     }
// }

// var choice = function (a) {
//     var i = Math.floor(a.length * Math.random());
//     return a[i];
// };

// var make_fortune = function (min_length) {
//     word = choice(startwords);
//     var fortune = [word];
//     while (wordstats.hasOwnProperty(word)) {
//         var next_words = wordstats[word];
//         word = choice(next_words);
//         fortune.push(word);
//         if (fortune.length > min_length && terminals.hasOwnProperty(word)) break;
//     }
//     if (fortune.length < min_length) return make_fortune(min_length);
//     return fortune.join(' ');
// };