//when li is clicked, it strikethrough and changes color
$('ul').on('click', 'li', function(){
	$(this).toggleClass('completed');
});

//when X is clicked, it deletes the to-do
$('ul').on('click', 'span', function(event){
	$(this).parent().remove();
	event.stopPropagation();
});

//add new to-dos
$('input').keypress(function(event){
	if(event.which === 13){
		var inputToDo = $('input').val();
		$('ul').append('<li><span>X</span> ' + inputToDo + '</li>');
		$('input').val('');
	}
});