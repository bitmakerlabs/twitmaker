// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(function(){   //doc ready
	$('#new_tweet').on('submit', function(event){
		event.preventDefault();

		$.ajax({
				url: $(this).attr('action'),
				method: 'POST',
				data: $(this).serialize(),
				dataType: 'json'
			}).done(function(responseData){
				var twit = $('<li>').addClass('tweet')
														.append('<p>' + responseData.message + '</p>')
														.append('<time>' + responseData.created_at + '</time>')

				$(twit).prependTo('.tweets');
				$('#tweet_message').val('');
			});
	});// end of on submit
}); //end doc ready
