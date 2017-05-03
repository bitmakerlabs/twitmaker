// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(function(){
  $('#new_tweet').on('submit', function(event){
    event.preventDefault();
    console.log($ (this).serialize()  );

    $.ajax({
      url: $(this).attr('action'),
      method: $(this).attr('method'),
      data: $(this).serialize(),
      dataType: 'html'
    }).done(function(data) {
      debugger;
      console.log('done');
      $('.tweets').prepend(data);
    }).fail(function(){
      console.log('FAILED');
    });
  });
});
