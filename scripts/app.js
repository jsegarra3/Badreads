$(function(){
	$('#book_row').hide();
	$('#author_form').submit(function(){
		event.preventDefault();
		goodreadsAdapter($('#author_name').val())
		setTimeout(()=>{
			populateBooks();
			$('#book_row').show();
		},1000)
	})
})
