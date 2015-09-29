//get express
var express = require('express')
var app = express();


//use middlewear to allow access to the files in the public directory
app.use(express.static('public'));

app.get('/fortunes', function(req, res) {
	var fortunes = ["Nothing ever lasts, nothing really lasts forever",
				"Black or white? Shades of gray are more like it you know",
				"Like the flame that burns the candle the candle feeds the flame",
				"When the mood is right change the light and the moment's gone",
				"The old songs never end gives you something to believe in",
				"Electric light is keeping me from my dreams",
				"Everybody always laughs at love but what they want is to be proven wrong",
				"The strong give up and move on while the weak give up and stay",
				"Do what you want to do but be what you are",
				"Don't hold back your love",
				"If you're in it for love you ain't gonna get too far",
				"The more that you take the less you give back",
				"It's so easy to hurt others when you can't feel pain"];
	res.json(fortunes)
});

var server = app.listen(process.env.PORT || 5000, function(){
	var host = server.address().address;
   			var port = server.address().port;
 console.log('Listening at http://%s:%s', host, port);
});

// var server = app.listen(8080, function () {
// 			var host = server.address().address;
//   			var port = server.address().port;
//
// console.log('Listening at http://%s:%s', host, port);
// });
