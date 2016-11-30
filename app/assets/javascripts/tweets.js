// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(function() {
  $('#tweet-form').on("submit", function(event){
    event.preventDefault();

    var url = '/tweets'
    $.ajax({
      method: "POST",
      url: url,
      dataType: 'json',
      data: $(this).serialize()
    }).done(function(e){
      var date = new Date(e.created_at)
      var options = {
        month: "short", day: "numeric", hour: "2-digit", minute: "2-digit"
      };
      var format = date.toLocaleTimeString("en-us", options);

      $('ul.tweets').prepend(
        '<li class="tweet">' + '<p>' + e.message + '</p>' + '<time>' + format + '</time>' + '</li>'
      );
      $('#tweet-form')[0].reset();
    });
  });
});
