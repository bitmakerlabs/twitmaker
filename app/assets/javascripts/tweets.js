// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(function(){   //doc readyy

//link enter key with submit
	$('#new_tweet').keyup(function(event){
		if(event.keyCode == 13){
			$('#create-tweet').click();
		}
	});

//Submit tweet
	$('#new_tweet').on('submit', function(event){
		event.preventDefault();
		var btn = $('<button>').addClass('delete-btn').text('Delete')


		$.ajax({
				url: $(this).attr('action'),
				method: 'POST',
				data: $(this).serialize(),
				dataType: 'json'
			}).done(function(responseData){
				var twit = $('<li>').addClass('tweet')
														.append('<p>' + responseData.message + '</p>')
														.append('<time>' + responseData.created_at + '</time><br>')
														.append(btn);
				$(twit).prependTo('.tweets');
				$('#tweet_message').val('');
			});
	});// end of on submit

//Delete Tweet
	$('.delete-btn').on('click', function(){
		var self = $(this)
		$.ajax({
				url: '/tweets/' + self.attr('id'),
				method: 'delete',
				data: {},
				dataType: 'html'
			}).done(function(){
				console.log('YO');
				self.parent().remove();
			});

	}); //end of delete


}); //end doc ready
