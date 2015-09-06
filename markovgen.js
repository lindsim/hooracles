//get the text file
fs = require('fs')
fs.readFile('lyrics.txt', 'utf8', function (err,data) {
	if (err) {
    	return console.log(err);
  	}
//console.log("file accepted!");

//replaces anything that isn't alpha or single apostrophe with single space
//replaces multiple adjacent spaces into single spaces with single space
//sends this to makeDict function then makeChain function then the makeFortune function
	else {
		
		var dictionary = makeDict(data.replace(/[^a-zA-Z']/g," ").replace(/\s+/g, " ").toLowerCase().split(" "));
		for (var x = 0; x < 100; x++){
			console.log(makeFortune(dictionary)+"." + "   ");
		}
	}

});


//make dictionary of word to words that follow that word, including dupes


var makeDict = function(text){
	var dict = {};
	for (var n = 0; n < text.length-1; n++){
		if (!dict[text[n]]){
			dict[text[n]] = [text[n+1]];
		}
		else {
			dict[text[n]].push(text[n+1]);
		}
	}
	return dict;

}

//create the fortune and return it
var makeFortune = function(dict, num){
	var keys = Object.keys(dict);
	var first = choose(keys);
	var current = choose(dict[first]);
	var fortune = first;
	var minLength = 60;

	while(fortune.length < minLength){
	  	fortune = fortune + " " + current;
	  	current = choose(dict[current]);	
	 }

	return fortune;

}
	

//helper function for choosing random value from key
var choose = function(words){
	var i = Math.floor(Math.random() * (words.length - 0)) + 0;
	return words[i];
}

