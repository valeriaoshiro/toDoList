//when li is clicked, it strikethrough and changes color
$('li').on('click', function(){
	$(this).toggleClass('completed');
});

//when X is clicked, it deletes the todo
$('span').on('click', function(event){
	$(this).parent().remove();
	event.stopPropagation();
});