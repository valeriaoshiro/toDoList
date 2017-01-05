//when li is clicked, it strikethrough and changes color
$('ul').on('click', 'li', function(){
	$(this).toggleClass('completed');
});

//when trash is clicked, it deletes the to-do
$('ul').on('click', 'span', function(event){
	$(this).parent().remove();
	event.stopPropagation();
});

//add new to-dos
$('input').keypress(function(event){
	if(event.which === 13){
		var inputToDo = $('input').val();
		$('ul').append('<li><span><i class="fa fa-trash" aria-hidden="true"></i></span> ' + inputToDo + '</li>');
		$('input').val('');
	}
});

//when + is clicked, it hides or brings back the input
$('.fa-plus').on('click', function(){
	$('input').fadeToggle();
})
