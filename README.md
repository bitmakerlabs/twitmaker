# Adding AJAX Requests

Bwitter is a simple Twitter clone that allows you to create tweets about what you've learned at Bitmaker.

It's super simple, just one model: Tweet. I've implemented the feature to create new tweets (with a little bit of styling), now it's your turn to update this code with AJAX goodness.

This assignment will give you practice implementing AJAX requests both directly with jQuery and the Rails way. You'll also practice dealing with different response types.

## 1. jQuery AJAX request with HTML response

Make a branch called `jquery-ajax-html`.

Using jQuery to initiate your AJAX request (using [`$.ajax`](http://api.jquery.com/jQuery.ajax/)) and update the list of tweets by adding the HTML response to the top.

To properly `POST` your form data via `$.ajax`, you'll want to call the [`.serialize`](http://api.jquery.com/serialize/) method on your form to get the data in the right format.

## 2. jQuery AJAX request with JS response

Make a branch called `jquery-ajax-js`.

Now let's refactor the solution to accept a JavaScript response from the server. Remember that in this case the `dataType` attribute should be set to `script` (not `js`!).

On the server you'll have to refactor your action so that it returns a JS view rather than HTML.

## 3. Rails `remote: true` AJAX request

Make a branch called `rails-ajax`

Finally, let's refactor the solution to use Rails' `remote: true` feature. When using `remote: true`, Rails sends a JS view as a response by default, so it should be pretty similar to the previous example, but with less code.

Deleting code should bring joy to your life as a developer. It means there's less code to read and maintain later on!

---

## Stretch Assignments

1. Submit the form when pressing `return`, but not when pressing `option-return`
2. Add ability to delete a tweet via AJAX
3. Allow users to like a Tweet via AJAX
4. **Double Stretch!** Figure out how to use the [gemoji gem](https://github.com/github/gemoji) to add emoji to tweets and likes ([this link might help](https://www.reddit.com/r/rails/comments/38ir3m/how_exactly_do_you_add_emoji_to_a_rails_app_and/))
