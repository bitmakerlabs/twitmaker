class TweetsController < ApplicationController
  def index
    @tweets = Tweet.all.order(created_at: :desc)
    @tweet = Tweet.new

  end

  def create
    @tweet = Tweet.new(tweet_params)

    if @tweet.save
      respond_to do |format|
        format.html {
          if request.xhr?
            puts '*'*20
            p @tweet
            render partial: 'tweet'
          end
          redirect_to tweets_path
        }
        format.json {
          render json: {tweets: {message: @tweet.message, created_at: @tweet.created_at.strftime('%b %e, %l:%M %p')}}
        }
      end
    else
      render :index
    end
  end

  def destroy
  end

  private

  def tweet_params
    params.require(:tweet).permit(:message)
  end
end
