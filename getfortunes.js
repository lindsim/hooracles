//get express & set it up
var express = require('express')
var app = express();
var fs = require('fs')

//get the text file
fs.readFile('fortunes.txt', 'utf8', function (err, data) {
	if (err) {
    	return console.log(err);
  	}

	else {
			console.log('file accepted!');
			app.get('/', function (req, res) {
  			res.send(data);
			});

			var server = app.listen(3000, function () {
			var host = server.address().address;
  			var port = server.address().port;

  console.log('Listening at http://%s:%s', host, port);
});
		}
});

