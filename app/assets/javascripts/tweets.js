// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(function() {
  $('#new_tweet').on('submit', function(e) {
    e.preventDefault();
    $.ajax({
      url: $(this).attr('action'),
      method: $(this).attr('method'),
      dataType: 'html',
      data: $(this).serialize()
    }).done(function(data) {
      $('.tweets').first().prepend(data);
    }).fail(function(error) {
      console.log(error);
    }).always();
  });

});
