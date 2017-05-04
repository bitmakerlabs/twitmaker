// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(function(){
  $('#new_tweet').on('submit', function(event){
    event.preventDefault();

    $.ajax({
      url: $(this).attr('action'),
      method: $(this).attr('method'),
      data: $(this).serialize(),
      dataType: 'json'
    }).done(function(data) {
      console.log('done');
      console.log(data);
      $('.tweets').prepend('<li>' + data.message + data.created_at + '</li>');
    }).fail(function(){
      console.log('FAILED');
    });
  });
});
