console.log('1twerkin');


$(document).ready(function(){

var allCats = $.get('https://ga-cat-rescue.herokuapp.com/api/cats')
	.done(function(data) {
		var parsedCats = JSON.parse(data);
		for (var i = 0; i < parsedCats.length; i++) {
		 	$('#cats').append('<li>'+parsedCats[i].name + " - "+ parsedCats[i].note+'</li>');
		 }
		 console.log("list appended");

		 $('#new-cat').on("submit", function(event){
		 	event.preventDefault();
		 	
			var name = $('#cat-name').val(); //what you write in box
		
			var note = $('#cat-note').val(); //what you write in box
		

			let newCat = {
				name: name,
				note: note
			};

			let newCatString = JSON.stringify(newCat);
			console.log(newCatString);

			$.ajax({
				url: 'https://ga-cat-rescue.herokuapp.com/api/cats',
				type: 'POST',
				data: newCatString
			})
	// $.get('https://ga-cat-rescue.herokuapp.com/api/cats')
		.done(function(data){
			var newParsedCat = JSON.parse(data);
			// var addCat = newParsedCat.pop();
			// console.log(addCat);

			$('#cats').append('<li>'+newParsedCat.name+" - "+newParsedCat.note+'</li>');

		});
		
//Catthew McConaughey  Dazed and Cat-Fused

		// get it and append it from the end of the array

		//$('cats').append('<li>'+ parsedCats[i].name +" - "+ parsedCats[i].note);

	});
});
});
