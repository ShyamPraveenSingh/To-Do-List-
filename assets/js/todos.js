//Check off Todos by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");

});

// to delete any todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(function(){
		$(this).remove();
	});
	event.stopPropagation();
});

//adding tasks to the list
$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//getting new todo task
		var todoText = $(this).val();
		$(this).val("");
		//create a new li and add
		$("ul").append("<li><span> <i class='fas fa-trash'></i> </span>" + todoText + "</li>")
	}

});