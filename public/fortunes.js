$(function(){
	$.get('/fortunes', appendToH);
	function appendToH(fortunes){
		var i = Math.floor(Math.random() * (fortunes.length - 0)) + 0;
		$('p').append(fortunes[i]);
	}
});

