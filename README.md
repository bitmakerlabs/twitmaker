# Adding AJAX Requests

Twitmaker is a simple Twitter clone that allows you to create tweets about what you've learned at Bitmaker.

It's super simple, just one model: Tweet. I've implemented the feature to create new tweets (with a little bit of styling), now it's your turn to update this code with AJAX goodness.

This assignment will give you practice implementing AJAX requests with jQuery. You'll also practice dealing with different response types.

**To get started, you can fork the Twitmaker repository here: https://github.com/bitmakerlabs/twitmaker**


## Part 1: jQuery AJAX request with HTML response

Our first step will be to take our normal request-response cycle and update it to use an AJAX request. The benefit of doing this is that rather than re-rendering the entire page, including the head section, JavaScript, stylesheets and full layout, we'll only have to render the part of the page that changes.

This makes your app snappier and more interactive for your users!

#### It's Coding Time!
Start by making a branch called `jquery-ajax-html`.

Use jQuery to send your AJAX request to the server (using [`$.ajax`](http://api.jquery.com/jQuery.ajax/)).

To properly `POST` your form data via `$.ajax`, you'll want to call the [`.serialize`](http://api.jquery.com/serialize/) method on your form to get the data in the right format. [Check the docs for an example](http://api.jquery.com/serialize/).

When the server receives the request to create a new Tweet, instead of redirecting the user back to the index view, it should respond with HTML that represents just the new Tweet.

Finally, use jQuery DOM manipulation to update the list of tweets by adding the HTML response from the server to the top.


## Part 2: jQuery AJAX request with JSON response

Receiving HTML from the server is fine when you're the one writing the code on both the client and the server, since you know exactly what markup is required.

When we're dealing with more generic situations where we want to present the same data in different views or we're requesting data from a third-party service, receiving HTML as a response is really limiting. We may want to present the data differently than how the server is sending it to us!

#### It's Coding Time!
Start by making a branch called `jquery-ajax-json`.

Let's refactor the solution to accept a JSON response from the server. Remember that in this case the `dataType` attribute of the `$.ajax` method should be set to `json` (not `js`!).

On the server you'll have to refactor your action so that it returns JSON rather than HTML.


---

## Stretch Assignments

1. Submit the form when pressing `return`, but not when pressing `option-return`
2. Add ability to delete a tweet via AJAX
3. Allow users to like a tweet via AJAX
4. Display the tweet time in `Eastern Time (US & Canada)` (you can use `rake time:zones:all` to see all of the different time zones Rails knows about)
5. **Double Stretch!** Figure out how to use the [gemoji gem](https://github.com/github/gemoji) to add emoji to tweets and likes ([this link might help](https://www.reddit.com/r/rails/comments/38ir3m/how_exactly_do_you_add_emoji_to_a_rails_app_and/))
