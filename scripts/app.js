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
	$('#book_row').on('click','.show_review',function() {
		let book = store().books.filter((book)=>{return this.id==book.id})[0]
		let rev = new Review(book.isbn,book.goodreads_id,book.title)
		$('#review_row').empty();
		$('#review_row').append(rev.getWidget())
	})
})
