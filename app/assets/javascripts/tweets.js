// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(function(){   //doc ready
	$('#new_tweet').on('submit', function(event){
		event.preventDefault();

		$.ajax({
				url: $(this).attr('action'),
				method: 'POST',
				data: $(this).serialize(),
				dataType: 'html'
			}).done(function(responseData){
				$(responseData).prependTo('.tweets');
			});
	});// end of on submit
}); //end doc ready
