$('#1').hide();

$('button').click(function(){
	$.get('/fortunes', appendToH);
	function appendToH(fortunes){
		var i = Math.floor(Math.random() * (fortunes.length - 0)) + 0;
		$('body').append('<p>'+ fortunes[i]+ '</p>');
		$('button').hide();
		$('#0').hide();
		$('#1').show();

		
	}
});

$('body').click(function(){
	$('p').hide();
	$('button').show();
	$('#1').hide();
	$('#0').show();

	
})

