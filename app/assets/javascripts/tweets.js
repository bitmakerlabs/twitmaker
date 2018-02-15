// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
document.addEventListener('DOMContentLoaded', function() {

  var form = document.querySelector('form#new_tweet');
  var inputCreateTweetEle = document.querySelector('input#create-tweet');
  var ulTweetsEle = document.querySelector('ul.tweets')

  function updateTweet() {
    $.ajax({
      url: '/tweets',
      method: 'GET'
    });
  }

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    $.ajax({
      url: form.action ,
      method: form.method ,
      data: $(form).serialize(),
      dataType: 'json'
    }).done(function(responseData) {
      var li = document.createElement('li');
      var pName = document.createElement('p');
      var pCreated = document.createElement('time');
      pName.innerText = responseData.tweets.message
      pCreated.innerText = responseData.tweets.created_at;
      li.append(pName);
      li.append(pCreated);
      li.classList.add('tweet');
      ulTweetsEle.prepend(li);
    }).fail(function(_,b,c) {
      console.log("fail");
    });
  });
});
