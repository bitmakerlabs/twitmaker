// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

document.addEventListener('DOMContentLoaded', function(){

  var tweet_body = document.getElementById('tweet-body');
  var form = document.getElementById('new_tweet');

  form.addEventListener('submit', function(e){
    e.preventDefault();

    $.ajax({
      url: form.action,
      method: form.method,
      data: $(form).serialize(),
      dataType: 'JSON'
    }).done(function(data) {
      var li = document.createElement('li');
      var first_tweet = document.querySelectorAll('.tweet')[0]
      li.className = 'tweet';
      li.innerText = data.message;
      tweet_body.insertBefore(li, first_tweet);

    });

  });

})
