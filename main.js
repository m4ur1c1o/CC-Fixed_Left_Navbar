$(function(){

$('#top a').on("click", function(event){
	event.preventDefault();

	var link = $(this);

	// $('nav').toggle("slide", function(){
	// 	if ($(this).is(':visible')){
	// 		link.text("Cerrar Nav");
	// 	} else {
	// 		link.text("Abrir Nav");
	// 	}
	// });

	$('nav').animate({width:'toggle'}, 200, function(){
		if ($(this).is(':visible')){
			$('.container').css("margin-left", "180px")
			link.text("Cerrar Nav");
		} else {
			$('.container').css("margin-left", "20px")
			link.text("Abrir Nav");
		}
	});

	// $('#top a').text('Abrir Nav');
});


// $('#top a').on("click", function(event){
// 	event.preventDefault();
// 	$('#top a').removeClass('active');
// 	$('nav').toggle();
// 	$('#top a').text('Abrir Nav')
// });

});